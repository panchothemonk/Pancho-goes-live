"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [1, 4, 8, 12, 15, 19];

export default function Hero() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#ff2244] opacity-[0.06] blur-[150px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--accent-orange)] opacity-[0.05] blur-[150px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--accent)] opacity-[0.02] blur-[200px]" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="text-sm font-medium text-[var(--accent)]">
              THE PANCHOVERSE IS LIVE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
          >
            <span className="block">The Angriest</span>
            <span className="block text-gradient">Monkey</span>
            <span className="block text-zinc-500">In Crypto</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-zinc-400 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            From viral memes to real-world chaos, Pancho is building a legacy
            that bridges internet culture and unstoppable entertainment.
            The degen monkey in all of us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="https://panchoverse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#ff2244] to-[var(--accent-orange)] text-white font-bold text-lg overflow-hidden transition-transform hover:scale-105 shadow-[0_0_40px_rgba(255,34,68,0.3)]"
            >
              <span className="relative z-10">Enter the Panchoverse</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>
            <a
              href="#about"
              className="px-8 py-4 rounded-full border border-white/10 text-zinc-300 font-semibold text-lg hover:border-[var(--accent-orange)]/40 hover:text-[var(--accent-orange)] transition-all"
            >
              Who is Pancho?
            </a>
          </motion.div>
        </div>

        {/* Hero Mascot with image rotation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex-1 relative flex items-center justify-center"
        >
          {/* Rotating rings */}
          <div className="absolute w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] rounded-full border border-[#ff2244]/10 animate-spin-slow" />
          <div
            className="absolute w-[310px] h-[310px] sm:w-[420px] sm:h-[420px] rounded-full border border-[var(--accent-orange)]/10 animate-spin-slow"
            style={{ animationDirection: "reverse", animationDuration: "25s" }}
          />
          <div
            className="absolute w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] rounded-full border border-[var(--accent)]/5 animate-spin-slow"
            style={{ animationDuration: "40s" }}
          />

          {/* Red glow */}
          <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-br from-[#ff2244]/25 to-[var(--accent-orange)]/15 blur-[80px]" />

          {/* Character */}
          <div className="relative w-[300px] h-[400px] sm:w-[380px] sm:h-[520px] animate-float">
            {heroImages.map((num, i) => (
              <Image
                key={num}
                src={`/images/pancho/pancho-${num}.png`}
                alt="Pancho"
                fill
                className={`object-contain drop-shadow-[0_0_80px_rgba(255,34,68,0.4)] transition-opacity duration-1000 ${
                  i === currentImg ? "opacity-100" : "opacity-0"
                }`}
                priority={i === 0}
              />
            ))}
          </div>

          {/* Floating tags */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-0 sm:right-5 px-4 py-2 rounded-full glass text-sm font-semibold text-[#ff2244]"
          >
            ANGRY AF
          </motion.div>
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-16 left-0 sm:left-5 px-4 py-2 rounded-full glass text-sm font-semibold text-[var(--accent-orange)]"
          >
            DEGEN MONK
          </motion.div>
          <motion.div
            animate={{ y: [-3, 7, -3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -left-4 sm:-left-8 px-4 py-2 rounded-full glass text-sm font-semibold text-[var(--accent)]"
          >
            SOLANA
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-zinc-600 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-zinc-700 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-[#ff2244]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
