import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Palette, Code, Megaphone, Layers, BarChart3 } from "lucide-react";

const services = [
  { icon: Palette, label: "Brand Strategy", bg: "bg-[hsl(var(--purple-light))]" },
  { icon: Code, label: "Web Development", bg: "bg-[hsl(var(--pink-light))]" },
  { icon: Megaphone, label: "Digital Marketing", bg: "bg-[hsl(var(--blue-light))]" },
  { icon: Layers, label: "UI/UX Design", bg: "bg-[hsl(var(--peach-light))]" },
  { icon: BarChart3, label: "Analytics", bg: "bg-[hsl(var(--green-light))]" },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" ref={ref} className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-center text-foreground"
        >
          Where innovation meets{" "}
          <span className="font-serif-display italic font-normal">aesthetics</span>
        </motion.h2>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`${s.bg} rounded-2xl p-6 flex flex-col items-center text-center gap-4 cursor-pointer hover:scale-105 transition-transform duration-300`}
            >
              <s.icon className="w-8 h-8 text-foreground" />
              <span className="text-sm font-semibold text-foreground">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
