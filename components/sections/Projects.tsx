"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { CyberCard } from '../ui/CyberCard';
import { CyberButton } from '../ui/CyberButton';
import { projects } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Reveal } from '../animation/Reveal';
import { translations } from '@/data/translations';

export const Projects = () => {
  const { language, t } = useLanguage();
  const trans = translations[language].projects;

  return (
    <SectionWrapper id="projects" title={trans.title}>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Reveal key={index} width="100%" delay={index * 0.1}>
            <CyberCard className="flex flex-col h-full overflow-hidden">
              <div className="relative aspect-video bg-neutral-900 mb-6 rounded-lg overflow-hidden border border-neutral-800 group-hover:border-neon-ice/60 transition-colors">
                 <Image 
                    src={project.image} 
                    alt={t(project.title)}
                    fill
                    className="object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    sizes="(max-w-768px) 100vw, 50vw"
                    loading="lazy"
                 />
                 <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-[10px] text-white font-mono flex items-center gap-1 z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-ice animate-pulse" />
                    STATUS: ACTIVE
                 </div>
              </div>
              
              <div className="flex flex-col flex-grow text-left">
                <h3 className="text-2xl font-black mb-3 group-hover:text-neon-purple transition-colors tracking-tighter">
                  {t(project.title)}
                </h3>
                <p className="text-neutral-500 text-sm mb-6 leading-relaxed">
                  {t(project.description)}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest bg-neutral-100 text-neutral-500 border border-neutral-100 rounded group-hover:border-neon-ice/20 group-hover:text-neon-ice transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <CyberButton 
                    className="flex-grow py-2.5" 
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink size={14} className="mr-2" />
                    {trans.viewLive}
                  </CyberButton>
                  <motion.button 
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="p-2.5 text-neutral-400 hover:text-neon-purple transition-colors border border-transparent hover:border-neon-purple/20 rounded-lg bg-neutral-50"
                    title={trans.viewCode}
                  >
                    <Github size={20} />
                  </motion.button>
                </div>
              </div>
            </CyberCard>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
};
