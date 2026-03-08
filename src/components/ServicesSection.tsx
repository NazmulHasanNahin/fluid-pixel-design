import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Palette, RefreshCw, Code, Package, Zap, TrendingUp, CheckCircle2, ArrowUpRight } from "lucide-react";
import BlurTypeText from "@/components/BlurTypeText";
import { useRef } from "react";

const services = [
  {
    icon: Palette,
    label: "Shopify Store Design",
    tag: "DESIGN",
    desc: "Beautiful, conversion-focused store designs that capture your brand and drive sales.",
    features: [
      "Custom theme design tailored to your brand",
      "Mobile-first responsive layouts",
      "Conversion-optimized product pages",
    ],
    techs: ["Shopify", "Liquid", "CSS", "Figma"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    icon: RefreshCw,
    label: "Store Redesign",
    tag: "REDESIGN",
    desc: "Transform your existing store with modern aesthetics and improved user experience.",
    features: [
      "Full UX audit & improvement plan",
      "Modern design system implementation",
      "Performance & speed optimization",
    ],
    techs: ["Shopify", "UX/UI", "Analytics", "A/B Testing"],
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  },
  {
    icon: Code,
    label: "Custom Development",
    tag: "DEVELOPMENT",
    desc: "Tailored Shopify solutions with custom themes, apps, and integrations.",
    features: [
      "Custom Shopify app development",
      "Third-party API integrations",
      "Advanced Liquid theme customization",
    ],
    techs: ["React", "Node.js", "Shopify API", "GraphQL"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    icon: Package,
    label: "Dropshipping Setup",
    tag: "DROPSHIPPING",
    desc: "Complete dropshipping store setup with supplier integration and automation.",
    features: [
      "Supplier sourcing & integration",
      "Automated order fulfillment",
      "Inventory sync & management",
    ],
    techs: ["Shopify", "DSers", "Oberlo", "Automation"],
    img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop",
  },
  {
    icon: Zap,
    label: "Store Optimization",
    tag: "OPTIMIZATION",
    desc: "Speed optimization, SEO, and conversion rate improvements for better performance.",
    features: [
      "Core Web Vitals optimization",
      "SEO strategy & implementation",
      "Conversion rate optimization",
    ],
    techs: ["PageSpeed", "SEO", "CRO", "Analytics"],
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
  },
  {
    icon: TrendingUp,
    label: "Growth Strategy",
    tag: "STRATEGY",
    desc: "Data-driven strategies to scale your e-commerce business and increase revenue.",
    features: [
      "Market analysis & positioning",
      "Growth roadmap development",
      "Revenue scaling strategies",
    ],
    techs: ["Analytics", "Strategy", "Marketing", "Data"],
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      className="sticky top-24 mb-8"
      style={{ zIndex: index + 1 }}
    >
      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left: Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xs font-bold tracking-widest text-accent uppercase mb-4"
            >
              {service.tag}
            </motion.span>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-serif-display">
              {service.label}
            </h3>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
              {service.desc}
            </p>

            <div className="border-t border-border pt-6 mb-6">
              <div className="space-y-3">
                {service.features.map((feat, i) => (
                  <motion.div
                    key={feat}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm text-muted-foreground">{feat}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {service.techs.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full border border-accent/40 text-accent font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-semibold"
              >
                Get Started <ArrowUpRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-muted transition-colors"
              >
                Learn More <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* Right: Image preview */}
          <div className="relative overflow-hidden bg-muted min-h-[300px] lg:min-h-[unset]">
            <motion.img
              src={service.img}
              alt={service.label}
              className="w-full h-full object-cover absolute inset-0"
              style={{ y: imgY }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent lg:bg-gradient-to-l lg:from-card/30 lg:via-transparent lg:to-transparent" />
          </div>
        </div>
      </div>
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

        <div className="relative">
          {services.map((service, i) => (
            <ServiceCard key={service.label} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
