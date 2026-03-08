import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    period: "/mo",
    description: "Perfect for early-stage startups",
    bg: "bg-[hsl(var(--yellow-light))]",
    text: "text-foreground",
    btnClass: "bg-primary text-primary-foreground",
    features: ["Brand Strategy Session", "Logo & Identity Design", "1 Landing Page", "Social Media Kit", "2 Revision Rounds"],
  },
  {
    name: "Pro",
    price: "$3,800",
    period: "/mo",
    description: "For growing brands that need more",
    bg: "bg-[hsl(var(--purple))]",
    text: "text-white",
    btnClass: "bg-white text-foreground",
    features: ["Everything in Starter", "Full Website (up to 8 pages)", "SEO Optimization", "Motion & Micro-animations", "Unlimited Revisions"],
  },
];

export default function PricingSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="pricing" ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-center text-foreground"
        >
          Pick the plan that fits your{" "}
          <span className="font-serif-display italic font-normal">start-up</span>
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 * i, type: "spring", stiffness: 120 }}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
              className={`${p.bg} ${p.text} rounded-3xl p-8 md:p-10 flex flex-col`}
            >
              <span className="text-sm font-medium opacity-80">{p.name}</span>
              <div className="mt-4 flex items-end gap-1">
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + 0.2 * i, type: "spring", stiffness: 200 }}
                  className="text-4xl md:text-5xl font-bold"
                >
                  {p.price}
                </motion.span>
                <span className="text-lg opacity-60 mb-1">{p.period}</span>
              </div>
              <p className="mt-2 text-sm opacity-70">{p.description}</p>

              <ul className="mt-8 space-y-3 flex-1">
                {p.features.map((f, fi) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -15 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + 0.2 * i + fi * 0.06 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <Check className="w-4 h-4 flex-shrink-0" />
                    {f}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`${p.btnClass} mt-8 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-opacity`}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
