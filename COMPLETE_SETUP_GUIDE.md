# Complete Portfolio Setup & Development Guide

## 📋 Pre-Installation Requirements

### System Requirements
- **Node.js**: Version 18 or higher
- **Git**: Latest version
- **Code Editor**: VS Code (recommended)
- **Terminal**: Command line access

### Install Required Software

#### 1. Install Node.js
```bash
# Check if Node.js is installed
node --version
npm --version

# If not installed, download from: https://nodejs.org/
# Choose LTS version (Long Term Support)
```

#### 2. Install Git
```bash
# Check if Git is installed
git --version

# If not installed:
# Windows: Download from https://git-scm.com/
# Mac: Install Xcode Command Line Tools
# Linux: sudo apt-get install git
```

#### 3. Install GitHub CLI (Optional but recommended)
```bash
# Install GitHub CLI for easy repository creation
# Windows: Download from https://cli.github.com/
# Mac: brew install gh
# Linux: Follow instructions at https://cli.github.com/
```

## 🚀 Initial Setup Process

### Step 1: Extract and Navigate
```bash
# Extract the downloaded zip file
unzip shashank-portfolio.zip
cd shashank-portfolio

# Verify folder contents
ls -la
```

### Step 2: Install Dependencies
```bash
# Install all project dependencies
npm install

# This will install:
# - React 18 + TypeScript
# - Vite (build tool)
# - Tailwind CSS
# - Framer Motion
# - All UI components and utilities
```

### Step 3: Environment Setup
```bash
# Verify installation
npm list --depth=0

# Check available scripts
npm run
```

## 🧪 Testing Local Development

### Start Development Server
```bash
npm run dev
```
- Opens at: http://localhost:5173
- Hot reload enabled (changes appear instantly)
- Press Ctrl+C to stop server

### Verify All Sections Work
1. Navigation (smooth scrolling)
2. Theme toggle (dark/light mode)
3. All sections load properly
4. Links open correctly
5. Contact form validation works

## 📁 Project Structure Deep Dive

```
shashank-portfolio/
├── public/
│   ├── index.html          # Main HTML file with SEO tags
│   └── favicon.svg         # Website icon
├── src/
│   ├── components/         # React components
│   │   ├── Navigation.tsx  # Top navigation bar
│   │   ├── HeroSection.tsx # Landing section
│   │   ├── AboutSection.tsx# About me section
│   │   ├── SkillsSection.tsx# Skills with icons
│   │   ├── ProjectsSection.tsx# Projects portfolio
│   │   ├── BlogSection.tsx # Blog posts
│   │   ├── ContactSection.tsx# Contact form
│   │   ├── Footer.tsx      # Footer with links
│   │   └── ThemeProvider.tsx# Dark/light mode
│   ├── pages/
│   │   ├── HomePage.tsx    # Main page layout
│   │   └── NotFoundPage.tsx# 404 error page
│   ├── data/
│   │   └── portfolio.ts    # ALL YOUR DATA HERE
│   ├── assets/
│   │   └── .gitkeep        # Place images here
│   ├── styles/
│   │   └── globals.css     # Global styles & themes
│   ├── App.tsx            # Main app component
│   └── main.tsx           # App entry point
├── .github/workflows/
│   └── deploy.yml         # Auto-deployment setup
├── package.json           # Dependencies & scripts
├── vite.config.ts         # Build configuration
├── tailwind.config.js     # Styling configuration
├── tsconfig.json          # TypeScript settings
└── README.md              # Documentation
```

## 🎨 Customization Guide

### 1. Personal Information
Edit `src/data/portfolio.ts`:
```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  phone: "+1 (XXX) XXX-XXXX",
  location: "Your City, Country",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  // ... update all fields with your actual data
};
```

### 2. Add Your Professional Photo
```bash
# Place your photo in src/assets/
cp /path/to/your/photo.jpg src/assets/shashank.jpg

# Update image references in components:
# - src/components/HeroSection.tsx (line ~47)
# - src/components/AboutSection.tsx (line ~44)
```

### 3. Customize Colors & Theme
Edit `src/styles/globals.css`:
```css
:root {
  --primary: hsl(262, 83%, 58%);        /* Main purple color */
  --gradient-start: hsl(262, 83%, 58%); /* Gradient start */
  --gradient-end: hsl(310, 100%, 69%);  /* Gradient end */
}
```

### 4. Update Skills
Edit skills array in `src/data/portfolio.ts`:
```typescript
export const skills = [
  {
    category: "Your Category",
    icon: "icon-name", // brain, cloud, code, chart, tools
    skills: [
      { name: "Skill Name", icon: "🔥", link: "https://documentation-url" }
    ]
  }
];
```

