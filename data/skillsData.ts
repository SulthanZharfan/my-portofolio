import { Code2, Globe, Database, Cpu, Layout, Smartphone } from "lucide-react";

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 1, icon: Layout },
      { name: "TypeScript", level: 1, icon: Code2 },
      { name: "Tailwind CSS", level: 1, icon: Globe },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 1, icon: Database },
      { name: "PostgreSQL", level: 1, icon: Database },
      { name: "REST API", level: 1, icon: Cpu },
    ]
  },
  {
    category: "Mobile & Tools",
    skills: [
      { name: "React Native", level: 1, icon: Smartphone },
      { name: "Git", level: 1, icon: Code2 },
      { name: "Figma", level: 1, icon: Layout },
    ]
  }
];
