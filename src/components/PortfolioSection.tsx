import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";
import BlurTypeText from "@/components/BlurTypeText";
import { useRef } from "react";

const projects = [
  {
    title: "NeurospicyKidz",
    tags: ["Shopify Store Design", "Brand Identity"],
    img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop",
    accent: "bg-[hsl(var(--green-light))]",
  },
  {
    title: "Esabao",
    tags: ["Dropshipping", "Store Optimization"],
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    accent: "bg-[hsl(var(--purple-light))]",
  },
  {
    title: "Noeva Boutique",
    tags: ["Fashion Store", "Custom Development"],
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    accent: "bg-[hsl(var(--peach-light))]",
  },
  {
    title: "Health Care Store",
    tags: ["Product Design", "Interaction Design"],
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    accent: "bg-[hsl(var(--blue-light))]",
  },
  {
    title: "DecalGraphixx",
    tags: ["Visual Story Telling", "Web Design"],
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop",
    accent: "bg-[hsl(var(--yellow-light))]",
  },
  {
    title: "One Product Store",
    tags: ["UX Research", "Interface Design"],
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
    accent: "bg-[hsl(var(--pink-light))]",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
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
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      className="group cursor-pointer"
    >
      {/* Image container with accent corner */}
      <div className="relative rounded-2xl overflow-hidden bg-muted aspect-[4/3]">
        {/* Accent shape top-left */}
        <div
          className={`absolute top-0 left-0 w-24 h-16 ${project.accent} rounded-br-[2rem] z-10 opacity-80`}
        />
        {/* Accent shape top-right (smaller) */}
        <div
          className={`absolute top-0 right-0 w-16 h-10 ${project.accent} rounded-bl-[2rem] z-10 opacity-50`}
        />

        <motion.img
          src={project.img}
          alt={project.title}
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
            <ArrowRight className="w-5 h-5 text-foreground" />
          </motion.div>
        </motion.div>
      </div>

      {/* Title & Tags */}
      <motion.div
        className="mt-5 px-1"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
      >
        <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <div className="flex gap-2 mt-3 flex-wrap">
          {project.tags.map((tag) => (
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

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
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
