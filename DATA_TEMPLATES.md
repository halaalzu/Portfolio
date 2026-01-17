# Data Structure Template Examples

Copy and fill these templates into your data files.

---

## Work Experience Template

```javascript
{
  id: 1,
  title: "Your Job Title",
  company: "Company Name",
  location: "City, State",
  date: "Month Year - Month Year",
  description: "1-2 sentence summary of what you did",
  skills: ["Skill 1", "Skill 2", "Skill 3"],
  achievements: [
    "Specific achievement or responsibility",
    "Another achievement with metrics if possible",
    "Third achievement"
  ]
}
```

**Add 3 of these to `workExperience` array**

---

## Extracurricular Experience Template

```javascript
{
  id: 1,
  title: "Your Role/Position Title",
  organization: "Organization or Club Name",
  location: "City, State",
  date: "Month Year - Month Year",
  description: "1-2 sentence summary of your role",
  skills: ["Skill 1", "Skill 2"],
  achievements: [
    "Leadership achievement",
    "Event or project you led",
    "Impact you made"
  ]
}
```

**Add 4 of these to `extracurricularExperience` array**

---

## Volunteer Experience Template

```javascript
{
  id: 1,
  title: "Your Volunteer Role",
  organization: "Organization Name",
  location: "City, State",
  date: "Month Year - Month Year",
  description: "1-2 sentence summary of volunteer work",
  skills: ["Skill 1", "Skill 2"],
  achievements: [
    "Contribution to the organization",
    "Impact you made",
    "Hours or people helped"
  ]
}
```

**Add 3 of these to `volunteerExperience` array**

---

## Project Template (Completed)

```javascript
{
  id: 1,
  title: "Electrical Sub Team Project",  // Or your project name
  description: "2-3 sentence description of what the project does",
  tech: ["React", "Node.js", "MongoDB", "AWS"],
  type: "Full-Stack Web Application",  // or: Hardware Design, Game Development, etc.
  status: "completed",
  keyAchievements: [
    "Major feature or accomplishment",
    "Technical challenge overcome",
    "Result or impact"
  ],
  details: [
    "Technical detail about implementation",
    "Another technical detail",
    "Performance metric or optimization"
  ],
  github: "https://github.com/yourusername/repo-name",  // or null
  liveDemo: "https://project-demo.com",  // or null
  image: "/assets/project-name.png"  // or null
}
```

**Add 5 of these to `projects.completed` array** (make 1 with status: "in-progress")

---

## Featured Project Template

```javascript
{
  id: 1,
  title: "Electrical Sub Team Project",
  description: "Short 1-2 line description for home page",
  tech: ["React", "Node.js"],
  type: "Full-Stack Web",
  linkTo: "/projects"
}
```

**Add exactly 3 of these to `projects.featured` array** (in same order as featured projects):
1. Electrical Sub Team Project
2. BookTok Analytics Platform
3. Catan Game Development

---

## Charity Template

```javascript
{
  id: 1,
  name: "Charity Organization Name",
  description: "2-3 sentences about the charity, why you support it, their mission",
  image: "/assets/charity-1.png",
  link: "https://charity-website.org"
}
```

**Add exactly 3 of these to `charities` array**

---

## Education Template

```javascript
{
  id: 1,
  degree: "Bachelor of Science in Biomedical Engineering",
  institution: "University Name",
  location: "City, State",
  date: "2020 - 2024",
  details: "GPA: 3.8/4.0 | Relevant coursework: Medical Device Design, Biomechanics, etc."
}
```

**Add 1 or more of these to `education` array**

---

## Technical Skills Template

```javascript
{
  category: "Programming",
  skills: ["Python", "JavaScript", "React", "Node.js", "MongoDB"]
}
```

Examples for categories:
```javascript
{ category: "Programming", skills: [...] }
{ category: "Design Tools", skills: ["Figma", "CAD", "SolidWorks"] }
{ category: "Biomedical", skills: ["Medical Device Design", "Research", "Analysis"] }
{ category: "Cloud & DevOps", skills: ["AWS", "Docker", "Git"] }
```

**Add 3-4 of these to `technicalSkills` array**

---

## Passions Template (for typing animation)

```javascript
export const passions = [
  "Reading",
  "Biomedical Design",
  "Supporting Underprivileged Communities",
  "Healthcare Innovation",
  "Medical Research",
  "Your Passion Here",
  "Another Passion"
];
```

**Can add as many as you want** - they'll cycle through on the home page

---

## Contact Info Template

```javascript
export const contactInfo = {
  email: "your.email@gmail.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  resumeUrl: "/resume.pdf"  // Path to your resume PDF in public folder
};
```

---

## Copy-Paste Ready Examples

### Work Experience Example
```javascript
{
  id: 1,
  title: "Software Engineer Intern",
  company: "Tech Company XYZ",
  location: "San Francisco, CA",
  date: "June 2023 - August 2023",
  description: "Developed full-stack features for healthcare platform using React and Node.js, collaborated with cross-functional teams to deliver patient management system",
  skills: ["React", "Node.js", "MongoDB", "REST APIs"],
  achievements: [
    "Built real-time patient notification system reducing response time by 40%",
    "Implemented automated testing suite increasing code coverage from 45% to 85%",
    "Mentored 2 junior developers on best practices and code standards"
  ]
}
```

### Project Example
```javascript
{
  id: 1,
  title: "BookTok Analytics Platform",
  description: "Social reading analytics dashboard that aggregates book trends from TikTok, providing insights for publishers and authors on reading preferences",
  tech: ["React", "Node.js", "MongoDB", "Chart.js", "AWS"],
  type: "Full-Stack Web Application",
  status: "completed",
  keyAchievements: [
    "Developed real-time data pipeline processing 10k+ posts daily",
    "Created interactive analytics dashboard with 15+ visualization types",
    "Reduced data processing time by 60% through optimized queries"
  ],
  details: [
    "Implemented JWT authentication and role-based access control",
    "Built responsive design supporting mobile, tablet, and desktop",
    "Set up CI/CD pipeline with GitHub Actions for automated testing"
  ],
  github: "https://github.com/halaalzureiqi/booktok-analytics",
  liveDemo: "https://booktok-analytics.com",
  image: "/assets/booktok.png"
}
```

### Charity Example
```javascript
{
  id: 1,
  name: "Direct Relief International",
  description: "Direct Relief is a humanitarian organization providing medical assistance to people in crisis. Their work spans disaster relief, refugee support, and chronic disease management. I support their mission because healthcare access should be a universal right, not a privilege.",
  image: "/assets/charity-1.png",
  link: "https://www.directrelief.org"
}
```

---

Done! Use these templates to fill in your data files.
