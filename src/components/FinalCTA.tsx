import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="max-w-5xl mx-auto rounded-3xl p-12 md:p-20 relative overflow-hidden cta-gradient"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          {/* Left side */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-foreground leading-tight"
            >
              Ready to Build a High Converting{" "}
              <span className="font-serif-display italic font-normal">Shopify Store?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-4 text-muted-foreground"
            >
              Let's discuss how we can help grow your e-commerce business with a conversion-focused Shopify solution.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 p-6 rounded-2xl bg-background/60 backdrop-blur-sm border border-border/50"
            >
              <h3 className="font-semibold text-foreground text-sm">Book a Free 30-Minute Consultation</h3>
              <p className="text-xs text-muted-foreground mt-2">Get expert guidance and a custom strategy for your store.</p>
              <motion.a
                href="https://calendly.com/devzeroone"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.97 }}
                className="mt-4 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold transition-colors"
              >
                Book A Free Call <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right side — Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <h3 className="font-semibold text-foreground text-sm mb-4">Send a Message</h3>
            <div>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full text-sm font-semibold transition-colors"
            >
              Send Message <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}