### 5. Add/Update Projects
```typescript
export const projects = [
  {
    id: 1,
    title: "Project Title",
    description: "Project description...",
    date: "Month Year",
    category: ["ai", "cloud", "research"],
    tags: ["Technology", "Framework"],
    github: "https://github.com/...",
    medium: "https://medium.com/...",
    icon: "brain", // or other icons
    gradient: "from-blue-400 to-purple-500"
  }
];
```

## 🛠️ Development Workflow

### Making Changes
1. Edit files in `src/` directory
2. Save changes (auto-reload in browser)
3. Test all functionality
4. Commit changes to git

### Adding New Features
```bash
# Install additional packages
npm install package-name

# Example: Add a new animation library
npm install react-spring
```

### Code Quality
```bash
# Run TypeScript checks
npm run lint

# Build for production (test)
npm run build

# Preview production build
npm run preview
```

## 📤 Deployment Setup

### Option 1: GitHub Pages (Recommended)

#### Initial Repository Setup
```bash
# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial portfolio website"

# Create GitHub repository (using GitHub CLI)
gh repo create Shashank-KVS/portfolio --public --source=. --remote=origin

# Push to GitHub
git push -u origin main
```

#### Enable GitHub Pages
1. Go to your repository on GitHub.com
2. Click "Settings" tab
3. Scroll to "Pages" section
4. Under "Source", select "GitHub Actions"
5. The workflow will automatically deploy your site

**Your site will be live at**: `https://Shashank-KVS.github.io/portfolio`

### Option 2: Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Follow prompts to link to GitHub and deploy
```

### Option 3: Netlify
1. Push code to GitHub
2. Go to netlify.com
3. "New site from Git"
4. Connect GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 🔄 Future Updates & Maintenance

### Adding New Blog Posts
Edit `blogPosts` array in `src/data/portfolio.ts`:
```typescript
export const blogPosts = [
  {
    title: "New Article Title",
    description: "Brief description...",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    link: "https://medium.com/your-article",
    icon: "brain",
    gradient: "from-blue-400 to-purple-400"
  }
];
```

### Adding New Projects
1. Update projects array in `portfolio.ts`
2. Add project links (GitHub, Medium, IEEE, etc.)
3. Choose appropriate icon and gradient
4. Test locally with `npm run dev`
5. Commit and push changes

### Updating Skills
1. Add new skills to appropriate category
2. Include proper documentation links
3. Use relevant emoji icons
4. Test responsiveness on mobile

### Version Control Best Practices
```bash
# Create feature branch
git checkout -b feature/new-project

# Make changes and commit
git add .
git commit -m "Add new AI project showcase"

# Push branch
git push origin feature/new-project

# Merge to main (via GitHub PR or directly)
git checkout main
git merge feature/new-project
git push origin main
```

## 🐛 Troubleshooting

### Common Issues

#### Node Modules Issues
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Build Errors
```bash
# Check TypeScript errors
npm run lint

# Clean build
rm -rf dist
npm run build
```

#### Deployment Issues
```bash
# Check GitHub Actions status
# Go to repository > Actions tab
# Review failed workflows

# Local preview of production build
npm run build
npm run preview
```

### Development Tips
1. Always test locally before deploying
2. Use browser developer tools for debugging
3. Check console for JavaScript errors
4. Validate HTML and CSS
5. Test on multiple devices/browsers

## 📊 Performance Optimization

### Image Optimization
- Use WebP format for images
- Compress images before adding
- Use appropriate image sizes

### Code Optimization
- Components are already optimized with React.memo
- Lazy loading implemented for better performance
- Code splitting configured in Vite

### SEO Optimization
- Meta tags already configured
- Open Graph tags included
- Structured data ready for search engines

## 🔐 Security Considerations

### Environment Variables
```bash
# Create .env.local for sensitive data
echo "VITE_ANALYTICS_ID=your-id" > .env.local

# Add to .gitignore
echo ".env.local" >> .gitignore
```

### Safe Practices
- Never commit sensitive data
- Use environment variables for API keys
- Keep dependencies updated
- Review third-party packages

## 📞 Support & Resources

### Documentation Links
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)

### Getting Help
1. Check GitHub repository issues
2. Review error messages carefully
3. Use browser developer tools
4. Consult documentation for specific technologies

Your portfolio is now fully configured and ready for professional use. All features are production-ready and the codebase is structured for easy maintenance and future enhancements.