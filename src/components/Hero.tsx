"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [1, 4, 8, 10, 12, 15, 19];

const stats = [
  { value: "3s", label: "bump speed", icon: "⚡" },
  { value: "94%", label: "to winners", icon: "💰" },
  { value: "24/7", label: "no breaks", icon: "🌮" },
  { value: "ok.", label: "pancho says", icon: "🌮" },
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
        {/* Text Side — no entrance animations, just visible */}
        <div className="flex-1 text-center lg:text-left">
          <div className="brutal-tag-pink mb-6 inline-flex">
            <span className="w-2 h-2 rounded-full bg-[#FF3DB8] animate-pulse-soft" />
            the degen ape in all of us.
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight text-[#1a1a1a] mb-2">
            meet
          </h1>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight text-[#FF3DB8] mb-6">
            pancho.
          </h1>

          <p className="text-lg sm:text-xl text-[#666] max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            woke up. checked chart. said &quot;ok.&quot; pancho doesn&apos;t hype.
            pancho ships. bots, arenas, bumps — all live, all on-chain.
            sin ganas pero aquí andamos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://gamearena.panchoverse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn-pink"
            >
              enter the arena
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
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-3 mt-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="text-lg">{stat.icon}</span>
                <div className="text-xl sm:text-2xl font-black text-[#1a1a1a]">{stat.value}</div>
                <div className="text-xs text-[#999] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Character — only keep continuous animations */}
        <div className="flex-1 relative flex items-center justify-center">
          <div className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full border-[3px] border-[#1a1a1a] bg-[#FFF8EC]" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[340px] h-[340px] sm:w-[470px] sm:h-[470px] rounded-full border-[2px] border-dashed border-[#e0e0e0]"
          />

          <div className="relative w-[260px] h-[360px] sm:w-[340px] sm:h-[470px] animate-float z-10">
            {heroImages.map((num, i) => (
              <Image
                key={num}
                src={`/images/pancho/pancho-${num}.webp`}
                alt="Pancho"
                fill
                className={`object-contain transition-opacity duration-700 sticker ${
                  i === currentImg ? "opacity-100" : "opacity-0"
                }`}
                priority={i === 0}
              />
            ))}
          </div>

          {/* Floating tags — continuous only */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 right-0 sm:right-4 brutal-tag-pink text-xs"
          >
            sin ganas 🌮
          </motion.div>
          <motion.div
            animate={{ y: [6, -10, 6] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-24 left-0 sm:left-2 brutal-tag text-xs"
          >
            degen approved 🌮
          </motion.div>
          <motion.div
            animate={{ y: [-5, 10, -5], x: [-3, 3, -3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -left-6 sm:-left-12 brutal-tag text-xs"
          >
            SOLANA ◎
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
