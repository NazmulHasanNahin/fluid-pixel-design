import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, Handshake, ThumbsUp, TrendingUp, BarChart3, Brain } from "lucide-react";

const values = [
  { icon: Heart, title: "Treats your business like our own", desc: "We work with full ownership and responsibility, focusing on what truly benefits your business growth and long-term success.", bg: "bg-[hsl(var(--purple-light))]" },
  { icon: Handshake, title: "Trusted business partner", desc: "More than a service provider, we collaborate closely with you to understand goals and build strategies that deliver results.", bg: "bg-[hsl(var(--green-light))]" },
  { icon: ThumbsUp, title: "Client satisfaction is top priority", desc: "Your satisfaction drives every decision we make, ensuring quality delivery, clear communication, and consistent improvements.", bg: "bg-[hsl(var(--yellow-light))]" },
  { icon: TrendingUp, title: "Focus on long-term growth", desc: "We design scalable solutions that support sustainable growth instead of short-term wins or quick fixes.", bg: "bg-[hsl(var(--pink-light))]" },
  { icon: BarChart3, title: "Delivers real results", desc: "Our strategies are data-driven and conversion-focused, helping you increase sales, engagement, and overall performance.", bg: "bg-[hsl(var(--blue-light))]" },
  { icon: Brain, title: "Data-driven decision making", desc: "We analyze user behavior and performance metrics to make informed decisions that improve conversions and maximize ROI.", bg: "bg-[hsl(var(--peach-light))]" },
];

export default function AboutStats() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">The Difference</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Why Choose{" "}
            <span className="font-serif-display italic font-normal">DEVZeroOne</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, type: "spring", stiffness: 150 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`${v.bg} rounded-2xl p-6 cursor-pointer transition-colors duration-300`}
            >
              <v.icon className="w-8 h-8 text-foreground mb-4" />
              <h3 className="text-sm font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}