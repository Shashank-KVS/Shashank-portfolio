import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Brain, Cloud, Code, Award } from "lucide-react";
import { skills, certifications } from "@/lib/data";

const iconMap = {
  brain: Brain,
  cloud: Cloud,
  code: Code,
  microsoft: Award,
  python: Code,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills & Certifications
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Expertise across the AI/ML technology stack
          </motion.p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skillCategory, categoryIndex) => {
            const IconComponent = iconMap[skillCategory.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={skillCategory.category}
                className="bg-gray-50 dark:bg-dark-card p-6 rounded-xl card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <IconComponent className="text-primary text-2xl mr-3" />
                  <h3 className="text-xl font-bold">{skillCategory.category}</h3>
                </div>
                <div className="space-y-4">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.name}
                        </span>
                        <span className="text-sm text-primary">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div 
                          className="skill-progress bg-primary h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="text-center mb-8">
          <motion.h3 
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Certifications
          </motion.h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = iconMap[cert.icon as keyof typeof iconMap] || Award;
            return (
              <motion.div
                key={cert.name}
                className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg card-hover text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-white text-2xl" />
                </div>
                <h4 className="font-bold mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {cert.provider}
                </p>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary/80"
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Credential <ExternalLink className="ml-1 w-3 h-3" />
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
