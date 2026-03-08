import { useState } from "react";
import { motion } from "framer-motion";
import { Diamond, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
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
          <a
            href="/"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Back to Home <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.nav>

      {/* Contact Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Get in touch</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Let's start your{" "}
              <span className="font-serif-display italic font-normal">project together</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Have a project in mind? We'd love to hear about it. Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="lg:col-span-3 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">First Name</label>
                  <Input
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="rounded-xl h-12 bg-muted/50 border-border"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Last Name</label>
                  <Input
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="rounded-xl h-12 bg-muted/50 border-border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-xl h-12 bg-muted/50 border-border"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-xl h-12 bg-muted/50 border-border"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="flex h-12 w-full rounded-xl border border-border bg-muted/50 px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select a subject</option>
                  <option value="branding">Brand Strategy</option>
                  <option value="web">Web Development</option>
                  <option value="design">UI/UX Design</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="flex w-full rounded-xl border border-border bg-muted/50 px-3 py-3 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Send Message <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="rounded-2xl bg-muted/40 border border-border p-6 space-y-6">
                <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">hello@awake.studio</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--purple-light))] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--pink-light))] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Office</p>
                    <p className="text-sm text-muted-foreground">123 Design Street, NY 10001</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-border h-48">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=300&fit=crop"
                  alt="Office"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
