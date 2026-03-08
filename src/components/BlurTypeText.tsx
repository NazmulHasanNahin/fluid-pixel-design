import { motion } from "framer-motion";

interface BlurTypeTextProps {
  text: string;
  isVisible: boolean;
  delay?: number;
  className?: string;
  as?: "p" | "span" | "h2" | "h3";
}

export default function BlurTypeText({ text, isVisible, delay = 0, className = "", as: Tag = "p" }: BlurTypeTextProps) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
          animate={isVisible ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{
            delay: delay + i * 0.04,
            duration: 0.45,
            ease: "easeOut",
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
