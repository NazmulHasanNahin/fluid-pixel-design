import { ArrowRight, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { useRef } from "react";

const subtitleWords = "We design, develop, and optimize conversion focused Shopify stores for fast growing DTC brands worldwide.".split(" ");

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const headlinePart1 = "High Converting Shopify Stores ";
  const headlinePart2 = "for DTC Brands";
  const { displayedText: typed1 } = useTypingAnimation(headlinePart1, 45, 400);
  const { displayedText: typed2, isComplete: done2, showCursor } = useTypingAnimation(headlinePart2, 45, 400 + headlinePart1.length * 45 + 100);

  const stats = [
    { value: "7+", label: "Projects Delivered" },
    { value: "5+", label: "Happy Clients" },
    { value: "2+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full pt-48 2xl:pb-20 pb-10 px-6 overflow-hidden hero-gradient"
    >
      <motion.div
        style={{ y: yParallax, opacity: opacityParallax }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left — Text content */}
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-foreground">
              {typed1}
              <span className="font-serif-display italic font-normal">{typed2}</span>
              <motion.span
                animate={{ opacity: showCursor ? 1 : 0 }}
                className="inline-block w-[3px] h-[0.8em] bg-foreground ml-1 align-middle"
                style={{ display: done2 ? "none" : "inline-block" }}
              />
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 + (headlinePart1.length + headlinePart2.length) * 0.045 + 0.3 }}
            className="mt-6 text-lg text-muted-foreground max-w-lg"
          >
            {subtitleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 0.2 + (headlinePart1.length + headlinePart2.length) * 0.045 + 0.4 + i * 0.04,
                  duration: 0.4,
                }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.2 + (headlinePart1.length + headlinePart2.length) * 0.045 + 1.2,
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="https://calendly.com/devzeroone"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-semibold transition-colors"
            >
              Book A Free Call <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold border border-border text-foreground hover:bg-muted transition-colors"
            >
              View Our Project
            </motion.button>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2 + (headlinePart1.length + headlinePart2.length) * 0.045 + 1.6,
            }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2 + (headlinePart1.length + headlinePart2.length) * 0.045 + 1.7 + i * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right — Video placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-muted/60 border border-border backdrop-blur-sm shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-purple/10 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-2xl"
            >
              <Play className="w-6 h-6 ml-1" />
            </motion.button>
          </div>

          <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md text-xs font-medium text-foreground border border-border/50">
            Watch our process
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}