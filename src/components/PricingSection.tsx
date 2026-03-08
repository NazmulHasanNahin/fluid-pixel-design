import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Basic",
    subtitle: "ONE PRODUCT SHOPIFY STORE DESIGN",
    price: "$80",
    period: "",
    description: "Shopify Store Design + Shopify Free Theme + One Product Research + Logo + Branding",
    delivery: "7-day delivery • Unlimited Revisions",
    bg: "bg-[hsl(var(--yellow-light))]",
    text: "text-foreground",
    btnClass: "bg-primary text-primary-foreground",
    badge: false,
    features: ["Functional website", "1 page", "Responsive design", "Content upload", "2 plugins/extensions", "E-commerce functionality", "1 product", "Payment Integration", "Opt-in form", "Autoresponder integration", "Speed optimization", "Hosting setup", "Social media icons"],
  },
  {
    name: "Standard",
    subtitle: "STANDARD SHOPIFY STORE DESIGN",
    price: "$250",
    period: "",
    description: "Shopify Store Design or Redesign + 20 Product Store + Winning Product Research + Logo + Branding",
    delivery: "10-day delivery • Unlimited Revisions",
    bg: "bg-[hsl(var(--purple))]",
    text: "text-white",
    btnClass: "bg-white text-[hsl(var(--purple))]",
    badge: true,
    features: ["Functional website", "5 pages", "Responsive design", "Content upload", "4 plugins/extensions", "E-commerce functionality", "20 products", "Payment Integration", "Opt-in form", "Autoresponder integration", "Speed optimization", "Hosting setup", "Social media icons"],
  },
  {
    name: "Premium",
    subtitle: "PREMIUM SHOPIFY STORE DESIGN",
    price: "$300",
    period: "",
    description: "Premium Store Design + 50 Products + Branding + SEO + Winning Product Research + Apps Installation",
    delivery: "14-day delivery • Unlimited Revisions",
    bg: "bg-[hsl(var(--blue-light))]",
    text: "text-foreground",
    btnClass: "bg-primary text-primary-foreground",
    badge: false,
    features: ["Functional website", "7 pages", "Responsive design", "Content upload", "6 plugins/extensions", "E-commerce functionality", "50 products", "Payment Integration", "Opt-in form", "Autoresponder integration", "Speed optimization", "Hosting setup", "Social media icons"],
  },
];

export default function PricingSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="pricing" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Choose Your Best{" "}
            <span className="font-serif-display italic font-normal">Package</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 * i, type: "spring", stiffness: 120 }}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
              className={`${p.bg} ${p.text} rounded-3xl p-8 md:p-10 flex flex-col relative`}
            >
              {p.badge && (
                <span className="absolute top-4 right-4 bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] text-xs font-bold px-3 py-1 rounded-full">
                  BEST VALUE
                </span>
              )}
              <span className="text-sm font-medium opacity-80">{p.name}</span>
              <p className="text-xs opacity-60 mt-1">{p.subtitle}</p>
              <div className="mt-4 flex items-end gap-1">
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + 0.2 * i, type: "spring", stiffness: 200 }}
                  className="text-4xl md:text-5xl font-bold"
                >
                  {p.price}
                </motion.span>
              </div>
              <p className="mt-2 text-xs opacity-70 leading-relaxed">{p.description}</p>
              <p className="mt-2 text-xs font-medium opacity-80">{p.delivery}</p>

              <div className="mt-6 mb-2">
                <p className="text-xs font-semibold opacity-80 mb-3">What's Included</p>
              </div>
              <ul className="space-y-2 flex-1">
                {p.features.map((f, fi) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -15 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + 0.2 * i + fi * 0.04 }}
                    className="flex items-center gap-3 text-xs"
                  >
                    <Check className="w-3.5 h-3.5 flex-shrink-0" />
                    {f}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`${p.btnClass} mt-8 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-opacity`}
              >
                Book a Call <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}