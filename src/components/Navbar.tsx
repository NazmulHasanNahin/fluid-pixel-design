import { useState, useEffect } from "react";
import { Code, ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";

const links = ["Home", "Services", "Portfolio", "Pricing", "About", "FAQ"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => setScrolled(v > 50));
    return () => unsubscribe();
  }, [scrollY]);

  const getLinkId = (label: string) => {
    if (label === "About") return "about";
    return label.toLowerCase().replace(/\s/g, "");
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full max-w-6xl rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border border-border shadow-lg"
            : "bg-background/80 backdrop-blur-lg border border-border"
        }`}
      >
        <div className="flex items-center justify-between px-4 md:px-6 py-3">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-2 text-foreground font-bold text-lg"
          whileHover={{ scale: 1.03 }}
        >
          <Code className="w-5 h-5" />
          DEVZeroOne
        </motion.a>

        {/* Center nav links */}
        <div className="hidden md:flex items-center gap-1 bg-muted/60 rounded-full px-1.5 py-1 relative">
          {links.map((l, i) => {
            const linkId = getLinkId(l);
            const isActive = activeSection === linkId;
            return (
              <motion.button
                key={l}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                onClick={() => scrollTo(linkId)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors z-10 ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-background/80 dark:bg-background/60 backdrop-blur-md shadow-[0_0_12px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.5)] dark:shadow-[0_0_12px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.1)] border border-border/50"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{l}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <motion.button
            onClick={() => scrollTo("contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold overflow-hidden"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="relative z-10 flex items-center gap-2">
              Book A Free Call
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </span>
          </motion.button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border/50 rounded-b-2xl"
          >
            <div className="flex flex-col p-4 gap-2">
              {links.map((l, i) => {
                const linkId = getLinkId(l);
                const isActive = activeSection === linkId;
                return (
                  <motion.button
                    key={l}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollTo(linkId)}
                    className={`text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? "text-foreground bg-muted/80 backdrop-blur-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {l}
                  </motion.button>
                );
              })}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => scrollTo("contact")}
                className="mt-2 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold"
              >
                Book A Free Call <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.nav>
    </div>
  );
}
