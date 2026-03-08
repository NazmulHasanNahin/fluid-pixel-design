import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const team = [
  { name: "Sophia Lang", role: "Lead Designer", bg: "bg-[hsl(var(--accent))]", initials: "SL" },
  { name: "Alex Moff", role: "Art Director", bg: "bg-[hsl(var(--pink-light))]", initials: "AM" },
  { name: "Emma Kelley", role: "Brand Strategist", bg: "bg-[hsl(var(--green-light))]", initials: "EK" },
  { name: "Chris Gomez", role: "Web Developer", bg: "bg-[hsl(var(--blue-light))]", initials: "CG" },
];

export default function TeamSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-center text-foreground"
        >
          Meet the <span className="font-serif-display italic font-normal">creative minds</span>
          <br />behind our success
        </motion.h2>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
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
              <div className={`${member.bg} w-full aspect-[3/4] rounded-3xl flex items-center justify-center overflow-hidden relative`}>
                <motion.span
                  className="text-6xl md:text-7xl font-bold text-foreground/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {member.initials}
                </motion.span>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">{member.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
