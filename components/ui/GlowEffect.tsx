"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlowEffectProps {
  color?: "purple" | "blue" | "mixed";
  size?: "sm" | "md" | "lg";
  className?: string;
  animate?: boolean;
}

export const GlowEffect = ({
  color = "mixed",
  size = "md",
  className,
  animate = true,
}: GlowEffectProps) => {
  const sizeMap = {
    sm: "w-64 h-64 blur-[80px]",
    md: "w-[500px] h-[500px] blur-[120px]",
    lg: "w-[800px] h-[800px] blur-[150px]",
  };

  const colorMap = {
    purple: "bg-neon-purple/10",
    blue: "bg-neon-ice/15",
    mixed: "bg-gradient-to-r from-neon-purple/10 to-neon-ice/20",
  };

  return (
    <div
      className={cn(
        "absolute -z-10 rounded-full select-none pointer-events-none",
        sizeMap[size],
        colorMap[color],
        animate && "animate-pulse-glow",
        className
      )}
    />
  );
};
