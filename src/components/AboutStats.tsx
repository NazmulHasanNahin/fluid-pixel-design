import { motion } from "framer-motion";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

const badges = [
  { label: "Creativity", bg: "bg-[hsl(var(--purple-light))]", text: "text-[hsl(var(--purple))]" },
  { label: "Innovation", bg: "bg-[hsl(var(--yellow-light))]", text: "text-[hsl(var(--accent-foreground))]" },
  { label: "Strategy", bg: "bg-[hsl(var(--green-light))]", text: "text-foreground" },
];

const stats = [
  { value: 40, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 12, suffix: "+", label: "Awards Won" },
];

function StatCard({ value, suffix, label, isVisible }: { value: number; suffix: string; label: string; isVisible: boolean }) {
  const count = useCountUp(value, isVisible);
  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-foreground">{count}{suffix}</div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export default function AboutStats() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="aboutus" ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
            Crafting exceptional & technology driven{" "}
            <span className="font-serif-display italic font-normal">strategies</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
            {badges.map((b) => (
              <span key={b.label} className={`${b.bg} ${b.text} px-4 py-1.5 rounded-full text-sm font-medium`}>
                {b.label}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12"
        >
          {stats.map((s) => (
            <StatCard key={s.label} {...s} isVisible={isVisible} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
