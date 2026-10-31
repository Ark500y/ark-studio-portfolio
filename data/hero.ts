export interface HeroStat {
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroData {
  brand: string;
  role: string;
  base: string;
  statusText: string;
  greeting: string;
  firstName: string;
  lastName: string;
  fullName: string;
  subtitle: string;
  bio: string;
  availability: string;
  statement: string;
  stats: HeroStat[];
  navLinks: NavLink[];
}

export const HERO_DATA: HeroData = {
  brand: "ARK STUDIO",
  role: "WEB DESIGNER & DIGITAL CREATOR",
  base: "Sargodha, Pakistan. Serving clients worldwide, including Saudi Arabia, the UAE and Pakistan.",
  statusText: "AVAILABLE FOR FREELANCE",
  greeting: "Hello, I'm",
  firstName: "ABDULREHMAN",
  lastName: "KHALID",
  fullName: "ABDULREHMAN KHALID",
  subtitle: "WEB DESIGNER & DIGITAL CREATOR",
  bio: "I design and build modern digital experiences that combine creative direction, thoughtful user experiences and responsive development.",
  availability: "AVAILABLE FOR PROJECTS WORLDWIDE",
  statement: "Turning ideas into powerful digital experiences.",
  stats: [
    { value: "5", label: "LIVE PROJECTS" },
    { value: "3", label: "COUNTRIES SERVED (PK, SA, UAE)" },
    { value: "EN / AR", label: "BILINGUAL BUILDS" },
  ],
  navLinks: [
    { label: "Home", href: "/#hero" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],
};

export default HERO_DATA;
