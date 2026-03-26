import { Code2, Globe, Database, Cpu, Layout, Smartphone } from "lucide-react";

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 90, icon: Layout },
      { name: "TypeScript", level: 85, icon: Code2 },
      { name: "Tailwind CSS", level: 95, icon: Globe },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 75, icon: Database },
      { name: "PostgreSQL", level: 70, icon: Database },
      { name: "REST API", level: 85, icon: Cpu },
    ]
  },
  {
    category: "Mobile & Tools",
    skills: [
      { name: "React Native", level: 65, icon: Smartphone },
      { name: "Git", level: 90, icon: Code2 },
      { name: "Figma", level: 80, icon: Layout },
    ]
  }
];
