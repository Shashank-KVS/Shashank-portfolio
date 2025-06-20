# Shashank Portfolio

A modern, responsive portfolio website for **Venkata Shashank Kowtharapu** - AI & Machine Learning Engineer, built with React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Design**: Clean, professional design with purple-pink gradient theme
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Automatic system theme detection with manual toggle
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Elements**: Hover effects, smooth scrolling, and engaging interactions
- **SEO Optimized**: Meta tags and Open Graph tags for better search visibility
- **Performance**: Optimized build with code splitting and lazy loading

## 🏗️ Project Structure

```
shashank-portfolio/
├── public/
│   ├── index.html
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── BlogSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeProvider.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   └── NotFoundPage.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── assets/
│   │   └── .gitkeep
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── .github/workflows/
│   └── deploy.yml
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Git installed
- GitHub account

### Installation & Setup

1. **Download and extract the portfolio**
   ```bash
   unzip shashank-portfolio.zip
   cd shashank-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📂 First Things to Do After Download

1. **Extract and setup the project**
   ```bash
   unzip shashank-portfolio.zip
   cd shashank-portfolio
   npm install
   ```

2. **Replace placeholder image**
   - Add your professional photo as `src/assets/shashank.jpg`
   - Update image paths in `HeroSection.tsx` and `AboutSection.tsx`

3. **Update personal information**
   - Edit `src/data/portfolio.ts` with your actual data
   - Update social links, projects, and contact information

4. **Initialize Git repository**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   ```

5. **Create GitHub repository and push**
   ```bash
   gh repo create Shashank-KVS/portfolio --public --source=. --remote=origin
   git push -u origin main
   ```

6. **Deploy to GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Select "GitHub Actions" as the source
   - The site will automatically deploy on push to main branch

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)
1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Select "GitHub Actions" as source
4. The workflow will automatically deploy your site

### Option 2: Vercel
1. Import your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on each push

### Option 3: Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on each push

## 📝 Customization

### Colors & Theme
Edit the CSS variables in `src/styles/globals.css`:
```css
:root {
  --primary: hsl(262, 83%, 58%);
  --gradient-start: hsl(262, 83%, 58%);
  --gradient-end: hsl(310, 100%, 69%);
}
```

### Content
All portfolio content is in `src/data/portfolio.ts`:
- Personal information
- Skills and certifications
- Projects and publications
- Blog posts

### Components
Each section is a separate component in `src/components/`:
- Modify layouts, styling, and functionality as needed
- All components use Framer Motion for animations

## 🛠️ Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Routing
- **React Hook Form** - Form handling
- **Zod** - Form validation
- **Lucide React** - Icons

## 📱 Sections Included

1. **Hero** - Landing section with photo and introduction
2. **About** - Professional background and statistics
3. **Skills** - Technical skills with interactive icons
4. **Projects** - Portfolio projects with filtering
5. **Blog** - Recent articles and publications
6. **Contact** - Contact form and social links
7. **Footer** - Social links and Easter egg

## 🔧 Commands Reference

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Deployment
npm run deploy       # Deploy to GitHub Pages (after setup)
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Support

If you need help with setup or customization:
1. Check the GitHub repository issues
2. Create a new issue with your question
3. Contact: kvshashank10081998@gmail.com

---

**Made with ❤️ by Venkata Shashank Kowtharapu**