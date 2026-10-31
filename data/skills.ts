export interface AboutContent {
  heading: string;
  label: string;
  bioParagraphs: string[];
}

export const ABOUT_DATA: AboutContent = {
  heading: "ABOUT & EXPERTISE",
  label: "DESIGN PHILOSOPHY & CAPABILITIES",
  bioParagraphs: [
    "I am an independent web designer and frontend developer focused on crafting clean, high-performance digital experiences. My work bridges visual art direction with solid technical execution.",
    "Specializing in modern responsive websites, tactile UI/UX interfaces, and bidirectional Arabic/English platforms, I help businesses and creators establish a credible, memorable presence without generic templates or unnecessary bloat."
  ]
};

export const SKILLS: string[] = [
  "Web Design",
  "UI/UX Design",
  "Responsive Development",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "SEO",
  "Graphic Design",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "AI-Assisted Development",
  "Arabic & English Website Design"
];

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "web-design-dev",
    name: "Website Design & Development",
    description: "Custom digital platforms engineered for speed, responsiveness, and seamless user interaction."
  },
  {
    id: "responsive-business",
    name: "Responsive Business Sites",
    description: "Multi-device architectures crafted to establish credibility and convert traffic into qualified leads."
  },
  {
    id: "bilingual-sites",
    name: "Arabic / English Bilingual Sites",
    description: "Flawless bidirectional RTL/LTR interfaces designed specifically for regional and global audiences."
  },
  {
    id: "ui-ux-design",
    name: "UI/UX & Interactive Design",
    description: "Editorial layouts, systematic design systems, and wireframes built around user psychology."
  },
  {
    id: "branding-graphic",
    name: "Graphic Design & Branding",
    description: "Distinct visual identities, bold monograms, typography systems, and promotional assets."
  },
  {
    id: "seo-builds",
    name: "SEO-Friendly Builds",
    description: "Clean semantic markup, optimized Core Web Vitals, metadata hierarchies, and fast render times."
  }
];

export default SKILLS;
