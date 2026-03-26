"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}

export const FuturisticButton = ({ children, className, variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "relative px-6 py-2 font-medium transition-all duration-300 rounded-md group overflow-hidden",
        variant === 'primary' 
          ? "bg-neon-purple text-white shadow-neon-glow hover:shadow-neon-glow-strong hover:bg-neon-purple-hover"
          : "border-2 border-neon-purple text-neon-purple hover:bg-neon-purple/10",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 transition-transform duration-500 origin-left scale-x-0 bg-white/20 group-hover:scale-x-100" />
      )}
    </button>
  );
};
