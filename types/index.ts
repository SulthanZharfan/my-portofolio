export type Translatable = {
  en: string;
  id: string;
};

export interface Project {
  title: Translatable | string;
  description: Translatable | string;
  image: any;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon?: string;
  level?: string;
  category: "Frontend" | "Backend" | "Tools" | "Other";
}

export interface Experience {
  company: string;
  role: Translatable | string;
  duration: string;
  description: Translatable | string;
}

export interface CurrentJob {
  company: string;
  role: Translatable | string;
  status: Translatable | string;
  description: Translatable | string;
  startDate: string;
}

export interface Certificate {
  title: Translatable | string;
  issuer: string;
  year: string;
  link?: string;
}
