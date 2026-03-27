"use client";

import React from 'react';
import Image from 'next/image';
import profileImg from '@/public/profile.jpg';
import { SectionWrapper } from '../ui/SectionWrapper';
import { CyberCard } from '../ui/CyberCard';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Calendar, Snowflake } from 'lucide-react';
import { GlowEffect } from '../ui/GlowEffect';
import { Reveal } from '../animation/Reveal';
import { translations } from '@/data/translations';

export const About = () => {
  const { language, t } = useLanguage();
  const trans = translations[language].about;

  return (
    <SectionWrapper id="about" title={trans.title}>
      <Reveal width="100%">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <CyberCard className="relative aspect-square max-w-[280px] sm:max-w-md mx-auto md:mx-0 overflow-hidden group p-0">
            <div className="absolute top-6 right-6 z-20">
              <Snowflake className="w-8 h-8 text-neon-ice drop-shadow-ice-glow animate-spin-slow opacity-50" />
            </div>
            <Image
              src={profileImg}
              alt="Muhammad Sulthan Zharfan"
              fill
              className="object-cover transition-all duration-700 opacity-100"
              sizes="(max-w-768px) 100vw, 50vw"
              priority
            />

            <div className="absolute bottom-4 left-4 z-20">
              <span className="text-[10px] font-mono tracking-widest text-white/40 group-hover:text-neon-ice transition-colors">[ IDENTITY_SCAN ]</span>
            </div>
          </CyberCard>

          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-neon-purple tracking-tight">
                {trans.goal}
              </h3>
              <p className="text-base md:text-xl text-foreground/80 leading-relaxed font-light">
                {t({
                  en: "I am a passionate Web Developer dedicated to building sleek, functional, and user-centric web applications. My journey started with a fascination for interactive digital worlds, and now I turn that passion into elegant code.",
                  id: "Saya adalah Web Developer yang berdedikasi untuk membangun aplikasi web yang ramping, fungsional, dan berpusat pada pengguna. Perjalanan saya dimulai dengan ketertarikan pada dunia digital interaktif, dan sekarang saya mengubah gairah itu menjadi kode yang elegan."
                })}
              </p>
              <p className="text-sm md:text-base text-neutral-500 leading-relaxed italic border-l-2 border-neon-ice/30 pl-4">
                {t({
                  en: "Constantly exploring new technologies, my goal is to bridge the gap between imagination and reality through high-performance software and immersive designs.",
                  id: "Terus mengeksplorasi teknologi baru, tujuan saya adalah menjembatani kesenjangan antara imajinasi dan kenyataan melalui perangkat lunak berkinerja tinggi dan desain yang imersif."
                })}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6 border-t border-border">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-neon-purple mb-1">
                  <MapPin size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">{trans.base}</span>
                </div>
                <span className="text-lg font-medium text-foreground">Bogor, Indonesia</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-neon-ice mb-1">
                  <Calendar size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">{trans.exp}</span>
                </div>
                <span className="text-lg font-medium text-foreground">{trans.years}</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
};
