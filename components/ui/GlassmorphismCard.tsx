import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassmorphismCard = ({ children, className }: CardProps) => {
  return (
    <div className={cn(
      "glass p-6 rounded-xl transition-all duration-300 hover:border-neon-ice/50 hover:shadow-ice-glow group",
      className
    )}>
      {children}
    </div>
  );
};
