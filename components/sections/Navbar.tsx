"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LanguageToggle } from "../ui/LanguageToggle";
import { ThemeToggle } from "../ui/ThemeToggle";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import { translations } from "@/data/translations";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { language } = useLanguage();
  const navTexts = translations[language].nav;

  const navLinks = [
    { id: "home", name: navTexts.home, href: "#home" },
    { id: "about", name: navTexts.about, href: "#about" },
    { id: "skills", name: navTexts.skills, href: "#skills" },
    { id: "projects", name: navTexts.projects, href: "#projects" },
    { id: "experience", name: navTexts.experience, href: "#experience" },
    { id: "contact", name: navTexts.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navLinks.map(l => document.getElementById(l.id));
      const scrollPos = window.scrollY + 100;
      
      for (const section of sections) {
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
           setActiveSection(section.id);
           break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        isMenuOpen ? "inset-0 bg-background" : "px-4 sm:px-6 py-4",
        !isMenuOpen && isScrolled ? "bg-background/90 backdrop-blur-lg border-b border-neon-ice/20 py-3 shadow-sm" : 
        !isMenuOpen ? "bg-transparent" : ""
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto flex h-full",
        isMenuOpen ? "flex-col" : "flex-row items-center justify-between"
      )}>
        {/* Top Bar (Logo + Toggle) */}
        <div className={cn(
          "flex items-center justify-between w-full",
          isMenuOpen ? "px-6 py-4 border-b border-neutral-100" : ""
        )}>
          <Link 
            href="/" 
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-bold tracking-tighter hover:text-neon-purple transition-shadow flex items-center gap-1 group"
          >
            <div className="w-8 h-8 rounded-lg bg-neon-purple flex items-center justify-center text-white text-xs shadow-neon-glow group-hover:scale-110 transition-transform font-bold">ZP</div>
            <span className="flex text-foreground">ZhaRa<span className="text-neon-purple">Porto</span></span>
          </Link>

          {/* Desktop Nav Icons/Toggles (Hidden on Mobile Menu) */}
          {!isMenuOpen && (
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className={cn(
                    "relative text-xs xl:text-sm font-bold uppercase tracking-widest transition-all duration-300 px-1 py-1",
                    activeSection === link.id ? "text-neon-purple" : "text-neutral-400 hover:text-neon-purple"
                  )}
                >
                  {link.name}
                  
                  <span className={cn(
                    "absolute bottom-0 left-0 h-[2px] bg-neon-purple transition-all duration-300 shadow-neon-glow",
                    activeSection === link.id ? "w-full opacity-100" : "w-0 opacity-0"
                  )} />
                </Link>
              ))}
              <div className="h-6 w-px bg-neutral-200 dark:bg-neutral-800 mx-2" />
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <LanguageToggle />
              </div>
            </div>
          )}

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-4">
            {!isMenuOpen && (
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <LanguageToggle />
              </div>
            )}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-grow flex flex-col lg:hidden overflow-hidden bg-background"
            >
              <div className="flex-grow flex flex-col items-start px-8 pt-12 space-y-6 overflow-y-auto">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "group flex items-center gap-4 text-3xl font-black uppercase tracking-widest transition-all duration-300",
                        activeSection === link.id ? "text-neon-purple scale-105" : "text-neutral-400 hover:text-neutral-900 font-bold"
                      )}
                    >
                      <span className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        activeSection === link.id ? "bg-neon-purple scale-150" : "bg-transparent group-hover:bg-neutral-200"
                      )} />
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Footer */}
              <div className="p-8 border-t border-border bg-card/50">
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-400 mb-4">Connect</p>
                <div className="flex flex-col gap-2">
                   <span className="text-xs text-neutral-500 font-mono tracking-tighter">© 2026 ZhaRaPorto // MSZ</span>
                   <div className="flex gap-4 mt-2">
                      <ThemeToggle />
                      <LanguageToggle />
                      <span className="text-[10px] text-neutral-300 dark:text-neutral-600 uppercase self-center">System Online</span>
                   </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
