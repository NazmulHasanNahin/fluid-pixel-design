import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What do I need to provide to get started?", a: "Just share your store access with your store link and collaborator code. We will send a request, and you only need to accept it." },
  { q: "Do you provide support after delivery completion?", a: "Yes! We provide 30 days of ongoing support after delivery because we believe in building a long-term relationship with our clients." },
  { q: "Can I manage the store myself after delivery?", a: "Absolutely! We even provide a dedicated recorded video tutorial showing exactly how you can manage your store, so there's no need to worry." },
  { q: "Why should I choose DEVZeroOne instead of others?", a: "We are not an ordinary service provider. We want to be your growth partner. DEVZeroOne treats your business as if it were our own, focusing on real results and long-term growth." },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" ref={ref} className="py-24 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-center text-foreground"
        >
          Got questions? We've got{" "}
          <span className="font-serif-display italic font-normal">answers</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
              >
                <AccordionItem value={`item-${i}`} className="border border-border rounded-xl px-6 bg-card">
                  <AccordionTrigger className="text-left text-foreground hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
