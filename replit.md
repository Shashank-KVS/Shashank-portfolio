# Portfolio Website - Venkata Shashank Kowtharapu

## Overview

This is a professional portfolio website for Venkata Shashank Kowtharapu, an AI & Machine Learning Engineer. The application is built as a modern full-stack web application showcasing skills, projects, blog posts, and providing a contact form functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for development and build processes
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: React Query (TanStack Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: TSX for TypeScript execution in development

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling and theme toggle
- **Hero Section**: Main landing area with profile information
- **About Section**: Professional background and statistics
- **Skills Section**: Technical skills with progress indicators and certifications
- **Projects Section**: Portfolio projects with filtering capabilities
- **Blog Section**: Recent blog posts and media appearances
- **Contact Section**: Contact form with validation and submission handling
- **Theme Provider**: Dark/light theme toggle functionality

### Backend Components
- **Express Server**: RESTful API server with middleware for logging and error handling
- **Contact API**: Endpoint for handling contact form submissions
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Vite Integration**: Development server integration for hot module replacement

### Database Schema
- **Contact Messages Table**: Stores contact form submissions with fields for name, email, subject, message, and timestamp
- **Schema Validation**: Zod schemas for runtime type checking and validation

## Data Flow

1. **Client Interaction**: User interacts with the React frontend
2. **Form Submission**: Contact form data is validated client-side using React Hook Form and Zod
3. **API Request**: Validated data is sent to `/api/contact` endpoint
4. **Server Processing**: Express server validates data again and stores it via the storage interface
5. **Response**: Success or error response is sent back to the client
6. **UI Updates**: Client updates UI based on response using toast notifications

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives for accessible components
- **Animations**: Framer Motion for complex animations
- **Date Handling**: date-fns for date manipulation
- **Utilities**: clsx and class-variance-authority for conditional styling

### Backend Dependencies
- **Database**: @neondatabase/serverless for Neon database connection
- **ORM**: drizzle-orm and drizzle-kit for database operations and migrations
- **Validation**: zod for schema validation
- **Session**: connect-pg-simple for PostgreSQL session management

### Development Dependencies
- **Build Tools**: Vite with React plugin and TypeScript support
- **Code Quality**: ESBuild for production builds
- **Development**: TSX for TypeScript execution, Replit-specific plugins

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` starts the development server with hot reload
- **Database**: Uses Neon serverless PostgreSQL with connection via DATABASE_URL
- **Port Configuration**: Runs on port 5000 with external port 80 mapping

### Production Build
- **Frontend Build**: Vite builds React app to `dist/public`
- **Backend Build**: ESBuild bundles server code to `dist/index.js`
- **Start Command**: `npm run start` runs the production server
- **Database Migrations**: `npm run db:push` applies schema changes

### Deployment Configuration
- **Platform**: Configured for Replit deployment with autoscale target
- **Build Process**: Two-stage build (frontend + backend)
- **Environment**: Requires DATABASE_URL environment variable
- **Static Assets**: Frontend assets served from `dist/public`

## Changelog

Changelog:
- June 20, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.