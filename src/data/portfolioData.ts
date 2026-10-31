import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  greeting: "Hi all, I’m Srichandar",
  name: "Srichandar",
  role: "UX/UI Designer | Digital Marketing | Technical Program Coordinator",
  introduction: "I’m a creative and technology-driven professional passionate about designing meaningful digital experiences. I have a background in Electrical and Electronics Engineering. Professionally, I have developed skills in UX/UI design, graphic design, digital marketing, and digital content creation. I enjoy creating user-focused designs, engaging digital content, and practical solutions. I also have experience in team leadership, client communication, business networking, and program coordination. My technical background includes IoT, Robotics, Arduino, and Embedded Systems. I’m a self-motivated professional who enjoys learning, collaborating, solving problems, and turning ideas into impactful solutions.",
  
  profileImage: "/images/image_portolio.png",

  contactInfo: {
    email: "srichandar.dev@gmail.com",
    location: "Tamil Nadu, India",
    availability: "Open to High-Impact Design, Marketing & Program Roles",
  },

  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/srichandar"
    },
    {
      platform: "GitHub",
      url: "https://github.com/srichandar"
    }
  ],

  skillsHeading: "Skills and technologies",
  skillGroups: [
    {
      categoryTitle: "Design & Digital :",
      skills: [
        { name: "UX/UI Design", iconName: "app-window", iconImage: "/icons/skills/ux-ui-design.png" },
        { name: "User Research", iconName: "user-focus", iconImage: "/icons/skills/user-research.png" },
        { name: "Wireframing", iconName: "layout", iconImage: "/icons/skills/wireframing.png" },
        { name: "Prototyping", iconName: "cursor-click", iconImage: "/icons/skills/prototyping.png" },
        { name: "Responsive Design", iconName: "devices", iconImage: "/icons/skills/responsive-design.png" },
        { name: "Figma", iconName: "figma", iconImage: "/icons/skills/figma.png", iconImageFill: true },
        { name: "Adobe XD", iconName: "adobe-xd" },
        { name: "Illustrator", iconName: "adobe-illustrator" },
        { name: "Graphic Design & Branding", iconName: "pen-nib", iconImage: "/icons/skills/graphic-design-branding.png" },
        { name: "Digital Marketing", iconName: "megaphone", iconImage: "/icons/skills/digital-marketing.png" },
        { name: "Google Ads", iconName: "google-ads" },
        { name: "Meta Ads", iconName: "meta" },
        { name: "SEO", iconName: "magnifying-glass", iconImage: "/icons/skills/seo.png" },
        { name: "GA4", iconName: "google-analytics" },
        { name: "Google Tag Manager", iconName: "google-tag-manager" }
      ]
    },
    {
      categoryTitle: "Technology & Leadership:",
      skills: [
        { name: "IoT & Embedded Systems", iconName: "circuitry", iconImage: "/icons/skills/iot-embedded-systems.png" },
        { name: "Arduino & Robotics", iconName: "arduino" },
        { name: "Technical Training", iconName: "chalkboard-teacher", iconImage: "/icons/skills/technical-training.png" },
        { name: "Project & Program Coordination", iconName: "kanban", iconImage: "/icons/skills/project-program-coordination.png" },
        { name: "Team Leadership", iconName: "users-three", iconImage: "/icons/skills/team-leadership.png" },
        { name: "Client & Stakeholder Communication", iconName: "chats-circle" },
        { name: "Business & Requirement Management", iconName: "briefcase" },
        { name: "Presentation & Collaboration", iconName: "presentation-chart" }
      ]
    }
  ],

  projectsHeading: "Projects",
  projectsSubheading: "KEY UX/UI PROJECTS",
  projects: [
    {
      id: "the-age",
      numberLabel: "Project 1:",
      title: "The AGE (theAGE.in)",
      url: "https://theage.in",
      description: "The AGE (theAGE.in) is a responsive website that brings events, gifting, and advertising services together on a single platform with a clear and engaging user experience.",
      clientRequirement: "The client wanted an attractive, positive, and vibrant visual experience that seamlessly combines all three services. The design and color direction were developed to meet the client’s vision and requirements."
    },
    {
      id: "cima-sri",
      numberLabel: "Project 2:",
      title: "CIMA SRI (cimasri.vercel.app)",
      url: "https://cimasri.vercel.app",
      description: "CIMA SRI (cimasri.vercel.app) is a responsive industrial product website featuring multi-brand compressor spares, loom spares, and air piping systems, with optimized navigation and a structured product catalog for customers across India.",
      clientRequirement: "The client wanted a customer-friendly website to showcase 10,000+ products with serial numbers, making product browsing and identification simple. The final design met the client’s expectations and requirements."
    },
    {
      id: "vending-machine-app",
      numberLabel: "Project 3:",
      title: "UX/UI Design — Vending Machine App",
      description: "Designed an IoT-based app for a protein shake vending machine, allowing users to select flavours and make digital payments.",
      clientRequirement: "The client wanted a motivational and engaging app with multiple protein shake flavours, positive animations, and encouraging slides to promote healthy choices. The final design successfully met the client’s expectations."
    }
  ],

  responsibilityHeading: "professional responsibility and impact",
  responsibilities: [
    {
      id: "design-leadership",
      title: "Design Leadership & Team Management:",
      description: "Led a 5-member design team, managing task allocation, design planning, output reviews, client requirement coordination, and workflow execution to ensure high-quality and timely delivery of design projects.",
      images: [
        "/images/image3.jpeg"
      ]
    },
    {
      id: "corporate-representation",
      title: "Corporate Representation & Business Networking:",
      description: "Represented ProtoWiz Private Limited at weekly CNI business meetings, engaging with business owners and stakeholders, introducing the company and its services, understanding business requirements, gathering client needs, discussing potential design solutions, coordinating requirements with the design team, and delivering regular company introductions and business presentations to strengthen professional relationships and business opportunities.",
      images: [
        "/images/image4.jpeg",
        "/images/image5.jpeg",
        "/images/image6.jpeg",
        "/images/image7.jpeg"
      ]
    },
    {
      id: "event-brand-representation",
      title: "Event & Brand Representation:",
      description: "Represented ProtoWiz Private Limited at Tamil Startup Thiruvizha in Madurai (2024) and Coimbatore (2025), and Dindigul Science & Innovation Expo (2026), leading promotional teams, coordinating stall activities, engaging with visitors, explaining company products and services, and strengthening the company’s brand presence at major startup and technology events.",
      images: [
        "/images/image8.jpeg",
        "/images/image9.jpeg",
        "/images/image10.jpeg",
        "/images/image11.jpeg"
      ]
    },
    {
      id: "skill-based-innovative-development",
      title: "Skill-Based Innovative Development Program:",
      description: "Supported the organization and execution of two 3-day Skill-Based Innovative Development Programs (SIDP) for EDII Tamil Nadu, coordinating program logistics, participant communication, scheduling, trainer coordination, and on-ground execution while supporting technology, electronics, and entrepreneurship-focused training initiatives for graduates and unemployed youth.",
      images: []
    },
    {
      id: "atl-innovation-training",
      title: "ATL Innovation Training Program:",
      description: "Technical Trainer for the ATL Innovation Training Program under EDII Tamil Nadu, delivering 30hours of hands-on training in Embedded Systems, IoT, and Robotics across assigned schools in Coimbatore, Erode, and Tiruppur, while also supporting school coordination, trainer scheduling, lab readiness, and program execution across the 30-school initiative.",
      images: [
        "/images/image12.jpeg",
        "/images/image13.jpeg",
        "/images/image14.jpeg"
      ]
    },
    {
      id: "atl-educator-training",
      title: "ATL Educator Training Program:",
      description: "Conducted district-wise(Coimbatore,Erode,Tiruppur) training sessions for ATL school teachers, focusing on technology integration, effective ATL lab utilization, and innovation-based learning. Supported educators in developing the knowledge and confidence required to independently facilitate technology and innovation activities for students",
      images: [
        "/images/image15.jpeg",
        "/images/image16.jpeg",
        "/images/image17.jpeg"
      ]
    },
    {
      id: "atl-lab-survey",
      title: "ATL Lab Survey & Trainer Coordination:",
      description: "Supported the EDII Tamil Nadu ATL Lab Survey Program across Coimbatore, Erode, Tiruppur, and additional districts including Dindigul, Karur, Namakkal, Madurai, and Tiruvannamalai, taking responsibility for trainer and school allocation, scheduling survey assignments, and coordinating field activities, while also serving as a Technical Trainer and personally conducting ATL lab surveys at three schools.",
      images: [
        "/images/image18.jpeg",
        "/images/image19.jpeg"
      ]
    },
    {
      id: "school-coordination",
      title: "School Coordination & Program Management:",
      description: "Managed and coordinated with the Headmasters and school authorities across 30 schools in Coimbatore, Erode, and Tiruppur to confirm program participation, plan training schedules, coordinate requirements, and ensure smooth execution of the ATL Innovation Training Program.",
      images: [
        "/images/image20.jpeg"
      ]
    },
    {
      id: "rural-innovation",
      title: "Rural Innovation Program:",
      description: "Conducted a 30-hour technical training program at Jain Tuition Centre focused on nurturing innovation and technology awareness among students from rural communities. The program was designed to encourage students to explore technology through practical, hands-on learning and develop an innovative mindset",
      images: [
        "/images/image21.jpeg",
        "/images/image22.jpeg",
        "/images/image23.jpeg"
      ]
    },
    {
      id: "event-hosting",
      title: "Event Hosting & School Engagement",
      description: "Served as the Master of Ceremonies for POGO Tamil Thiruvizha 2026, engaging with 60 schools and 21,000+ students over a month through interactive activities, games, cultural experiences, and stage hosting while contributing to a fun and engaging event experience.",
      images: [
        "/images/image24.jpeg",
        "/images/image25.jpeg",
        "/images/image26.jpeg"
      ]
    }
  ]
};
