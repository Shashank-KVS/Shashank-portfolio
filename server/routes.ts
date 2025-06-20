import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertContactMessageSchema } from "@shared/schema";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // Here you would typically send an email notification
      // For now, we'll just return success
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          error: "Validation failed", 
          details: error.errors 
        });
      } else {
        res.status(500).json({ 
          error: "Failed to send message" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
