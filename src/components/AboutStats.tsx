import { motion } from "framer-motion";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

const badges = [
  { label: "🎨 Creativity", bg: "bg-[hsl(var(--purple-light))]", text: "text-[hsl(var(--purple))]" },
  { label: "🚀 Innovation", bg: "bg-[hsl(var(--green-light))]", text: "text-foreground" },
  { label: "📐 Strategy", bg: "bg-[hsl(var(--yellow-light))]", text: "text-[hsl(var(--accent-foreground))]" },
];

const stats = [
  { prefix: "+", value: 40, label: "Projects Completed" },
  { prefix: "+", value: 15, label: "Years of Experience" },
  { prefix: "+", value: 12, label: "Awards Won" },
];

function StatCard({ prefix, value, label, isVisible, index }: { prefix: string; value: number; label: string; isVisible: boolean; index: number }) {
  const count = useCountUp(value, isVisible);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.15, type: "spring", stiffness: 150 }}
      className="text-center"
    >
      <motion.div
        className="text-5xl md:text-6xl font-bold text-foreground"
        animate={isVisible ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 0.3, delay: 0.4 + index * 0.15 + 0.5 }}
      >
        <span className="text-3xl md:text-4xl align-top">{prefix}</span>
        {count}
      </motion.div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </motion.div>
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
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            We fuse{" "}
            {badges.map((b, i) => (
              <span key={b.label}>
                <motion.span
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, type: "spring", stiffness: 300 }}
                  className={`${b.bg} ${b.text} px-3 py-1 rounded-full text-sm font-medium inline-block`}
                >
                  {b.label}
                </motion.span>
                {i < badges.length - 1 && (i === badges.length - 2 ? " & " : ", ")}
              </span>
            ))}
            <br />
            to craft exceptional, digital experiences strategy, and
            <br />
            technology to drive exceptional, impactful results.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} isVisible={isVisible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
