export interface Project {
  id: string;
  numberLabel: string; // "Project 1:", "Project 2:", "Project 3:"
  title: string;
  url?: string;
  description: string;
  clientRequirement: string;
}

export interface SkillItem {
  name: string;
  iconName: string;            // fallback icon from the skill icon registry
  iconImage?: string;          // custom PNG icon (public path); takes priority over iconName
  iconImageFill?: boolean;     // image already includes its own tile, so it fills the chip
}

export interface SkillGroup {
  categoryTitle: string; // "Design & Digital :" or "Technology & Leadership:"
  skills: SkillItem[];
}

export interface ResponsibilityItem {
  id: string;
  title: string;
  description: string;
  images: string[];
}

export interface PortfolioData {
  greeting: string; // "Hi all, I’m Srichandar"
  name: string;
  role: string; // "UX/UI Designer | Digital Marketing | Technical Program Coordinator"
  introduction: string;
  profileImage: string;
  skillsHeading: string; // "Skills and technologies"
  skillGroups: SkillGroup[];
  projectsHeading: string; // "Projects"
  projectsSubheading: string; // "KEY UX/UI PROJECTS"
  projects: Project[];
  responsibilityHeading: string; // "professional responsibility and impact"
  responsibilities: ResponsibilityItem[];
  contactInfo: {
    email: string;
    location: string;
    availability: string;
  };
  socialLinks: {
    platform: string;
    url: string;
  }[];
}
