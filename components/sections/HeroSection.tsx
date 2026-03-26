"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CyberButton } from '../ui/CyberButton';
import { SectionWrapper } from '../ui/SectionWrapper';
import { GlowEffect } from '../ui/GlowEffect';
import { useLanguage } from '@/context/LanguageContext';
import { Snowflake, ChevronRight } from 'lucide-react';

export const HeroSection = () => {
  const { language, t } = useLanguage();

  const content = {
    badge: { en: "Available for Hire", id: "Siap Bekerja" },
    tagline: { en: "Crafting Interactive Worlds Through Code", id: "Membangun Dunia Interaktif Melalui Kode" },
    viewProjects: { en: "View Projects", id: "Lihat Proyek" },
    contactMe: { en: "Contact Me", id: "Hubungi Saya" }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <SectionWrapper id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center text-center">
      <GlowEffect color="purple" size="lg" className="top-1/4" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-purple/5 border border-neon-purple/20 text-neon-purple text-[10px] font-bold tracking-widest uppercase mb-8 shadow-neon-glow">
          <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
          {t(content.badge)}
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
          <span className="text-neutral-900 block md:inline">Muhammad Sulthan </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-ice to-neon-purple bg-[length:200%_auto] animate-[gradient_4s_linear_infinite] drop-shadow-neon-glow">
            Zharfan
          </span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-lg md:text-2xl font-mono text-neutral-400 mb-12 flex items-center gap-3">
          <span className="text-neon-ice">&lt;</span>
          Web Developer
          <span className="text-neon-ice">/&gt;</span>
        </motion.p>
        
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-neutral-500 max-w-2xl mb-12 italic leading-relaxed border-l-4 border-neon-ice/20 pl-6 py-2">
          "{t(content.tagline)}"
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 relative">
          <CyberButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            {t(content.viewProjects)} <ChevronRight size={16} />
          </CyberButton>
          <CyberButton variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            {t(content.contactMe)}
          </CyberButton>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </SectionWrapper>
  );
};
