"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [1, 4, 8, 10, 12, 15, 19];

const stats = [
  { value: "3s", label: "bump speed", icon: "⚡" },
  { value: "94%", label: "to winners", icon: "💰" },
  { value: "24/7", label: "no breaks", icon: "🌮" },
  { value: "ok.", label: "pancho says", icon: "🐵" },
];

export default function Hero() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-0">
      {/* Background decoration */}
      <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-[#FF3DB8] opacity-[0.06] blur-[100px]" />
      <div className="absolute bottom-20 left-[15%] w-80 h-80 rounded-full bg-[#FFB800] opacity-[0.08] blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text Side */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="brutal-tag-pink mb-6 inline-flex"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF3DB8] animate-pulse-soft" />
            the degen monkey in all of us.
          </motion.div>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight text-[#1a1a1a]"
            >
              meet
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight text-[#FF3DB8]"
            >
              pancho.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg sm:text-xl text-[#666] max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            good days. bad days. same pancho. from viral memes to real products —
            the panchoverse is building a legacy one &quot;ok.&quot; at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="https://panchoverse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn-pink"
            >
              enter the panchoverse
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
            <a href="#about" className="brutal-btn-outline">
              who is pancho?
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="grid grid-cols-4 gap-3 mt-10"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="text-center"
              >
                <span className="text-lg">{stat.icon}</span>
                <div className="text-xl sm:text-2xl font-black text-[#1a1a1a]">{stat.value}</div>
                <div className="text-xs text-[#999] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Hero Character */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 relative flex items-center justify-center"
        >
          {/* Character background circle */}
          <div className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full border-[3px] border-[#1a1a1a] bg-[#FFF8EC]" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[340px] h-[340px] sm:w-[470px] sm:h-[470px] rounded-full border-[2px] border-dashed border-[#e0e0e0]"
          />

          {/* Character with crossfade */}
          <div className="relative w-[260px] h-[360px] sm:w-[340px] sm:h-[470px] animate-float z-10">
            {heroImages.map((num, i) => (
              <Image
                key={num}
                src={`/images/pancho/pancho-${num}.png`}
                alt="Pancho"
                fill
                className={`object-contain transition-opacity duration-700 sticker ${
                  i === currentImg ? "opacity-100" : "opacity-0"
                }`}
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
              className="absolute top-8 right-0 sm:right-4 brutal-tag-pink text-xs"
            >
              sin ganas 🌮
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
              className="absolute bottom-24 left-0 sm:left-2 brutal-tag text-xs"
            >
              degen approved 🐵
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
              className="absolute top-1/2 -left-6 sm:-left-12 brutal-tag text-xs"
            >
              SOLANA ◎
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
