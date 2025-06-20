import { motion } from "framer-motion";
import { User, Brain } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            className="text-xl text-gray-600 dark:text-gray-400"
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
                <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <User className="w-32 h-32 text-gray-400" />
                  {/* Replace with: <img src="/assets/shashank-professional.jpg" alt="Shashank Professional Photo" className="w-full h-full rounded-2xl object-cover" /> */}
                </div>
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-full"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Brain className="w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              Building the Future with AI
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
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
                  className="text-center p-4 bg-white dark:bg-dark-card rounded-lg shadow-lg card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
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
