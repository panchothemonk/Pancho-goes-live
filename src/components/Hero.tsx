"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [1, 4, 8, 10, 12, 15, 19];

export default function Hero() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[15%] w-[600px] h-[600px] rounded-full bg-[#ff2244] blur-[180px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.04, 0.09, 0.04],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[15%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#ff6b2b] blur-[160px]"
        />
        <motion.div
          animate={{ opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[var(--accent)] blur-[250px]"
        />
      </div>

      {/* Horizontal accent lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[30%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff2244]/10 to-transparent origin-center"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[30%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff6b2b]/8 to-transparent origin-center"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text Side */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#ff2244]/20 bg-[#ff2244]/5 mb-8"
          >
            <motion.span
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-[#ff2244]"
            />
            <span className="text-sm font-semibold text-[#ff2244] tracking-wide uppercase">
              The Panchoverse Is Live
            </span>
          </motion.div>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tighter"
            >
              The Angriest
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-gradient"
            >
              Monkey
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-zinc-600"
            >
              In Crypto
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl text-zinc-400 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            From viral memes to real-world chaos, Pancho is building a legacy
            that bridges internet culture and unstoppable entertainment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="https://panchoverse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#ff2244] to-[#ff6b2b] text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(255,34,68,0.4)]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Enter the Panchoverse
                <motion.svg
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>
            <a
              href="#about"
              className="px-8 py-4 rounded-full border border-white/10 text-zinc-300 font-semibold text-lg hover:border-[#ff2244]/40 hover:text-white hover:bg-white/[0.02] transition-all duration-300"
            >
              Who is Pancho?
            </a>
          </motion.div>
        </div>

        {/* Hero Mascot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 relative flex items-center justify-center"
        >
          {/* Rotating rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[350px] h-[350px] sm:w-[480px] sm:h-[480px] rounded-full border border-[#ff2244]/10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[290px] h-[290px] sm:w-[400px] sm:h-[400px] rounded-full border border-[#ff6b2b]/8"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] rounded-full border border-white/[0.03]"
          />

          {/* Pulsing glow behind character */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-br from-[#ff2244]/30 to-[#ff6b2b]/20 blur-[100px]"
          />

          {/* Orbiting dots */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute w-[350px] h-[350px] sm:w-[480px] sm:h-[480px]"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#ff2244] shadow-[0_0_10px_#ff2244]" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute w-[290px] h-[290px] sm:w-[400px] sm:h-[400px]"
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#ff6b2b] shadow-[0_0_8px_#ff6b2b]" />
          </motion.div>

          {/* Character with crossfade */}
          <div className="relative w-[280px] h-[380px] sm:w-[360px] sm:h-[500px] animate-float">
            {heroImages.map((num, i) => (
              <Image
                key={num}
                src={`/images/pancho/pancho-${num}.png`}
                alt="Pancho"
                fill
                className={`object-contain transition-all duration-1000 ${
                  i === currentImg
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{
                  filter: i === currentImg
                    ? "drop-shadow(0 0 80px rgba(255,34,68,0.5)) drop-shadow(0 0 30px rgba(255,107,43,0.3))"
                    : "none",
                }}
                priority={i === 0}
              />
            ))}
          </div>

          {/* Floating tags */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 right-0 sm:right-4 px-4 py-2 rounded-full glass-static text-sm font-bold text-[#ff2244] shadow-[0_0_20px_rgba(255,34,68,0.1)]"
            >
              ANGRY AF 🔥
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
          >
            <motion.div
              animate={{ y: [6, -10, 6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 left-0 sm:left-2 px-4 py-2 rounded-full glass-static text-sm font-bold text-[#ff6b2b] shadow-[0_0_20px_rgba(255,107,43,0.1)]"
            >
              DEGEN MONK 🐵
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            <motion.div
              animate={{ y: [-5, 10, -5], x: [-3, 3, -3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -left-6 sm:-left-12 px-4 py-2 rounded-full glass-static text-sm font-bold text-[var(--accent)] shadow-[0_0_20px_rgba(0,255,136,0.1)]"
            >
              SOLANA ◎
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-medium">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border border-zinc-700/50 flex items-start justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1], height: [6, 10, 6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 rounded-full bg-[#ff2244]"
          />
        </motion.div>
      </motion.div>

      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
