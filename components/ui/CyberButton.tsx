"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  glow?: boolean;
}

export const CyberButton = ({
  children,
  className,
  variant = "primary",
  glow = true,
  ...props
}: CyberButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative px-8 py-3 font-bold transition-all duration-300 group",
        "rounded-cyber border-2 overflow-hidden",
        variant === "primary"
          ? "bg-neon-purple text-white border-neon-purple/50"
          : "bg-transparent text-neon-purple border-neon-purple",
        glow && variant === "primary" && "shadow-neon-glow hover:shadow-neon-glow-strong",
        glow && variant === "outline" && "hover:shadow-ice-glow",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-widest text-xs">
        {children}
      </span>
      
      {/* HUD corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Hover background fill effect */}
      <motion.div 
        className="absolute inset-0 bg-white/10 -z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
      />
    </motion.button>
  );
};
