"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  title?: string;
  className?: string;
  dark?: boolean;
}

export const SectionWrapper = ({
  children,
  id,
  title,
  className,
  dark = false,
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 md:py-32 px-6 overflow-hidden",
        dark ? "bg-neutral-900 text-white" : "bg-transparent",
        className
      )}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {title && (
          <div className="mb-16 md:mb-24 flex flex-col items-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-neon-purple/40" />
              <span className="text-xs font-bold tracking-[0.3em] text-neon-purple uppercase">
                {id || "Section"}
              </span>
              <div className="h-[1px] w-12 bg-neon-purple/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
              {title}
            </h2>
            <div className="mt-4 hud-line max-w-[200px]" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
