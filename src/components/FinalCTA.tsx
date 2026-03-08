import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" ref={ref} className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto rounded-3xl p-12 md:p-20 text-center"
        style={{
          background: "linear-gradient(135deg, hsl(210 80% 92%) 0%, hsl(20 80% 92%) 100%)"
        }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
          Innovative solutions for{" "}
          <span className="font-serif-display italic font-normal">bold brands</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Ready to transform your digital presence? Let's build something extraordinary together.
        </p>
        <button className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
          Let's craft together <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>
    </section>
  );
}
