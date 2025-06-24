import { motion } from "framer-motion";
import { User, Brain, Award } from "lucide-react";
import { personalInfo } from "@/lib/data";

const iconMap = {
  microsoft: Award, // Placeholder
  brain: Brain,
  python: Award, // Placeholder
  udemy: Award,
  ibm: Award, // Placeholder for IBM
};

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50" aria-label="About Me Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Passionate about advancing AI technology
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div 
                className="w-full max-w-md mx-auto aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary p-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img src="/assets/Shashank-1.png" alt="Professional photo of Shashank Kowtharapu" className="w-full h-full rounded-2xl object-cover" loading="lazy" width="400" height="400" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Building the Future with AI
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {personalInfo.extendedBio}
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: personalInfo.stats.experience, label: "Years Experience" },
                { value: personalInfo.stats.certifications, label: "Certifications" },
                { value: personalInfo.stats.projects, label: "Major Projects" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-card rounded-lg shadow-lg card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
