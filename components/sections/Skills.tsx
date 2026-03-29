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
                  <CyberCard key={sIdx} className="p-4 md:p-5 flex flex-col gap-3 group relative overflow-hidden border-neon-purple/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-neon-purple/10 text-neon-purple border border-neon-purple/20 group-hover:bg-neon-purple/20 transition-all duration-300">
                          <skill.icon size={18} />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-sm tracking-widest uppercase text-foreground/90 group-hover:text-neon-ice transition-colors">{skill.name}</span>
                          <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-tighter">System Module :: Active</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[9px] font-mono text-neon-ice/70 uppercase leading-none mb-1">Rank</span>
                        <span className="text-[11px] font-mono text-neon-ice font-bold drop-shadow-neon-ice">LVL : {skill.level?.toString().padStart(2, '0') || "01"}</span>
                      </div>
                    </div>

                    <div className="relative h-1.5 w-full bg-black/40 rounded-full border border-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "65%" }}
                        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-purple via-neon-ice to-transparent shadow-[0_0_10px_rgba(101,147,245,0.5)]"
                      />
                      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,rgba(255,255,255,0.1)_4px,rgba(255,255,255,0.1)_5px)]" />
                    </div>

                    <div className="flex justify-between items-center text-[8px] font-mono text-neutral-500 uppercase tracking-widest">
                      <div className="flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-neon-ice animate-pulse" />
                        <span>Syncing Data...</span>
                      </div>
                      <span>XP: 1024 / 2048</span>
                    </div>
                  </CyberCard>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
};
