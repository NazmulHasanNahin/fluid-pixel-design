import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-center text-foreground"
        >
          What our <span className="font-serif-display italic font-normal">valued</span> clients
          <br />are saying about us
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          {/* Large testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 md:row-span-2 rounded-2xl bg-primary text-primary-foreground p-8 md:p-12 flex flex-col justify-between relative overflow-hidden min-h-[320px]"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Quote className="w-12 h-12 text-primary-foreground/20" />
            </motion.div>
            <div>
              <p className="text-lg md:text-xl leading-relaxed mt-6">
                "Working with DEVZeroOne transformed our online store completely. Their strategic approach to Shopify development and conversion optimization exceeded every expectation we had."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center text-sm font-bold text-[hsl(var(--accent-foreground))]">MK</div>
                <div>
                  <div className="font-semibold">Michael Kim</div>
                  <div className="text-sm text-primary-foreground/60">Founder, NeurospicyKidz</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="rounded-2xl bg-[hsl(var(--accent))] p-8 flex flex-col justify-between"
          >
            <span className="text-sm font-medium text-[hsl(var(--accent-foreground))]">Facts & Numbers</span>
            <div>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
                className="text-5xl font-bold text-[hsl(var(--accent-foreground))]"
              >
                98%
              </motion.div>
              <p className="text-sm text-[hsl(var(--accent-foreground))]/70 mt-2">Client satisfaction rate across all projects</p>
            </div>
          </motion.div>

          {/* Quote testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.08, type: "spring", stiffness: 400 }}
                >
                  <Star className="w-4 h-4 fill-[hsl(var(--accent))] text-[hsl(var(--accent))]" />
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-foreground leading-relaxed font-medium">
              "DEVZeroOne built our Shopify store from scratch with exceptional attention to detail. Sales increased by 40% within the first month of launch."
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[hsl(var(--purple-light))] flex items-center justify-center text-xs font-bold">SR</div>
              <div>
                <div className="text-sm font-semibold text-foreground">Sarah Reed</div>
                <div className="text-xs text-muted-foreground">Owner, Noeva Boutique</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}