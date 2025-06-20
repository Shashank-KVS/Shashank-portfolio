import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Brain, Cloud, Code, Award, BarChart3, Wrench } from "lucide-react";
import { skills, certifications } from "../data/portfolio";

const iconMap = {
  brain: Brain,
  cloud: Cloud,
  code: Code,
  chart: BarChart3,
  tools: Wrench,
  microsoft: Award,
  python: Code,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
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
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Expertise across the AI/ML technology stack
          </motion.p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skills.map((skillCategory, categoryIndex) => {
            const IconComponent = iconMap[skillCategory.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={skillCategory.category}
                className="bg-gradient-to-br from-card to-muted/30 p-6 rounded-xl card-hover border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    {IconComponent && <IconComponent className="text-primary text-2xl" />}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{skillCategory.category}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <motion.a
                      key={skill.name}
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center p-3 bg-background/50 hover:bg-primary/5 rounded-lg transition-all duration-300 border border-transparent hover:border-primary/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-xl mr-2 group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </motion.a>
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
                className="bg-card p-6 rounded-xl shadow-lg card-hover text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-primary-foreground text-2xl" />
                </div>
                <h4 className="font-bold mb-2">{cert.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {cert.provider}
                </p>
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Credential <ExternalLink className="ml-1 w-3 h-3" />
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}