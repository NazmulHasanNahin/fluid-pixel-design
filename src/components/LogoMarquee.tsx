import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const logos = ["Shopify", "Stripe", "Klaviyo", "Oberlo", "DSers", "PageFly", "Loox", "Judge.me"];

export default function LogoMarquee() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 border-y border-border overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by <span className="font-semibold text-foreground">DTC brands</span> worldwide
        </p>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex overflow-hidden">
            <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
              {[...logos, ...logos, ...logos].map((name, i) => (
                <span key={i} className="text-2xl font-bold text-muted-foreground/30 select-none tracking-wide">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}