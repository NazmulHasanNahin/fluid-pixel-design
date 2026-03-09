import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MessageSquare, Search, CodeXml, RefreshCw, Rocket } from "lucide-react";
import BlurTypeText from "@/components/BlurTypeText";

const steps = [
  { number: "1", title: "30 Minutes Consultancy", desc: "In this meeting we discuss about what you're trying to do, your business goals, and what you actually need to achieve your objectives.", icon: MessageSquare },
  { number: "2", title: "Requirement & Analysis", desc: "We assess your project requirements and gather necessary assets or account access. We analyze everything based on your specific needs.", icon: Search },
  { number: "3", title: "Implementation", desc: "We build your project with precision, implementing all features and functionalities according to the requirements we discussed.", icon: CodeXml },
  { number: "4", title: "Revision", desc: "We review the project together, make necessary adjustments, and ensure everything meets your expectations perfectly.", icon: RefreshCw },
  { number: "5", title: "Project Delivery", desc: "Your project is delivered with complete documentation and support for a smooth launch.", icon: Rocket },
];

export default function TeamSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <BlurTypeText
            text="Our Process"
            isVisible={isVisible}
            className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl md:text-5xl font-bold text-foreground"
          >
            How Does It{" "}
            <span className="font-serif-display italic font-normal">Work</span>
          </motion.h2>
          <BlurTypeText
            text="Our proven 5-step process to deliver exceptional results"
            isVisible={isVisible}
            delay={0.3}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          />
        </motion.div>

        {/* Timeline */}
        <div className="mt-20 relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Circle on timeline */}
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10">
                  <div className="w-10 h-10 rounded-full bg-accent border-4 border-background flex items-center justify-center">
                    <span className="text-sm font-bold text-accent-foreground">{step.number}</span>
                  </div>
                </div>

                {/* Card */}
                <div className={`md:w-[calc(50%-40px)] ${isLeft ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"}`}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                      <step.icon className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>

                    {/* Mobile step number */}
                    <div className="md:hidden mt-3 w-7 h-7 rounded-full bg-accent flex items-center justify-center">
                      <span className="text-xs font-bold text-accent-foreground">{step.number}</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
