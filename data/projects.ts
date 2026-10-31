export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  liveUrl?: string; // Optional if no live URL exists yet
  isPlaceholderImage?: boolean;
}

export const PROJECTS_HEADER = {
  title: "SELECTED PROJECTS",
  label: "A SELECTION OF DIGITAL EXPERIENCES",
  viewAllText: "VIEW ALL PROJECTS",
  viewAllHref: "/projects",
};

export const PROJECTS: Project[] = [
  {
    id: "ac-technical-services",
    number: "01",
    title: "AC TECHNICAL SERVICES",
    category: "BUSINESS WEBSITE",
    description: "Website for AC maintenance, repair and installation services in the UAE, with mobile-first design, WhatsApp actions and local SEO.",
    image: "/projects/ac-technical.webp",
    liveUrl: "https://actech-services.netlify.app/",
    isPlaceholderImage: false
  },
  {
    id: "boom-truck-rental",
    number: "02",
    title: "BOOM TRUCK RENTAL",
    category: "INDUSTRIAL SERVICES WEBSITE",
    description: "Bilingual English/Arabic website for an independent boom truck operator in Dammam, Saudi Arabia, with RTL support and local SEO.",
    image: "/projects/boom-truck.webp",
    liveUrl: "https://miansaqib.com/",
    isPlaceholderImage: false
  },
  {
    id: "ark-fast-foodies",
    number: "03",
    title: "ARK FAST FOODIES",
    category: "RESTAURANT BRANDING & DIGITAL DESIGN",
    description: "Restaurant branding, promotional graphics and offer posters with bold typography and consistent brand identity.",
    image: "/projects/ark-fast-foodies.webp",
    // TODO: Add live URL when the project is deployed
    liveUrl: undefined,
    isPlaceholderImage: true
  },
  {
    id: "ark-portfolio",
    number: "04",
    title: "ARK PORTFOLIO",
    category: "PERSONAL PORTFOLIO WEBSITE",
    description: "Personal portfolio built with Next.js covering brand identity, UI/UX design, bilingual layouts and SEO, with case studies and a services page.",
    image: "/projects/ark-portfolio.webp",
    liveUrl: "https://env-three-kohl.vercel.app/",
    isPlaceholderImage: false
  },
  {
    id: "ark-creative-engineering",
    number: "05",
    title: "ARK CREATIVE ENGINEERING",
    category: "CREATIVE ENGINEERING SHOWCASE",
    description: "Futuristic, aerospace-inspired showcase with cinematic parallax layers, interactive 3D visuals, sound and a real-time telemetry-style interface.",
    image: "/projects/ark-creative-engineering.webp",
    liveUrl: "https://portfolio-alpha-one-ym3ipfauzw.vercel.app/",
    isPlaceholderImage: false
  }
];

export default PROJECTS;
