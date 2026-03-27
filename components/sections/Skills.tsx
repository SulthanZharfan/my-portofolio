"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { CyberCard } from "../ui/CyberCard";
import { skills } from "@/data/skills";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { Reveal } from "../animation/Reveal";

export const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;

  return (
    <SectionWrapper id="skills" title={t.title}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {skills.map((group, idx) => (
          <Reveal key={idx} width="100%" delay={idx * 0.2}>
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="flex items-center gap-3 px-4 py-2 bg-neon-purple/5 border-l-4 border-neon-purple rounded-r-md w-fit">
                 <span className="text-[10px] md:text-xs font-bold tracking-widest text-neon-purple uppercase">{group.category}</span>
              </div>
              
              <div className="grid gap-4 md:gap-6">
                {group.items.map((skill, sIdx) => (
                  <CyberCard key={sIdx} className="p-4 md:p-5 flex flex-col gap-3 md:gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-neon-ice/10 text-neon-ice group-hover:bg-neon-ice/20 transition-colors">
                          <skill.icon size={20} />
                        </div>
                        <span className="font-bold text-neutral-800 tracking-tight">{skill.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-neon-purple">{skill.level}%</span>
                    </div>
                    
                    <div className="relative h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-neon-purple to-neon-ice shadow-neon-glow"
                      />
                      <div className="absolute top-0 left-0 h-full w-20 bg-white/30 skew-x-12 translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite]" />
                    </div>
                    
                    <div className="text-[10px] text-neutral-400 font-mono uppercase tracking-tighter">
                       {t.level} :: {skill.level > 80 ? "OPTIMIZED" : "STABLE"}
                    </div>
                  </CyberCard>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(400%); }
        }
      `}</style>
    </SectionWrapper>
  );
};
