import { Code } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const quickLinks = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const services = [
  { name: "Shopify Store Design", href: "#services" },
  { name: "Shopify Store Redesign", href: "#services" },
  { name: "Dropshipping Setup", href: "#services" },
];

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <footer ref={ref} className="border-t border-border py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12"
      >
        <div className="md:col-span-1">
          <a href="#" className="flex items-center gap-2 text-foreground font-bold text-xl">
            <Code className="w-5 h-5" />
            DEVZeroOne
          </a>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            We build high converting Shopify stores that help brands grow from zero to one.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.name}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Our Services</h4>
          <ul className="space-y-2">
            {services.map((l) => (
              <li key={l.name}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>contact@devzeroone.com</li>
            <li>Worldwide Remote</li>
            <li>
              <a href="https://calendly.com/devzeroone" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:underline">Book A Free Call</a>
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-6xl mx-auto mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground"
      >
        <span>© {new Date().getFullYear()} DEVZeroOne. All rights reserved.</span>
      </motion.div>
    </footer>
  );
}
