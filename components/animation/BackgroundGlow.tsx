"use client";

import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Snowflake } from "lucide-react";

export const BackgroundGlow = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Create a memoized array of particles to avoid re-renders
  const particles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      duration: 15 + Math.random() * 25,
      delay: Math.random() * 25,
      size: 8 + Math.random() * 24,
      opacity: 0.15 + Math.random() * 0.35,
    }));
  }, []);

  if (!mounted) return <div className="fixed inset-0 -z-20 bg-background" />;

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-background">
      {/* Subtle Static Gradients (Lightweight) */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-neon-purple/5 blur-[100px] rounded-full opacity-50" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-neon-ice/10 blur-[100px] rounded-full opacity-50" />
      
      {/* Falling Ice Rain */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -50, x: `${p.x}vw`, opacity: 0 }}
          animate={{ 
            y: "110vh",
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          className="absolute text-neon-ice/40"
          style={{ width: p.size, height: p.size }}
        >
          <Snowflake size={p.size} strokeWidth={1} />
        </motion.div>
      ))}

      {/* Grid Pattern mask (Optimized) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]" />
    </div>
  );
};
