import { workExperience } from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function WorkExperienceSection() {
  return (
    <section id="work-experience" className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true, amount: 0.2 }}
          >
            Work Experience
          </motion.h2>
        </div>
        <div className="relative min-h-[700px]">
          {/* Vertical timeline line */}
          <div className="absolute inset-y-0 left-1/2 w-1 bg-primary/70 dark:bg-primary/80 -translate-x-1/2 z-0 rounded" />
          <div className="space-y-16">
            {workExperience.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={exp.company + exp.role} className="relative z-10 flex flex-col md:flex-row md:items-center min-h-[220px]">
                  {/* Left side (for left-aligned cards) */}
                  <div className={`flex-1 flex ${isLeft ? "justify-end" : "justify-start"} md:pr-8 md:pl-8"`}>
                    {isLeft && (
                      <motion.div
                        className="bg-card border border-border rounded-xl shadow-lg p-6 md:max-w-xl w-full text-left"
                        initial="hidden"
                        whileInView="visible"
                        variants={cardVariants}
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        <div className="flex items-center mb-2 justify-between">
                          <span className="font-bold text-lg text-primary">{exp.role}</span>
                          <span className="text-xs text-muted-foreground font-semibold">{exp.duration}</span>
                        </div>
                        <div className="font-semibold text-base mb-1">{exp.company}</div>
                        <div className="text-xs text-muted-foreground mb-2">{exp.location}</div>
                        <ul className="list-disc ml-5 space-y-1 text-sm text-muted-foreground">
                          {exp.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-lg border-4 border-background z-10">
                      <Briefcase className="w-5 h-5" />
                    </span>
                    {idx !== workExperience.length - 1 && (
                      <span className="w-1 h-16 bg-primary/70 dark:bg-primary/80 z-0" />
                    )}
                  </div>
                  {/* Right side (for right-aligned cards) */}
                  <div className={`flex-1 flex ${!isLeft ? "justify-start" : "justify-end"} md:pr-8 md:pl-8"`}>
                    {!isLeft && (
                      <motion.div
                        className="bg-card border border-border rounded-xl shadow-lg p-6 md:max-w-xl w-full text-left"
                        initial="hidden"
                        whileInView="visible"
                        variants={cardVariants}
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        <div className="flex items-center mb-2 justify-between">
                          <span className="font-bold text-lg text-primary">{exp.role}</span>
                          <span className="text-xs text-muted-foreground font-semibold">{exp.duration}</span>
                        </div>
                        <div className="font-semibold text-base mb-1">{exp.company}</div>
                        <div className="text-xs text-muted-foreground mb-2">{exp.location}</div>
                        <ul className="list-disc ml-5 space-y-1 text-sm text-muted-foreground">
                          {exp.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 