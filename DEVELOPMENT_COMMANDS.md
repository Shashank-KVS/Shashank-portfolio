# Development Commands Reference

## Essential Commands

### Project Setup
```bash
# Extract and setup
unzip shashank-portfolio.zip
cd shashank-portfolio
npm install
```

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Git Operations
```bash
# Initialize repository
git init
git add .
git commit -m "Initial commit"

# Create GitHub repository
gh repo create Shashank-KVS/portfolio --public --source=. --remote=origin
git push -u origin main

# Regular updates
git add .
git commit -m "Update projects section"
git push
```

### Deployment
```bash
# GitHub Pages (automatic via GitHub Actions)
git push origin main

# Manual deployment to gh-pages
npm run deploy
```

### Troubleshooting
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Clear build cache
rm -rf dist
npm run build
```

## File Locations for Quick Updates

### Personal Data
- `src/data/portfolio.ts` - All personal information, skills, projects

### Images
- `src/assets/shashank.jpg` - Your professional photo

### Styling
- `src/styles/globals.css` - Colors, themes, custom styles

### Components
- `src/components/` - All React components for modification