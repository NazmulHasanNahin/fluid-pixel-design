import { ArrowRight, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { useRef } from "react";

const letterVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.6 + i * 0.03,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const subtitleWords = "We craft digital experiences that captivate audiences and drive measurable growth for forward-thinking brands.".split(" ");

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const headlinePart1 = "Building bold brands ";
  const headlinePart2 = "with thoughtful design";
  const { displayedText: typed1, isComplete: done1 } = useTypingAnimation(headlinePart1, 45, 400);
  const { displayedText: typed2, isComplete: done2, showCursor } = useTypingAnimation(headlinePart2, 45, 400 + headlinePart1.length * 45 + 100);

  return (
    <section ref={sectionRef} className="pt-32 pb-20 px-6 overflow-hidden">
      <motion.div
        style={{ y: yParallax, opacity: opacityParallax }}
        className="max-w-5xl mx-auto text-center"
      >
        {/* Typing headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight text-foreground min-h-[1.2em] md:min-h-[2.4em]">
            {typed1}
            <span className="font-serif-display italic font-normal">{typed2}</span>
            <motion.span
              animate={{ opacity: showCursor ? 1 : 0 }}
              className="inline-block w-[3px] h-[0.8em] bg-foreground ml-1 align-middle"
              style={{ display: done2 ? "none" : "inline-block" }}
            />
          </h1>
        </motion.div>

        {/* Subtitle with word-by-word reveal */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 + (headlinePart1.length + headlinePart2.length) * 0.045 + 0.3 }}
          className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
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

        {/* CTA Button with bounce */}
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
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-semibold transition-colors"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Social proof with staggered avatars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2 + (headlinePart1.length + headlinePart2.length) * 0.045 + 1.6,
          }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <div className="flex -space-x-3">
            {[
              "hsl(var(--accent))",
              "hsl(var(--purple))",
              "hsl(var(--pink-light))",
              "hsl(var(--blue-light))",
            ].map((bg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  delay: 0.2 + (headlinePart1.length + headlinePart2.length) * 0.045 + 1.7 + i * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="w-10 h-10 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold"
                style={{ backgroundColor: bg }}
              >
                {String.fromCharCode(65 + i)}
              </motion.div>
            ))}
          </div>
          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2 + (headlinePart1.length + headlinePart2.length) * 0.045 + 2.2 + i * 0.08,
                  type: "spring",
                  stiffness: 400,
                }}
              >
                <Star className="w-4 h-4 fill-[hsl(var(--accent))] text-[hsl(var(--accent))]" />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2 + (headlinePart1.length + headlinePart2.length) * 0.045 + 2.5,
                type: "spring",
                stiffness: 400,
              }}
            >
              <Star className="w-4 h-4 fill-[hsl(var(--accent))]/50 text-[hsl(var(--accent))]" />
            </motion.div>
          </div>
          <span className="text-sm text-muted-foreground">Trusted by 1000+ clients</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
