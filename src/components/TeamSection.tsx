import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { number: "1", title: "30 Minutes Consultancy", desc: "In this meeting we discuss about what you're trying to do, your business goals, and what you actually need to achieve your objectives." },
  { number: "2", title: "Requirement & Analysis", desc: "We assess your project requirements and gather necessary assets or account access. We analyze everything based on your specific needs." },
  { number: "3", title: "Implementation", desc: "We build your project with precision, implementing all features and functionalities according to the requirements we discussed." },
  { number: "4", title: "Revision", desc: "We review the project together, make necessary adjustments, and ensure everything meets your expectations perfectly." },
  { number: "5", title: "Project Delivery", desc: "Your project is delivered with complete documentation and support for a smooth launch." },
];

export default function TeamSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Our Process</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            How Does It{" "}
            <span className="font-serif-display italic font-normal">Work</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Our proven 5-step process to deliver exceptional results
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50, scale: 0.85 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 * i,
                type: "spring",
                stiffness: 150,
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="bg-[hsl(var(--accent))] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[hsl(var(--accent-foreground))]">{step.number}</span>
              </div>
              <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}