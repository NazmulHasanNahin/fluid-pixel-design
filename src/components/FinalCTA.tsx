import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" ref={ref} className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="max-w-5xl mx-auto rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(210 80% 92%) 0%, hsl(20 80% 92%) 100%)"
        }}
      >
        {/* Floating decorative elements */}
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-16 h-16 rounded-full bg-[hsl(var(--purple))]/10"
        />
        <motion.div
          animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-[hsl(var(--accent))]/15"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-foreground leading-tight relative z-10"
        >
          Innovative solutions for{" "}
          <span className="font-serif-display italic font-normal">bold brands</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-4 text-muted-foreground max-w-xl mx-auto relative z-10"
        >
          Ready to transform your digital presence? Let's build something extraordinary together.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.06, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-semibold transition-colors relative z-10"
        >
          Let's craft together <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </section>
  );
}
