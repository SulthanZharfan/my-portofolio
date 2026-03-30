import { Layout, Code2, Globe, Database, Cpu, Smartphone, Server } from "lucide-react";

export const skills = [
  {
    category: "frontend",
    items: [
      { name: "React / Next.js", level: 1, icon: Layout },
      { name: "TypeScript", level: 1, icon: Code2 },
      { name: "Tailwind CSS", level: 1, icon: Globe },
      { name: "Flutter & Dart", level: 1, icon: Smartphone },
    ]
  },
  {
    category: "backend",
    items: [
      { name: "PHP / Laravel", level: 1, icon: Server },
      { name: "Node.js", level: 1, icon: Cpu },
      { name: "MySQL & PostgreSQL", level: 1, icon: Database },
      { name: "REST API", level: 1, icon: Cpu },
    ]
  }
];


