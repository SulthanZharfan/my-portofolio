"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const content = {
    copyright: {
      en: `© ${year} ZhaRaPorto. All rights reserved.`,
      id: `© ${year} ZhaRaPorto. Hak cipta dilindungi.`
    }
  };

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-neutral-400 font-mono tracking-tighter">
          {t(content.copyright)}
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">System_Online</span>
          </div>
          <div className="h-4 w-px bg-neutral-200" />
          <div className="text-[10px] font-mono text-neutral-300">
            v2.0.0_PHASE_3
          </div>
        </div>
      </div>
    </footer>
  );
};
