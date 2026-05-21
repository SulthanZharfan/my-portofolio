# ZhaRaPorto 👥
![ZhaRaPoro Banner](public/readme-banner.svg)

---

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15.1.0-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.0.0-20232a?style=for-the-badge&logo=react&logoColor=61dafb)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11-ff007f?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

</div>

---

## 🔗 LIVE DEMO & LAUNCH

> [!IMPORTANT]
> **🚀 LAUNCH PORTFOLIO HUD:** [👉 sulthanzharfan.github.io/my-portofolio/ 👈](https://sulthanzharfan.github.io/my-portofolio/)

---

## 🌌 Project Overview
**ZhaRaPorto** is a premium, futuristic cyberpunk/gaming HUD-themed developer portfolio designed to showcase skills, projects, work experience, and certifications. Built using **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**, it features a fully bilingual interface (English & Indonesian) and responsive animations powered by **Framer Motion**.

The design is heavily inspired by sci-fi gaming interfaces, presenting information as "System Modules", "Quest Logs", and "Digital Artifacts" with glowing borders, hover micro-animations, and dynamic scanning lines.

---

## 🎮 Key Features
- 🌐 **Bilingual System (EN/ID):** Seamless language switcher embedded directly in the futuristic navigation bar.
- ⚙️ **Dynamic Auto-Versioning:** The system automatically syncs its footer version with the version defined in `package.json` (integrated via Next.js logic).
- 🧬 **Interactive Tech Arsenal:** Skills grouped by frontend, backend, and tools, complete with active status and XP indicator animations.
- 📜 **Quest Log (Work Experience):** A stylized chronological path of developer work history, showing current environment and status.
- 📁 **Digital Artifacts (Projects Showcase):** Clean grid displaying real-world projects with customizable source code links and tags.
- ✉️ **Neural Link (Contact Form):** Futuristic contact interface with built-in validation and success indicators.
- 🌗 **Ambient Glow Effect:** Moving backdrop lighting and glassmorphism elements to create a premium, immersive look.

---

## 🛠️ Tech Stack & Technologies Used

- **Framework:** Next.js 15.1 (App Router)
- **Frontend Library:** React 19.0
- **Styling:** Tailwind CSS (with Glassmorphic utilities)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deployment:** Optimized for Vercel

---

## 📁 Repository Structure
```bash
ZhaRaPorto/
├── app/                  # Next.js App Router (Layouts, Globals, Home Page)
├── components/           # UI and Section Components
│   ├── animation/        # Background animations (BackgroundGlow)
│   ├── sections/         # Individual sections (Navbar, Hero, Skills, Projects, etc.)
│   └── ui/               # Reusable UI primitives
├── data/                 # Static content, projects, and translation dictionaries
├── public/               # Static assets (images, projects showcase, animated SVG banner)
├── styles/               # CSS styling sheets
├── next.config.ts        # Next.js configuration
├── package.json          # Dependency tree & auto-version sync source
└── tailwind.config.ts    # Tailwind styling variables and custom animations
```

---

## 🚀 Getting Started & Local Development

To run this portfolio locally on your machine, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/SulthanZharfan/my-portofolio.git
cd my-portofolio
```

### 2. Install dependencies
Ensure you have [Node.js](https://nodejs.org) installed, then run:
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

### 4. Build for production
To build a static production bundle:
```bash
npm run build
```

---

## 📦 Version Management Plan

This repository utilizes an automated versioning system connected to `package.json`.
To update the version shown on the website's footer, you can update the version field in `package.json` manually or use npm commands:
- **Patch (Bug fixes):** `npm version patch`
- **Minor (New features):** `npm version minor`
- **Major (Breaking/Total revamp):** `npm version major`

See [VERSIONING_PLAN.md](VERSIONING_PLAN.md) for more details.

---

## 📊 System Activity & Stats (GitHub Profile Widgets)

If you'd like to showcase your GitHub stats with a matching cyberpunk design in this README, you can copy the following markdown snippet:

```markdown
<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=SulthanZharfan&show_icons=true&theme=tokyonight&count_private=true" alt="GitHub Stats" />
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=SulthanZharfan&theme=tokyonight" alt="GitHub Streak" />
</div>
```

---

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).
