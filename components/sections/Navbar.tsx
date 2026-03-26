"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LanguageToggle } from "../ui/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { translations } from "@/data/translations";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md border-b border-neon-ice/20 py-3 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-neon-purple transition-shadow flex items-center gap-1 group">
          <div className="w-8 h-8 rounded-lg bg-neon-purple flex items-center justify-center text-white text-xs shadow-neon-glow group-hover:scale-110 transition-transform font-bold">ZP</div>
          <span className="flex text-neutral-900">ZhaRa<span className="text-neon-purple">Porto</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={cn(
                "relative text-sm font-bold uppercase tracking-widest transition-all duration-300 px-1 py-1",
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
          <div className="h-6 w-px bg-neutral-200 mx-2" />
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};
