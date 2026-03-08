import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const logos = ["Spotify", "Slack", "Notion", "Figma", "Stripe", "Webflow", "Framer", "Linear"];

export default function LogoMarquee() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 border-y border-border overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center text-sm text-muted-foreground mb-8">
          Loved by <span className="font-semibold text-foreground">1000+</span> big and small brands
        </p>
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
            {[...logos, ...logos].map((name, i) => (
              <span key={i} className="text-2xl font-bold text-muted-foreground/40 select-none">
                {name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
