import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Trophy, Award, Star } from "lucide-react";

const accolades = [
  {
    icon: Trophy,
    title: "Best Design",
    desc: "Selected for top edge-cutting design and illustration projects.",
    bg: "bg-muted/50",
  },
  {
    icon: Award,
    title: "Featured Work",
    desc: "Recognized for creative innovation and modern design approach.",
    bg: "bg-muted/50",
  },
  {
    icon: Star,
    title: "Innovation Award",
    desc: "Honored at the Dan Notable Design and Art Awards.",
    bg: "bg-muted/50",
  },
];

export default function AccoladesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-center text-foreground"
        >
          Accolades and achievements
          <br />
          celebration our{" "}
          <span className="font-serif-display italic font-normal">design excellence</span>
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {accolades.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i, type: "spring", stiffness: 120 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
              className={`${item.bg} rounded-2xl p-8 border border-border cursor-pointer`}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
                className="w-12 h-12 rounded-xl bg-background flex items-center justify-center mb-6"
              >
                <item.icon className="w-6 h-6 text-foreground" />
              </motion.div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
