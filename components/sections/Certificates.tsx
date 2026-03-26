"use client";

import React from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { CyberCard } from '../ui/CyberCard';
import { useLanguage } from '@/context/LanguageContext';
import { Award, ExternalLink } from 'lucide-react';
import { certificates } from '@/data/certificates';
import { Reveal } from '../animation/Reveal';

export const Certificates = () => {
  const { t } = useLanguage();

  const content = {
    title: { en: "System Verifications", id: "Verifikasi Sistem" },
    view: { en: "Auth", id: "Otentikasi" }
  };

  return (
    <SectionWrapper id="certificates" title={t(content.title)}>
      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert, idx) => (
          <Reveal key={idx} width="100%" delay={idx * 0.1}>
            <CyberCard className="flex items-center justify-between p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-neon-purple/5 text-neon-purple group-hover:bg-neon-purple group-hover:text-white transition-all duration-300">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-black text-neutral-800 tracking-tight">{t(cert.title)}</h3>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono">{cert.issuer} • {cert.year}</p>
                </div>
              </div>
              <button className="p-2 text-neon-ice hover:text-neon-purple transition-colors" title={t(content.view)}>
                <ExternalLink size={18} />
              </button>
            </CyberCard>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
};
