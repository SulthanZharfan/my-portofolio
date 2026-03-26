import { Layout, Code2, Globe, Database, Cpu, Smartphone } from "lucide-react";

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", level: 90, icon: Layout },
      { name: "TypeScript", level: 85, icon: Code2 },
      { name: "Tailwind CSS", level: 95, icon: Globe },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 75, icon: Database },
      { name: "PostgreSQL", level: 70, icon: Database },
      { name: "REST API", level: 85, icon: Cpu },
    ]
  }
];
