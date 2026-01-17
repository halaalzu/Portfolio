# Quick Setup Guide

## First Time Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```

3. **View Your Site:**
   - Open the URL shown in terminal (usually http://localhost:3000)
   - The site should automatically open in your browser

## Updating Your Content

### Projects (`src/data/projects.js`)
```javascript
export const projects = {
  featured: [
    {
      id: 1,
      title: "Your Project Name",
      description: "Project description here",
      tech: ["Technology 1", "Technology 2"]
    }
  ],
  // ... add more
}
```

### Experience (`src/data/experience.js`)
```javascript
export const workExperience = [
  {
    id: 1,
    title: "Your Position",
    company: "Company Name",
    location: "Location",
    date: "2023 - Present",
    description: "What you do",
    achievements: ["Achievement 1", "Achievement 2"]
  }
]
```

### Passions (`src/data/passions.js`)
```javascript
export const passions = [
  "Reading",
  "Biomedical Design",
  // Add more passions here - they automatically cycle!
]
```

### Contact Info (`src/data/contact.js`)
```javascript
export const contactInfo = {
  email: "your-email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  resumeUrl: "/resume.pdf"  // Put resume.pdf in public/ folder
}
```

## Adding Images

1. Put images in the `public/assets/` folder
2. Reference them in your data files:
   ```javascript
   image: "/assets/your-image.jpg"
   ```

## Publishing

### Option 1: Vercel (Easiest)
1. Push code to GitHub
2. Go to vercel.com
3. Import your repository
4. Click Deploy (it auto-detects Vite!)

### Option 2: Netlify
1. Run `npm run build`
2. Drag the `dist` folder to netlify.com/drop

### Option 3: GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run `npm run deploy`

## Custom Domain

1. Deploy to Vercel/Netlify first
2. Add your domain in their dashboard
3. Update DNS settings as instructed

## Tips

- All content is in `src/data/` - edit those files, not the components!
- Images go in `public/assets/`
- Colors can be changed in `src/index.css` (CSS variables at top)
- The site is fully responsive - test on mobile!
