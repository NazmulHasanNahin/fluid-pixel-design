import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-12 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto bg-primary text-primary-foreground rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">See Our Work in Action.</h3>
          <p className="mt-2 text-primary-foreground/70 text-lg">Start Your Creative Journey with Us!</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex items-center gap-2 bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Let's Collaborate <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-6 py-3 rounded-full text-sm font-semibold border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
            View Portfolio
          </button>
        </div>
      </motion.div>
    </section>
  );
}
