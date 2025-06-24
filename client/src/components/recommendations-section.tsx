import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { recommendations, personalInfo } from "@/lib/data";
import { Linkedin, Star } from "lucide-react";

export default function RecommendationsSection() {
  return (
    <section id="recommendations" className="py-20 bg-muted/50" aria-label="Recommendations Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Recommendations
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            What my colleagues and managers say about me
          </motion.p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {recommendations.map((rec, index) => (
            <motion.div
              key={rec.name}
              className="bg-card rounded-xl shadow-lg p-8 flex flex-col text-left card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <Avatar className="w-16 h-16 mr-4 border-2 border-primary/20">
                  <AvatarImage src={rec.avatar} alt={`Avatar of ${rec.name}`} loading="lazy" width="64" height="64" />
                  <AvatarFallback>{rec.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <a href={rec.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    <h3 className="text-lg font-bold">{rec.name}</h3>
                  </a>
                  <p className="text-sm text-muted-foreground">{rec.title}</p>
                </div>
              </div>
              <blockquote className="text-muted-foreground text-sm italic border-l-2 border-primary/50 pl-4">
                {rec.recommendation.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-4 last:mb-0">{paragraph}</p>
                ))}
              </blockquote>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold"
            size="lg"
          >
            <a href="https://www.linkedin.com/in/shashank-kowtharapu/details/recommendations/?detailScreenTabIndex=0" target="_blank" rel="noopener noreferrer">
              View All on LinkedIn <Linkedin className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 