import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Palette, RefreshCw, Code, Package, Zap, TrendingUp } from "lucide-react";
import BlurTypeText from "@/components/BlurTypeText";

const services = [
  { icon: Palette, label: "Shopify Store Design", desc: "Beautiful, conversion-focused store designs that capture your brand and drive sales.", bg: "bg-[hsl(var(--purple-light))]" },
  { icon: RefreshCw, label: "Store Redesign", desc: "Transform your existing store with modern aesthetics and improved user experience.", bg: "bg-[hsl(var(--green-light))]" },
  { icon: Code, label: "Custom Development", desc: "Tailored Shopify solutions with custom themes, apps, and integrations.", bg: "bg-[hsl(var(--blue-light))]" },
  { icon: Package, label: "Dropshipping Setup", desc: "Complete dropshipping store setup with supplier integration and automation.", bg: "bg-[hsl(var(--yellow-light))]" },
  { icon: Zap, label: "Store Optimization", desc: "Speed optimization, SEO, and conversion rate improvements for better performance.", bg: "bg-[hsl(var(--pink-light))]" },
  { icon: TrendingUp, label: "Growth Strategy", desc: "Data-driven strategies to scale your e-commerce business and increase revenue.", bg: "bg-[hsl(var(--peach-light))]" },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" ref={ref} className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <BlurTypeText
            text="What We Do"
            isVisible={isVisible}
            className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl md:text-5xl font-bold text-foreground"
          >
            Our{" "}
            <span className="font-serif-display italic font-normal">Services</span>
          </motion.h2>
          <BlurTypeText
            text="End-to-end Shopify solutions designed to help your brand grow from zero to one."
            isVisible={isVisible}
            delay={0.3}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, type: "spring", stiffness: 150 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`${s.bg} rounded-2xl p-6 cursor-pointer transition-colors duration-300`}
            >
              <s.icon className="w-8 h-8 text-foreground mb-4" />
              <h3 className="text-sm font-semibold text-foreground mb-2">{s.label}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
