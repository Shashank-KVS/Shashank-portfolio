import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Bot, Cog, Brain } from "lucide-react";
import { blogPosts, personalInfo } from "@/lib/data";

const iconMap = {
  robot: Bot,
  cogs: Cog,
  brain: Brain,
};

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Blog & Media
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Sharing insights on AI and technology
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => {
            const IconComponent = iconMap[post.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={post.title}
                className="bg-muted/50 rounded-xl overflow-hidden shadow-lg card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Blog Post Image */}
                <div className={`h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                  <IconComponent className="text-white text-4xl" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {post.description}
                  </p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <span className="text-sm text-primary">{post.readTime}</span>
                  </div>
                  
                  <Button
                    asChild
                    variant="ghost"
                    className="text-primary hover:text-primary/80 p-0 h-auto font-medium"
                  >
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      Read More <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            );
          })}
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
            <a href={personalInfo.medium} target="_blank" rel="noopener noreferrer">
              View All Articles <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
