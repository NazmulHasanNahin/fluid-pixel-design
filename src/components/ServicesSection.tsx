import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Palette, RefreshCw, Code, Package, Zap, TrendingUp, CheckCircle2, ArrowUpRight } from "lucide-react";
import BlurTypeText from "@/components/BlurTypeText";
import { useRef } from "react";

const services = [
  {
    icon: Palette,
    label: "Shopify Store Design",
    desc: "Beautiful, conversion-focused store designs that capture your brand and drive sales.",
    features: [
      "Custom theme design tailored to your brand",
      "Mobile-first responsive layouts",
      "Conversion-optimized product pages",
    ],
    tags: ["Shopify Store Design", "Brand Identity"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    accent: "bg-[hsl(var(--green-light))]",
  },
  {
    icon: RefreshCw,
    label: "Store Redesign",
    desc: "Transform your existing store with modern aesthetics and improved user experience.",
    features: [
      "Full UX audit & improvement plan",
      "Modern design system implementation",
      "Performance & speed optimization",
    ],
    tags: ["Visual Story Telling", "Web & Mobile Design"],
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    accent: "bg-[hsl(var(--purple-light))]",
  },
  {
    icon: Code,
    label: "Custom Development",
    desc: "Tailored Shopify solutions with custom themes, apps, and integrations.",
    features: [
      "Custom Shopify app development",
      "Third-party API integrations",
      "Advanced Liquid theme customization",
    ],
    tags: ["UX Research", "Interface Design"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    accent: "bg-[hsl(var(--blue-light))]",
  },
  {
    icon: Package,
    label: "Dropshipping Setup",
    desc: "Complete dropshipping store setup with supplier integration and automation.",
    features: [
      "Supplier sourcing & integration",
      "Automated order fulfillment",
      "Inventory sync & management",
    ],
    tags: ["Product Design", "Interaction Design"],
    img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop",
    accent: "bg-[hsl(var(--peach-light))]",
  },
  {
    icon: Zap,
    label: "Store Optimization",
    desc: "Speed optimization, SEO, and conversion rate improvements for better performance.",
    features: [
      "Core Web Vitals optimization",
      "SEO strategy & implementation",
      "Conversion rate optimization",
    ],
    tags: ["Performance", "SEO & CRO"],
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
    accent: "bg-[hsl(var(--yellow-light))]",
  },
  {
    icon: TrendingUp,
    label: "Growth Strategy",
    desc: "Data-driven strategies to scale your e-commerce business and increase revenue.",
    features: [
      "Market analysis & positioning",
      "Growth roadmap development",
      "Revenue scaling strategies",
    ],
    tags: ["Analytics", "Growth Marketing"],
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    accent: "bg-[hsl(var(--pink-light))]",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
      className="group cursor-pointer"
    >
      {/* Image container with accent corners */}
      <div className="relative rounded-2xl overflow-hidden bg-muted aspect-[4/3]">
        <div
          className={`absolute top-0 left-0 w-24 h-16 ${service.accent} rounded-br-[2rem] z-10 opacity-80`}
        />
        <div
          className={`absolute top-0 right-0 w-16 h-10 ${service.accent} rounded-bl-[2rem] z-10 opacity-50`}
        />

        <motion.img
          src={service.img}
          alt={service.label}
          className="w-full h-full object-cover"
          loading="lazy"
          style={{ y: imgY, scale: imgScale }}
        />

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-foreground/10 backdrop-blur-[2px] flex items-center justify-center z-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-14 h-14 rounded-full bg-background/90 flex items-center justify-center shadow-lg"
          >
            <ArrowUpRight className="w-5 h-5 text-foreground" />
          </motion.div>
        </motion.div>
      </div>

      {/* Title & Tags */}
      <motion.div
        className="mt-5 px-1"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
      >
        <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
          {service.label}
        </h3>
        <div className="flex gap-2 mt-3 flex-wrap">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-4 py-1.5 rounded-full border border-border text-muted-foreground bg-background hover:border-accent/50 hover:text-foreground transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" ref={ref} className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {services.map((service, i) => (
            <ServiceCard key={service.label} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
