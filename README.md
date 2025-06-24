# Shashank Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design
- Dark/light theme support
- Smooth animations with Framer Motion
- Contact form
- Project showcase
- Skills section
- Blog section

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To build the application for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/               # Source code
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   └── main.tsx       # Application entry point
│   ├── public/            # Static assets
│   └── index.html         # HTML template
├── attached_assets/        # Additional assets
├── shared/                # Shared utilities and schemas
└── dist/                  # Build output (generated)
```

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Accessible components
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## Customization

The portfolio is highly customizable. You can modify:

- Personal information in the components
- Styling in the Tailwind classes
- Content in the data files
- Theme colors in the CSS variables

## License

MIT 