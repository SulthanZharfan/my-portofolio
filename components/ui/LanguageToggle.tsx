'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 p-1 border rounded-full border-neutral-200 bg-neutral-50/50">
      <button 
        onClick={() => setLanguage('en')}
        className={cn(
          "px-3 py-1 text-xs font-bold transition-all rounded-full",
          language === 'en' ? "bg-white shadow-sm text-neon-purple" : "text-neutral-400 hover:text-neutral-600"
        )}
      >
        EN
      </button>
      <button 
        onClick={() => setLanguage('id')}
        className={cn(
          "px-3 py-1 text-xs font-bold transition-all rounded-full",
          language === 'id' ? "bg-white shadow-sm text-neon-purple" : "text-neutral-400 hover:text-neutral-600"
        )}
      >
        ID
      </button>
    </div>
  );
};
