"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { CyberCard } from '../ui/CyberCard';
import { experience } from '@/data/experience';
import { useLanguage } from '@/context/LanguageContext';
import { Briefcase, Calendar } from 'lucide-react';
import { GlowEffect } from '../ui/GlowEffect';
import { Reveal } from '../animation/Reveal';

export const Experience = () => {
  const { t } = useLanguage();

  const title = { en: "Quest Log", id: "Log Petualangan" };

  return (
    <SectionWrapper id="experience" title={t(title)}>
      <GlowEffect color="purple" size="md" className="right-0 top-1/2" />
      
      <div className="relative space-y-12">
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-200 to-transparent md:-translate-x-1/2" />

        {experience.map((exp, index) => (
          <Reveal key={index} width="100%" delay={index * 0.2}>
            <div className={cn(
              "relative flex flex-col md:flex-row gap-8 items-start",
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            )}>
              <motion.div 
                whileInView={{ scale: [0.8, 1.2, 1], opacity: 1 }}
                initial={{ opacity: 0 }}
                className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full border-4 border-white bg-neon-purple shadow-neon-glow -translate-x-1/2 z-10" 
              />
              
              <div className="w-full md:w-[45%] pl-12 md:pl-0">
                <CyberCard className={cn(
                  "relative",
                  index % 2 === 0 ? "md:border-r-4 border-r-neon-purple" : "md:border-l-4 border-l-neon-ice"
                )}>
                  <div className="flex items-center gap-3 mb-4 text-neon-purple">
                    <Briefcase size={18} />
                    <span className="font-bold tracking-tight uppercase text-[10px]">{t(exp.role)}</span>
                  </div>
                  
                  <h3 className="text-xl font-black mb-1 tracking-tighter">{exp.company}</h3>
                  
                  <div className="flex items-center gap-2 text-neutral-400 text-[10px] mb-6 px-2 py-0.5 rounded bg-neutral-50 w-fit font-mono">
                    <Calendar size={12} />
                    <span>{exp.duration}</span>
                  </div>
                  
                  <p className="text-neutral-500 text-sm leading-relaxed border-l-2 border-neutral-100 pl-4 py-1">
                    {t(exp.description)}
                  </p>
                </CyberCard>
              </div>
              
              <div className="hidden md:block w-[45%]" />
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
};

import { cn } from "@/lib/utils";
