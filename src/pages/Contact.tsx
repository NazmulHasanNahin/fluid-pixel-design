import { useState } from "react";
import { motion } from "framer-motion";
import { Code, ArrowRight, Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

function ContactNavbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2 text-foreground font-bold text-xl">
          <Code className="w-5 h-5" />
          DEVZeroOne
        </a>
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold transition-opacity"
        >
          Back to Home <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.nav>
  );
}

function ContactInfo() {
  const infoItems = [
    { icon: Mail, label: "Email", value: "contact@devzeroone.com", bg: "bg-accent/20" },
    { icon: MapPin, label: "Location", value: "Worldwide Remote", bg: "bg-[hsl(var(--pink-light))]" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="lg:col-span-2 space-y-8"
    >
      <div className="rounded-2xl bg-muted/40 border border-border p-6 space-y-6">
        <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
        {infoItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center shrink-0`}>
              <item.icon className="w-4 h-4 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{item.label}</p>
              <p className="text-sm text-muted-foreground">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="rounded-2xl overflow-hidden border border-border h-48"
      >
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=300&fit=crop"
          alt="Remote workspace"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const headlineText = "Shopify store";
  const { displayedText, showCursor, isComplete } = useTypingAnimation(headlineText, 60, 600);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <ContactNavbar />

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4"
            >
              Get in touch
            </motion.p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Let's build your{" "}
              <span className="font-serif-display italic font-normal">
                {displayedText}
                <motion.span
                  animate={{ opacity: showCursor ? 1 : 0 }}
                  className="inline-block w-[3px] h-[0.7em] bg-foreground ml-0.5 align-middle"
                  style={{ display: isComplete ? "none" : "inline-block" }}
                />
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-4 text-muted-foreground max-w-xl mx-auto"
            >
              Ready to build a high-converting Shopify store? Fill out the form below and we'll get back to you within 24 hours.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="lg:col-span-3 space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="text-sm font-medium text-foreground mb-1.5 block">Your Name</label>
                <Input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-xl h-12 bg-muted/50 border-border"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="text-sm font-medium text-foreground mb-1.5 block">Your Email</label>
                <Input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-xl h-12 bg-muted/50 border-border"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="flex w-full rounded-xl border border-border bg-muted/50 px-3 py-3 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  type="submit"
                  asChild
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full h-12 rounded-full bg-primary text-primary-foreground font-semibold text-sm"
                  >
                    Send Message <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                </Button>
              </motion.div>
            </motion.form>

            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  );
}