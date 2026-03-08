import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { title: "Elevate App", tags: ["UX Research", "Interface Design"], img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop", span: "" },
  { title: "Bloom Studio", tags: ["Brand Strategy", "Web Design"], img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", span: "" },
  { title: "Genome", tags: ["Brand Identity", "Web"], img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", span: "md:col-span-1" },
  { title: "Pulse Analytics", tags: ["Data Viz", "UI Design"], img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop", span: "md:col-span-1" },
];

export default function PortfolioSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="work" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-center text-foreground"
        >
          How we <span className="font-serif-display italic font-normal">transformed</span> a small
          <br />business's online presence
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 * i, type: "spring", stiffness: 120 }}
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
      </div>
    </section>
  );
}
