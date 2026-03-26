/**
 * Zirara Design System - Theme Configuration
 * Berisi warna, glow, dan utilitas gaya yang dapat digunakan kembali.
 */

export const theme = {
  colors: {
    primary: "#A855F7",       // Neon Purple
    primarySoft: "#C084FC",   // Soft Neon Purple
    accent: "#6593f5",        // Cornflower Blue
    background: "#ffffff",    // Clean Background
    dark: "#1A1A1A",          // HUD Dark elements
  },
  
  glows: {
    purple: "0 0 15px rgba(168, 85, 247, 0.4)",
    purpleStrong: "0 0 25px rgba(168, 85, 247, 0.6)",
    blue: "0 0 15px rgba(101, 147, 245, 0.4)",
    blueStrong: "0 0 25px rgba(101, 147, 245, 0.6)",
  },
  
  gradients: {
    cyber: "linear-gradient(to right, #A855F7, #6593f5)",
    glass: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
  },
  
  borderRadius: {
    modern: "0.5rem",
    cyber: "0.5rem 2rem 0.5rem 2rem",
    full: "9999px",
  }
};
