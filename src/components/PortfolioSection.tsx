import { motion, type Easing } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import BlurTypeText from "@/components/BlurTypeText";

const projects = [
  { title: "NeurospicyKidz", tags: ["Toy", "Shopify Store"], img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop", span: "" },
  { title: "Esabao", tags: ["Dropshipping", "Shopify Store"], img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", span: "" },
  { title: "Noeva Boutique", tags: ["Fashion", "Shopify Store"], img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop", span: "" },
  { title: "Health Care Store", tags: ["Health Care", "Shopify Store"], img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop", span: "" },
  { title: "One Product Store", tags: ["One Product", "Shopify Store"], img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop", span: "" },
  { title: "DecalGraphixx", tags: ["Sticker", "Shopify Store"], img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop", span: "" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 + i * 0.12, ease: "easeOut" },
  }),
};

export default function PortfolioSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="portfolio" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <BlurTypeText
            text="Portfolio"
            isVisible={isVisible}
            className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl md:text-5xl font-bold text-foreground"
          >
            Our Recent{" "}
            <span className="font-serif-display italic font-normal">Work</span>
          </motion.h2>
          <BlurTypeText
            text="Explore some of the successful Shopify stores we've built for clients worldwide."
            isVisible={isVisible}
            delay={0.3}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className={`group rounded-2xl overflow-hidden border border-border bg-card cursor-pointer ${p.span}`}
            >
              <div className="overflow-hidden relative">
                <motion.img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-primary/40 flex items-center justify-center"
                >
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-foreground" />
                  </div>
                </motion.div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-muted transition-colors"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
