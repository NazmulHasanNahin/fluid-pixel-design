import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What services does DEVZeroOne offer?", a: "We provide end-to-end Shopify solutions including store design, store redesign, custom development, dropshipping setup, store optimization, and growth strategy for DTC brands." },
  { q: "How long does a typical Shopify store take to build?", a: "Depending on the package, our Basic plan delivers in 7 days, Standard in 10 days, and Premium in 14 days." },
  { q: "Do you work with new brands that don't have products yet?", a: "Absolutely! We offer winning product research and complete dropshipping setup to help you start from scratch." },
  { q: "What's your revision policy?", a: "All our plans include unlimited revisions to ensure you're completely satisfied with the final result." },
  { q: "Can I upgrade my plan later?", a: "Yes, you can upgrade at any time. We'll seamlessly transition your project to the new plan with no disruption." },
  { q: "Do you provide ongoing support after delivery?", a: "Yes, we provide post-launch support to ensure everything runs smoothly and help you with any questions or updates needed." },
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