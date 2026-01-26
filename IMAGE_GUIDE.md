# Adding Project Images Guide

## How to Add Images to Your Projects

Your portfolio now supports swipeable image carousels for each project! Here's how to add images:

### 1. Add Your Images to the Public Assets Folder

Place your project screenshots/images in:
```
/public/assets/
```

For example:
- `/public/assets/booktok-1.png`
- `/public/assets/booktok-2.png`
- `/public/assets/catan-demo.jpg`

### 2. Update the Project Data

Open `src/data/projects.js` and add image paths to the `images` array for each project:

```javascript
{
  id: 1,
  title: "BookTok",
  // ... other fields ...
  images: [
    '/assets/booktok-1.png',
    '/assets/booktok-2.png',
    '/assets/booktok-3.png'
  ]
}
```

### 3. Features of the Image Carousel

✅ **Swipeable**: Drag images left/right to navigate
✅ **Navigation Arrows**: Click left/right arrows to change images
✅ **Navigation Dots**: Click dots at the bottom to jump to specific images
✅ **Auto-hide Controls**: If only 1 image, arrows and dots are hidden
✅ **Smooth Animations**: Uses Framer Motion for fluid transitions
✅ **Responsive**: Works on mobile and desktop

### 4. Image Tips

- **Format**: Use `.png`, `.jpg`, or `.webp`
- **Size**: Recommended width: 800-1200px for good quality
- **Aspect Ratio**: Images will automatically crop to fit (16:9 works well)
- **File Names**: Use descriptive names like `project-name-screenshot-1.png`

### 5. Example Project Entry

```javascript
{
  id: 1,
  title: "BookTok",
  description: "...",
  tech: ["Node.js", "React"],
  type: "Full-Stack Web Application",
  status: "completed",
  date: "Jan. 2026",
  keyAchievements: [...],
  details: [...],
  github: "https://github.com/...",
  liveDemo: null,
  images: [
    '/assets/booktok-homepage.png',
    '/assets/booktok-video-feed.png',
    '/assets/booktok-mobile.png'
  ]
}
```

### 6. Testing

After adding images:
1. Run `npm run dev`
2. Navigate to the Projects page
3. You should see your images in a carousel
4. Try swiping, clicking arrows, and navigation dots

---

**Note**: If you leave the `images` array empty `[]`, no carousel will be shown for that project.
