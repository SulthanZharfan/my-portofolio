import { Layout, Code2, Globe, Database, Cpu, Smartphone } from "lucide-react";

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", level: 1, icon: Layout },
      { name: "TypeScript", level: 1, icon: Code2 },
      { name: "Tailwind CSS", level: 1, icon: Globe },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 1, icon: Database },
      { name: "PostgreSQL", level: 1, icon: Database },
      { name: "REST API", level: 1, icon: Cpu },
    ]
  }
];
