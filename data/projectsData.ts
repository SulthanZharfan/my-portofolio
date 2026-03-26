import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    title: {
      en: "EcoTracker",
      id: "EcoTracker"
    },
    description: {
      en: "A dashboard to track carbon footprint and environmental impact.",
      id: "Dashboard untuk melacak jejak karbon dan dampak lingkungan."
    },
    image: "/projects/eco.jpg",
    tags: ["Next.js", "Tailwind", "Chart.js"],
    link: "https://example.com",
    github: "https://github.com"
  },
  {
    title: {
      en: "CyberBank",
      id: "CyberBank"
    },
    description: {
      en: "Futuristic banking app interface with real-time analytics.",
      id: "Antarmuka aplikasi perbankan futuristik dengan analitik real-time."
    },
    image: "/projects/bank.jpg",
    tags: ["React", "Glassmorphism", "Framer Motion"],
    link: "https://example.com",
  }
];
