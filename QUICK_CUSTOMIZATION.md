# Quick Customization Guide

## Immediate Changes After Download

### 1. Replace Photo (2 minutes)
```bash
# Add your professional photo
cp /path/to/your/photo.jpg src/assets/shashank.jpg
```

### 2. Update Personal Info (5 minutes)
Edit `src/data/portfolio.ts`:
```typescript
export const personalInfo = {
  name: "Your Full Name",
  title: "Your Professional Title",
  email: "your.email@domain.com",
  phone: "+1 (XXX) XXX-XXXX",
  location: "Your City, State/Country",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  // Update bio sections with your content
};
```

### 3. Add Your Projects (10 minutes)
Replace projects in the same file:
```typescript
export const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Brief project description with key achievements...",
    date: "Month Year",
    category: ["ai", "cloud", "research"], // Choose relevant categories
    tags: ["Python", "TensorFlow", "AWS"], // Your tech stack
    github: "https://github.com/yourusername/project",
    medium: "https://medium.com/@yourusername/article", // If you have articles
    icon: "brain", // Choose: brain, cloud, calculator, etc.
    gradient: "from-blue-400 to-purple-500" // Color scheme
  }
];
```

### 4. Update Skills (5 minutes)
Modify skills to match your expertise:
```typescript
// Add/remove skills in each category
// Change icons to match your preferences
// Update documentation links to relevant resources
```

### 5. Test Locally (2 minutes)
```bash
npm run dev
# Open http://localhost:5173
# Check all sections work correctly
```

### 6. Deploy (5 minutes)
```bash
git init
git add .
git commit -m "Initial portfolio"
gh repo create YourUsername/portfolio --public --source=. --remote=origin
git push -u origin main
# Enable GitHub Pages in repository settings
```

## Color Themes

### Change Main Colors
Edit `src/styles/globals.css`:
```css
:root {
  /* Purple-Pink (current) */
  --primary: hsl(262, 83%, 58%);
  --gradient-start: hsl(262, 83%, 58%);
  --gradient-end: hsl(310, 100%, 69%);
  
  /* Blue Theme Alternative */
  /* --primary: hsl(217, 91%, 60%);
  --gradient-start: hsl(217, 91%, 60%);
  --gradient-end: hsl(200, 100%, 70%); */
  
  /* Green Theme Alternative */
  /* --primary: hsl(142, 76%, 55%);
  --gradient-start: hsl(142, 76%, 55%);
  --gradient-end: hsl(120, 100%, 65%); */
}
```

## Content Updates

### Adding New Blog Posts
```typescript
export const blogPosts = [
  {
    title: "Your Article Title",
    description: "Brief description of the article content...",
    date: "Jan 15, 2025",
    readTime: "X min read",
    link: "https://medium.com/@yourusername/your-article",
    icon: "brain", // brain, robot, cogs
    gradient: "from-purple-400 to-pink-400"
  }
];
```

### Updating Contact Info
The contact form works automatically. Update social links in `personalInfo` object.

### Adding Certifications
```typescript
export const certifications = [
  {
    name: "Your Certification",
    provider: "Certification Provider",
    icon: "microsoft", // microsoft, python, brain
    link: "https://link-to-credential"
  }
];
```