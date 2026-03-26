"use client";

import React, { useState } from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { CyberCard } from '../ui/CyberCard';
import { CyberButton } from '../ui/CyberButton';
import { useLanguage } from '@/context/LanguageContext';
import { Send, Mail, MapPin, Linkedin, Github, CheckCircle2 } from 'lucide-react';
import { translations } from '@/data/translations';
import { Reveal } from '../animation/Reveal';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from 'framer-motion';

export const Contact = () => {
  const { language, t } = useLanguage();
  const trans = translations[language].contact;
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    // You can get your own access key from https://web3forms.com/
    formData.append("access_key", "3273cb89-06c9-4100-b393-5ede9b580fef");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Transmission failed", data);
        alert("Transmission failed. Please try again.");
      }
    } catch (error) {
      console.error("Network error", error);
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" title={trans.title}>
      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2 space-y-8">
          <Reveal width="100%">
            <CyberCard className="flex items-center gap-4 p-6">
              <div className="p-2.5 w-fit rounded-xl bg-neon-purple/10 text-neon-purple">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-1">{trans.email}</p>
                <p className="text-lg font-medium text-neutral-800 underline decoration-neon-purple/30 decoration-2 underline-offset-4">zharfan2231@gmail.com</p>
              </div>
            </CyberCard>
          </Reveal>

          <Reveal width="100%" delay={0.4}>
            <CyberCard className="p-8">
              <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-6">{trans.socials}</p>
              <div className="flex gap-4">
                {[
                  { icon: Github, link: "https://github.com/SulthanZharfan", color: "hover:bg-black hover:text-white" },
                  { icon: Linkedin, link: "https://www.linkedin.com/in/muhammadsulthanzharfan/", color: "hover:bg-[#0077b5] hover:text-white" },
                  { icon: MapPin, link: "#", color: "hover:bg-neon-ice hover:text-white" },
                ].map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.link} 
                    className={cn("p-4 rounded-xl bg-neutral-50 text-neutral-400 transition-all duration-300 border border-neutral-100", social.color)}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </CyberCard>
          </Reveal>
        </div>

        <div className="md:col-span-3">
          <Reveal width="100%" delay={0.6}>
            <CyberCard className="p-8 md:p-12 h-full relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-50 text-green-500 flex items-center justify-center mb-4">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-2xl font-black text-neutral-900 uppercase tracking-tighter">{trans.success}</h3>
                    <p className="text-neutral-500">Signal received. Connection established.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neon-purple ml-1">SYSTEM_ID</label>
                        <input 
                          required
                          name="name"
                          type="text" 
                          placeholder={trans.name}
                          className="w-full bg-neutral-100/50 border border-neutral-100 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-purple transition-colors text-sm font-mono"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neon-purple ml-1">AUTH_MAIL</label>
                        <input 
                          required
                          name="email"
                          type="email" 
                          placeholder={trans.mail}
                          className="w-full bg-neutral-100/50 border border-neutral-100 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-purple transition-colors text-sm font-mono"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-neon-purple ml-1">PROTOCOL_CONTENT</label>
                      <textarea 
                        required
                        name="message"
                        rows={4} 
                        placeholder={trans.msg}
                        className="w-full bg-neutral-100/50 border border-neutral-100 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-purple transition-colors text-sm resize-none font-mono"
                      />
                    </div>

                    <CyberButton 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full disabled:opacity-50"
                    >
                      {isSubmitting ? "TRANSMITTING..." : trans.button} <Send size={16} className="ml-2" />
                    </CyberButton>
                  </motion.form>
                )}
              </AnimatePresence>
            </CyberCard>
          </Reveal>
        </div>
      </div>
    </SectionWrapper>
  );
};
