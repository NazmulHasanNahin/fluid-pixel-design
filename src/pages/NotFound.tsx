import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Diamond, ArrowRight, Home } from "lucide-react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

const NotFound = () => {
  const location = useLocation();
  const { displayedText, showCursor, isComplete } = useTypingAnimation("Oops! Page not found", 50, 800);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2 text-foreground font-bold text-xl">
            <Diamond className="w-5 h-5" />
            Awake
          </a>
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold transition-opacity"
          >
            Go Home <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.nav>

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-[10rem] md:text-[14rem] font-bold leading-none text-foreground tracking-tighter"
          >
            404
          </motion.h1>

          <p className="text-xl md:text-2xl font-semibold text-foreground mt-2 min-h-[1.5em]">
            {displayedText}
            <motion.span
              animate={{ opacity: showCursor ? 1 : 0 }}
              className="inline-block w-[2px] h-[0.8em] bg-foreground ml-0.5 align-middle"
              style={{ display: isComplete ? "none" : "inline-block" }}
            />
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.8 }}
            className="text-muted-foreground mt-3 max-w-sm mx-auto"
          >
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.2 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-semibold transition-opacity"
            >
              <Home className="w-4 h-4" /> Back to Homepage
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-muted transition-colors"
            >
              Contact Support <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
