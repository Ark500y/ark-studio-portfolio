export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: 'search' | 'compass' | 'pencil' | 'code' | 'send';
}

export const WORK_PROCESS_HEADER = {
  title: "WORK PROCESS",
  label: "HOW PROJECTS COME TO LIFE",
};

export const WORK_PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Understand the business, audience, goals and requirements.",
    icon: "search"
  },
  {
    number: "02",
    title: "STRATEGY",
    description: "Define structure, visual direction and user journey.",
    icon: "compass"
  },
  {
    number: "03",
    title: "DESIGN",
    description: "Create the interface, typography system and visual identity.",
    icon: "pencil"
  },
  {
    number: "04",
    title: "DEVELOP",
    description: "Build a responsive, accessible, performance-focused website.",
    icon: "code"
  },
  {
    number: "05",
    title: "DELIVER",
    description: "Test, optimize and prepare for deployment.",
    icon: "send"
  }
];

export const QUOTE_PANEL = {
  quote: "Good design doesn't just look different. It makes the experience feel effortless.",
  attribution: "ARK STUDIO",
  subline: "LET'S CREATE SOMETHING MEANINGFUL TOGETHER."
};

export default WORK_PROCESS_STEPS;
