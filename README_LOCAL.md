# Hala Alzureiqi Portfolio Website

A beautiful, animated portfolio website built with React, featuring a purple/clipart aesthetic with notebook backgrounds.

## 🚀 Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## ✏️ Easy Editing Guide

All content is stored in easy-to-edit data files in the `src/data/` folder:

### Adding/Editing Projects
Edit `src/data/projects.js`:
- Add projects to `inProgress` array (currently in progress)
- Add projects to `completed` array (finished projects)
- Add projects to `featured` array (shown on homepage)

### Adding/Editing Work Experience
Edit `src/data/experience.js`:
- Add entries to `workExperience` array
- Add entries to `volunteerExperience` array
- Update `education` array
- Modify `technicalSkills` and `certifications`

### Adding/Editing Charities
Edit `src/data/charities.js`:
- Add charity objects with name, description, image path, and optional link

### Adding Passions (Typing Animation)
Edit `src/data/passions.js`:
- Simply add more strings to the array - they'll automatically cycle in the typing animation

### Updating Contact Information
Edit `src/data/contact.js`:
- Update email, GitHub, LinkedIn URLs
- Update resume PDF path

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── NavBar.jsx      # Navigation with Arabic home button
│   ├── IconButton.jsx  # Interactive icon buttons
│   ├── TypingAnimation.jsx  # Animated typing text
│   └── ContactModal.jsx  # Contact popup modal
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── About.jsx       # About Me page
│   ├── Projects.jsx    # Projects page
│   ├── Resume.jsx      # Resume page
│   └── Charity.jsx     # Charity support page
├── data/               # Easy-to-edit data files
│   ├── projects.js
│   ├── experience.js
│   ├── charities.js
│   ├── passions.js
│   └── contact.js
└── App.jsx             # Main app with routing
```

## 🎨 Features

- **Animated Name**: Name writes out on load (like tul8te.com)
- **Typing Animation**: Passions cycle through with typing effect
- **Icon Interactions**: Icons shake and scale on hover/click
- **Rolling Soccer Ball**: Animated soccer ball on charity page
- **Responsive Design**: Works on mobile, optimized for laptops
- **Purple/Clipart Aesthetic**: Notebook backgrounds, purple accents
- **Easy to Edit**: All content in simple data files

## 🔧 Customization

### Colors
Edit CSS variables in `src/index.css`:
- `--purple-primary`: Main purple color
- `--purple-dark`: Dark purple accents
- `--purple-light`: Light purple highlights
- `--cream`: Background cream color
- `--notebook-blue`: Notebook grid background

### Fonts
Currently using Google Fonts:
- **Kalam**: Handwritten style for headings
- Change fonts in `index.html` and update `font-family` in CSS

## 📱 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Netlify
1. Build: `npm run build`
2. Publish directory: `dist`
3. Deploy!

### Custom Domain
Update `vite.config.js` with your domain settings before building.

## 📝 Notes

- All images should be placed in `public/` folder
- Resume PDF should be in `public/` folder and referenced in `contact.js`
- The site uses client-side routing (no page reloads)
- All animations use Framer Motion for smooth performance

## 🐛 Troubleshooting

**Icons not shaking?** Check that Framer Motion is installed correctly.

**Animations not working?** Ensure you're on the latest version of React and Framer Motion.

**Style issues?** Clear browser cache and rebuild: `npm run build`

## 📧 Support

For issues or questions, check the data files first - most edits can be made there without touching code!
