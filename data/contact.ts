export interface ContactInfo {
  whatsappDisplay: string;
  whatsappUrl: string;
  whatsappNumber: string;
  email: string;
  status: string;
  availability: string;
}

export const CONTACT: ContactInfo = {
  whatsappDisplay: "03141495630",
  whatsappUrl: "https://wa.me/923141495630",
  whatsappNumber: "923141495630",
  email: "ark203777@gmail.com",
  status: "Available for New Projects",
  availability: "Remote & Worldwide Collaboration",
};

export const CONTACT_COPY = {
  heading: "LET'S WORK TOGETHER",
  label: "START A CONVERSATION",
  subcopy: "Have a website idea, a business to grow, or a brand that needs a stronger digital presence? Let's discuss your project.",
  ctaText: "START A PROJECT",
};

export const PROJECT_TYPES = [
  "Website Design & Development",
  "Responsive Business Website",
  "Arabic / English Bilingual Website",
  "UI/UX & Interactive Design",
  "Graphic Design & Branding",
  "Website Redesign & Optimization",
  "Other Inquiry"
];

export const BUDGET_TIERS = [
  "Flexible / To Be Discussed",
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $3,000",
  "$3,000+"
];

export default CONTACT;
