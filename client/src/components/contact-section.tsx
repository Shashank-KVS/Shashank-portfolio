import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Linkedin, Github, Download, FileText } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { personalInfo } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-muted/50" aria-label="Contact Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Ready to collaborate on innovative AI solutions
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-card p-8 rounded-xl shadow-lg border border-black/10 dark:border-border/80"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form
              action="https://formspree.io/f/mwpbrazy"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="input"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="input"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="input"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div
              className="bg-card p-8 rounded-xl shadow-lg border border-black/10 dark:border-border/80"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="text-primary text-xl mr-4" aria-label="Email icon" />
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </motion.div>
                
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="text-primary text-xl mr-4" aria-label="Phone icon" />
                  <a 
                    href={`tel:${personalInfo.phone}`} 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </motion.div>
                
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="text-primary text-xl mr-4" aria-label="Location icon" />
                  <span className="text-foreground">
                    {personalInfo.location}
                  </span>
                </motion.div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Social Links</h4>
                <div className="flex space-x-4">
                  {[
                    { href: personalInfo.linkedin, icon: Linkedin, color: "bg-primary" },
                    { href: personalInfo.github, icon: Github, color: "bg-gray-800" },
                    { href: personalInfo.medium, icon: FileText, color: "bg-green-600" },
                    { href: personalInfo.researchgate, icon: FileText, color: "bg-blue-600" },
                  ].map((social, index) => (
                    <motion.a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${social.color} hover:opacity-80 text-white rounded-full flex items-center justify-center transition-all duration-300`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Resume Download */}
            <motion.div
              className="bg-card p-6 rounded-lg shadow-md border border-black/10 dark:border-border/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Download Resume</h3>
              <p className="text-muted-foreground mb-4">
                Get a copy of my full resume.
              </p>
              <Button asChild className="w-full">
                <a href="/assets/ShashankKV-Resume.pdf" download="ShashankKV-Resume.pdf">
                  <Download className="mr-2 w-4 h-4" />
                  Download PDF
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 bg-primary text-white rounded-full p-3 shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Back to Top"
        style={{ display: window.scrollY > 200 ? 'block' : 'none' }}
      >
        ↑
      </button>
    </section>
  );
}
