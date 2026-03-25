"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const items = [
    "I AM PANCHO",
    "YOU ARE PANCHO",
    "WE ARE PANCHO",
    "PANCHO NEVER SLEEPS",
    "RAGE ON",
    "DEGEN MONK",
    "PANCHO ARMY",
    "LFG",
  ];

  return (
    <div className="relative py-6 overflow-hidden">
      {/* Red gradient background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-gradient-to-r from-[#ff2244] via-[#ff4422] to-[#ff6b2b]"
      />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 21px)",
        }}
      />

      {/* Top edge line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/20" />

      {/* Scrolling text — two copies for seamless loop */}
      <div className="relative flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((text, i) => (
          <span
            key={i}
            className="mx-6 sm:mx-10 text-lg sm:text-2xl md:text-3xl font-black text-black/70 uppercase tracking-wider flex items-center gap-6 sm:gap-10"
          >
            {text}
            <span className="w-2 h-2 rounded-full bg-black/30 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
