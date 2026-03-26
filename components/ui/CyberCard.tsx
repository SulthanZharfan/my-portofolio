"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const CyberCard = ({ children, className, glow = true }: CyberCardProps) => {
  return (
    <motion.div
      whileHover={{ 
         scale: 1.03,
         boxShadow: "0 0 30px rgba(101, 147, 245, 0.4)"
      }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "glass-ice p-8 rounded-cyber cyber-border group transition-all duration-500",
        "hover:bg-white/10",
        className
      )}
    >
      {/* HUD scanning line effect */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-neon-ice/20 -translate-y-full group-hover:animate-[scan_2s_linear_infinite] opacity-0 group-hover:opacity-100" />
      
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-neon-purple/30 rounded-tl-sm" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-neon-ice/30 rounded-br-sm" />
    </motion.div>
  );
};
