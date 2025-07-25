import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, FileText, ChartLine, Cloud, Brain, Sprout, Calculator, BookOpen } from "lucide-react";
import { projects, personalInfo } from "@/lib/data";

const iconMap = {
  "chart-line": ChartLine,
  "cloud": Cloud,
  "brain": Brain,
  "seedling": Sprout,
  "calculator": Calculator,
  "book-open": BookOpen,
};

const filterCategories = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI/ML" },
  { key: "cloud", label: "Cloud" },
  { key: "research", label: "Research" },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter(project =>
    activeFilter === "all" || project.category.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Projects & Publications
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Innovative solutions and research contributions
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filterCategories.map((category) => (
            <Button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              variant={activeFilter === category.key ? "default" : "outline"}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === category.key 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const IconComponent = iconMap[project.icon as keyof typeof iconMap] || Brain;
              return (
                <motion.div
                  key={project.id}
                  className="bg-card rounded-xl shadow-lg overflow-hidden card-hover border border-black/10 dark:border-border/80"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  aria-label={`Project: ${project.title}`}
                >
                  {/* Project Image/Icon */}
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <IconComponent className="text-white text-4xl" aria-label={`${project.title} icon`} />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{project.date}</span>
                      </div>
                      
                      {/* Project Links */}
                      <div className="flex flex-wrap gap-2">
                        {project.github && (
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-2 text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-3 h-3" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.medium && (
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-2 text-xs hover:bg-green-600 hover:text-white transition-colors"
                          >
                            <a href={project.medium} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3 h-3" />
                              Article
                            </a>
                          </Button>
                        )}
                        {project.ieee && (
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-2 text-xs hover:bg-blue-600 hover:text-white transition-colors"
                          >
                            <a href={project.ieee} target="_blank" rel="noopener noreferrer">
                              <FileText className="w-3 h-3" />
                              IEEE
                            </a>
                          </Button>
                        )}
                        {project.irjet && (
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-2 text-xs hover:bg-orange-600 hover:text-white transition-colors"
                          >
                            <a href={project.irjet} target="_blank" rel="noopener noreferrer">
                              <FileText className="w-3 h-3" />
                              IRJET
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
        
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
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              View All Projects <Github className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
