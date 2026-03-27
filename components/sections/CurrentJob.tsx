"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { CyberCard } from "../ui/CyberCard";
import { currentJob } from "@/data/currentJob";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "../animation/Reveal";
import { translations } from "@/data/translations";

export const CurrentJob = () => {
  const { language, t } = useLanguage();
  const trans = translations[language].currentJob;

  return (
    <SectionWrapper id="currect-job" title={trans.title} className="bg-neutral-50/50">
      <Reveal width="100%">
        <div className="max-w-4xl mx-auto">
          <CyberCard className="relative overflow-hidden border-2 border-neon-purple/40 shadow-neon-glow-strong bg-white">
            {/* Animated Background Pulse */}
            <motion.div 
               animate={{ opacity: [0.05, 0.15, 0.05] }}
               transition={{ duration: 3, repeat: Infinity }}
               className="absolute inset-0 bg-neon-purple -z-10"
            />
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-grow space-y-4 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neon-purple text-white text-[10px] font-bold uppercase tracking-widest">
                  {t(currentJob.status)}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tighter">
                  {t(currentJob.role)} @ <span className="text-neon-purple">{currentJob.company}</span>
                </h3>
                
                <p className="text-neutral-500 leading-relaxed text-lg italic">
                  "{t(currentJob.description)}"
                </p>
                
                <div className="pt-4 flex items-center justify-center md:justify-start gap-4 text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon-ice animate-pulse" />
                    START_DATE: {currentJob.startDate}
                  </span>
                  <span>|</span>
                  <span>ENV: {trans.env}</span>
                </div>
              </div>

              {/* HUD Graphic */}
              <div className="flex-shrink-0 relative w-32 h-32 hidden md:block">
                 <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 border-2 border-dashed border-neon-ice/30 rounded-full"
                 />
                 <motion.div 
                   animate={{ rotate: -360 }}
                   transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-4 border border-neon-purple/20 rounded-full"
                 />
                 <div className="absolute inset-0 flex items-center justify-center text-neon-purple">
                    <span className="text-2xl font-black italic">HUD</span>
                 </div>
              </div>
            </div>
          </CyberCard>
        </div>
      </Reveal>
    </SectionWrapper>
  );
};
