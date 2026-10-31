# Srichandar Portfolio — UX/UI Designer | Digital Marketing | Technical Program Coordinator

A modern, high-performance personal portfolio website built with **Next.js 15, React 19, TypeScript, and Pure CSS** (zero Tailwind CSS dependency).

All content and media have been synchronized from `Srichandar Portfolio Contents.docx` with exact verbatim text preservation, original section headings, and full photo galleries.

---

## 🌟 Sections & Content Structure

- **Hero & Intro (`#about`)**:
  - Greeting: `Hi all, I’m Srichandar`
  - Role: `UX/UI Designer | Digital Marketing | Technical Program Coordinator`
  - Introduction: Verbatim background in Electrical and Electronics Engineering, UX/UI design, graphic design, digital marketing, team leadership, client communication, IoT, Robotics, Arduino, and Embedded Systems.
  - Profile Image Showcase: Interactive switcher between `image1.jpeg` and `image2.jpeg` with full-screen zoom lightbox.
- **Skills and technologies (`#skills`)**:
  - **Design & Digital :** UX/UI Design, User Research, Wireframing, Prototyping, Responsive Design, Figma, Adobe XD, Illustrator, Graphic Design & Branding, Digital Marketing, Google Ads, Meta Ads, SEO, GA4, Google Tag Manager.
  - **Technology & Leadership:** IoT & Embedded Systems, Arduino & Robotics, Technical Training, Project & Program Coordination, Team Leadership, Client & Stakeholder Communication, Business & Requirement Management, Presentation & Collaboration.
- **Projects (`#projects`)**:
  - Subheading: `KEY UX/UI PROJECTS`
  - **Project 1:** `The AGE (theAGE.in)` with exact description, dedicated `Client Requirement` block, and live website link.
  - **Project 2:** `CIMA SRI (cimasri.vercel.app)` with exact description, dedicated `Client Requirement` block, and live website link.
  - **Project 3:** `UX/UI Design — Vending Machine App` with exact description and dedicated `Client Requirement` block.
- **Professional Responsibility and Impact (`#responsibilities`)**:
  - All 10 on-ground leadership and training programs with exact descriptions and interactive photo galleries:
    1. *Design Leadership & Team Management:* (image3.jpeg)
    2. *Corporate Representation & Business Networking:* (image4.jpeg, image5.jpeg, image6.jpeg, image7.jpeg)
    3. *Event & Brand Representation:* (image8.jpeg, image9.jpeg, image10.jpeg, image11.jpeg)
    4. *Skill-Based Innovative Development Program:*
    5. *ATL Innovation Training Program:* (image12.jpeg, image13.jpeg, image14.jpeg)
    6. *ATL Educator Training Program:* (image15.jpeg, image16.jpeg, image17.jpeg)
    7. *ATL Lab Survey & Trainer Coordination:* (image18.jpeg, image19.jpeg)
    8. *School Coordination & Program Management:* (image20.jpeg)
    9. *Rural Innovation Program:* (image21.jpeg, image22.jpeg, image23.jpeg)
    10. *Event Hosting & School Engagement* (image24.jpeg, image25.jpeg, image26.jpeg)
- **Contact & Inquiries (`#contact`)**:
  - Direct email with one-click copy and feedback, location, availability, LinkedIn/GitHub links, and an interactive contact message form.

---

## 🛠️ Project Structure

```
├── public/
│   ├── images/              # All 26 extracted images from docx
│   ├── favicon.svg          # Portfolio favicon
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── globals.css      # Pure CSS design system & custom variables
│   │   ├── layout.tsx       # Root layout & SEO OpenGraph metadata
│   │   ├── not-found.tsx    # Styled 404 page
│   │   └── page.tsx         # Single-page layout with active scroll-spy
│   ├── components/
│   │   ├── Navbar.tsx / .module.css           # Responsive glassmorphic navbar
│   │   ├── Hero.tsx / .module.css             # Hero & profile image showcase
│   │   ├── Skills.tsx / .module.css           # Design & Tech skill repertoire
│   │   ├── Projects.tsx / .module.css         # Key UX/UI projects
│   │   ├── Responsibilities.tsx / .module.css # Responsibility & Impact galleries
│   │   ├── ImageLightbox.tsx / .module.css    # Full-screen image lightbox
│   │   ├── Contact.tsx / .module.css          # Contact channels & interactive form
│   │   ├── Footer.tsx / .module.css           # Site footer & external links
│   │   ├── BackToTop.tsx / .module.css        # Smooth scroll back to top button
│   │   └── Icons.tsx                          # Custom SVG icons
│   ├── data/
│   │   └── portfolioData.ts # ⭐ Central data file
│   └── types/
│       └── portfolio.ts     # Strict TypeScript interfaces
├── package.json
└── tsconfig.json
```

---

## 💻 Running the Project

```bash
# Development server
npm run dev

# Production build and preview
npm run build
npm start
```
