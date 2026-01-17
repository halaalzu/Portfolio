# Quick Reference - What to Fill In

## 1. Work Experience (3 items)
Each needs: title, company, location, date, description, skills[], achievements[]

```
Position 1: [Your Job Title] at [Company]
Position 2: [Your Job Title] at [Company]
Position 3: [Your Job Title] at [Company]
```

---

## 2. Extracurricular (4 items)
Each needs: title, organization, location, date, description, skills[], achievements[]

```
Role 1: [Your Leadership Role]
Role 2: [Your Leadership Role]
Role 3: [Your Leadership Role]
Role 4: [Your Leadership Role]
```

---

## 3. Volunteer Experience (3 items)
Each needs: title, organization, location, date, description, skills[], achievements[]

```
Volunteer 1: [Your Volunteer Work]
Volunteer 2: [Your Volunteer Work]
Volunteer 3: [Your Volunteer Work]
```

---

## 4. Projects (5 total - 3 featured)
Completed: 5 projects
- **Featured 1**: Electrical Sub Team Project
- **Featured 2**: BookTok Analytics Platform
- **Featured 3**: Catan Game Development
- Project 4: [Your Project]
- Project 5: [Your Project - in-progress]

Each needs: title, description, tech[], type, keyAchievements[], details[], github URL, liveDemo URL, image

---

## 5. Charities (3 items)
Each needs: name, description, image path, link

```
Charity 1: [Charity Name] - /assets/charity-1.png
Charity 2: [Charity Name] - /assets/charity-2.png
Charity 3: [Charity Name] - /assets/charity-3.png
```

---

## 6. Education (1+ items)
Each needs: degree, institution, location, date, details

```
Degree: [Your Degree]
Institution: [School Name]
Location: [City, State]
Date: [Year - Year]
Details: [Honors, GPA, etc.]
```

---

## 7. Passions (for typing animation)
List items that cycle through on home page:
- Reading
- Biomedical Design
- Supporting Underprivileged Communities
- Healthcare Innovation
- Medical Research
- [Add more...]

---

## File Locations

| File | Location | Purpose |
|------|----------|---------|
| Work/Extracurricular/Volunteer | `src/data/experience.js` | Resume page |
| Projects | `src/data/projects.js` | Projects page + Home featured |
| Charities | `src/data/charities.js` | Donate page |
| Passions | `src/data/passions.js` | Home page typing animation |
| Contact Info | `src/data/contact.js` | Email, GitHub, LinkedIn, Resume link |

---

## Image Assets to Create

### Charity Images (required)
```
/public/assets/
  ├── charity-1.png
  ├── charity-2.png
  └── charity-3.png
```

### Flower Decorations (optional)
```
/public/assets/
  ├── flower-1.png
  ├── flower-2.png
  └── flower-3.png
```

### Project Images (optional)
```
/public/assets/
  ├── electrical-sub-team.png
  ├── booktok.png
  ├── catan.png
  ├── project-4.png
  └── project-5.png
```

---

## Summary of Changes

✅ **Data Structure**:
- Work: 3 ✓
- Extracurricular: 4 ✓
- Volunteer: 3 ✓
- Projects: 5 ✓
- Featured Projects: 3 ✓
- Charities: 3 ✓

✅ **Navigation**:
- Arabic "هلا" only ✓
- Route: `/donate` (not `/charity`) ✓
- Label: "Donate!" ✓

✅ **Animations**:
- Reduced bounce (scale 0.8 → 0.95) ✓
- Smoother transitions ✓

✅ **Features**:
- Skills tags on experience ✓
- GitHub/Demo link support ✓
- Image support ready ✓
- Flower PNG space ready ✓
- Certifications removed ✓

---

## Ready to Fill In?

All the structure is set up. Just update the placeholder text with your actual content from your resume documents!
