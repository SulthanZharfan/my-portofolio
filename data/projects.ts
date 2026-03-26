import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: { en: "Aetherial Dashboard", id: "Dashboard Aetherial" },
    description: { 
      en: "A futuristic management platform with real-time data visualization and HUD-inspired interface.", 
      id: "Platform manajemen futuristik dengan visualisasi data real-time dan antarmuka terinspirasi HUD." 
    },
    image: "/projects/aether.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    link: "https://demo.zirara.page",
  },
  {
    title: { en: "CyberTrade Nexus", id: "Nexus CyberTrade" },
    description: { 
      en: "High-performance crypto trading dashboard with neo-brutalism design and low-latency updates.", 
      id: "Dashboard perdagangan kripto berperforma tinggi dengan desain neo-brutalisme dan pembaruan latensi rendah." 
    },
    image: "/projects/nexus.jpg",
    tags: ["React", "Redux", "Node.js", "Socket.io"],
    link: "https://nexus.zirara.page",
  }
];
