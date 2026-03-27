import { Project } from "@/types";
import aetherImg from "@/public/projects/aether.png";
import nexusImg from "@/public/projects/nexus.png";
import glitchImg from "@/public/projects/glitch.png";

export const projects: Project[] = [
  {
    title: { en: "SIPPA", id: "SIPPA" },
    description: { 
      en: "Information System for Tracking Child Development (Sistem Informasi Pencatatan Perkembangan Anak). A comprehensive platform built for a thesis project.", 
      id: "Sistem Informasi Pencatatan Perkembangan Anak. Platform komprehensif yang dibangun untuk proyek skripsi." 
    },
    image: aetherImg,
    tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    link: "https://github.com/SulthanZharfan/SIPPA-Sistem-Informasi-Pencatatan-Perkembangan-Anak-",
  },
  {
    title: { en: "WargaBersih", id: "WargaBersih" },
    description: { 
      en: "A digital landing page for RT/RW management to help residents and administrators maintain neighborhood cleanliness and environment.", 
      id: "Landing page digital untuk manajemen RT/RW guna membantu warga dan pengurus menjaga kebersihan lingkungan." 
    },
    image: nexusImg,
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    link: "https://github.com/SulthanZharfan/Landing-Page-WargaBersih",
  },
  {
    title: { en: "Student Task Management", id: "Manajemen Tugas Mahasiswa" },
    description: { 
      en: "A task management application specifically designed for students to organize assignments and academic schedules.", 
      id: "Aplikasi manajemen tugas yang dirancang khusus untuk mahasiswa guna mengelola tugas dan jadwal akademik." 
    },
    image: glitchImg,
    tags: ["Flutter", "Dart", "Mobile App", "Cross-Platform"],
    link: "https://github.com/SulthanZharfan/UTS_PBM",
  }
];
