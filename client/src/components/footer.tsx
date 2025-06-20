import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, FileText, Brain, Zap } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const [easterEggClicks, setEasterEggClicks] = useState(0);

  const handleEasterEgg = () => {
    setEasterEggClicks(prev => {
      const newCount = prev + 1;
      if (newCount >= 5) {
        setTimeout(() => setEasterEggClicks(0), 3000);
        return newCount;
      }
      return newCount;
    });
  };

  return (
    <footer className="bg-dark-bg dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div 
            className="text-3xl font-bold gradient-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Venkata Shashank Kowtharapu
          </motion.div>
          
          <motion.p 
            className="text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Innovating the future with AI & Machine Learning
          </motion.p>

          <motion.div 
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { href: personalInfo.linkedin, icon: Linkedin },
              { href: personalInfo.github, icon: Github },
              { href: personalInfo.medium, icon: FileText },
              { href: `mailto:${personalInfo.email}`, icon: Mail },
            ].map((social, index) => (
              <motion.a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Easter Egg Animation */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block cursor-pointer"
              onClick={handleEasterEgg}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {easterEggClicks >= 5 ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <Zap className="text-primary text-2xl animate-bounce" />
                </motion.div>
              ) : (
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Brain className="text-primary text-2xl" />
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          <motion.div 
            className="border-t border-gray-800 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500">
              © 2025 Venkata Shashank Kowtharapu. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
