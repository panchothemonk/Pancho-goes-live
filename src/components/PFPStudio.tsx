"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const PANCHO_COUNT = 23;
const allPanchos = Array.from({ length: PANCHO_COUNT }, (_, i) => i + 1);

const moods = [
  { name: "calm", emoji: "😐", label: "sin ganas" },
  { name: "hyped", emoji: "🔥", label: "a la luna" },
  { name: "reckless", emoji: "💀", label: "full degen" },
  { name: "focused", emoji: "🧠", label: "segun tu" },
  { name: "victorious", emoji: "🏆", label: "we move" },
  { name: "cursed", emoji: "🌮", label: "ok." },
];

const bgColors = [
  { name: "pink", value: "#FF3DB8" },
  { name: "gold", value: "#FFB800" },
  { name: "green", value: "#14F195" },
  { name: "purple", value: "#8B5CF6" },
  { name: "cream", value: "#FFF8EC" },
  { name: "black", value: "#1a1a1a" },
];

const sparkles = [
  { x: "15%", y: "10%", delay: 0, size: 20 },
  { x: "85%", y: "15%", delay: 0.3, size: 16 },
  { x: "10%", y: "80%", delay: 0.6, size: 18 },
  { x: "90%", y: "75%", delay: 0.9, size: 14 },
  { x: "50%", y: "5%", delay: 0.2, size: 22 },
  { x: "20%", y: "50%", delay: 0.5, size: 12 },
  { x: "80%", y: "50%", delay: 0.8, size: 16 },
];

export default function PFPStudio() {
  const [selectedPancho, setSelectedPancho] = useState(1);
  const [selectedMood, setSelectedMood] = useState(0);
  const [selectedBg, setSelectedBg] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generate = useCallback(() => {
    setIsGenerating(true);
    setIsGenerated(false);
    setShowSparkles(false);

    // Simulate generation with rapid cycling
    let count = 0;
    const cycleInterval = setInterval(() => {
      setSelectedPancho(allPanchos[Math.floor(Math.random() * allPanchos.length)]);
      count++;
      if (count > 15) {
        clearInterval(cycleInterval);
        const finalPancho = allPanchos[Math.floor(Math.random() * allPanchos.length)];
        setSelectedPancho(finalPancho);
        setIsGenerating(false);
        setIsGenerated(true);
        setShowSparkles(true);
        setTimeout(() => setShowSparkles(false), 2000);
      }
    }, 100);
  }, []);

  const downloadPFP = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 512;
    canvas.height = 512;

    // Draw background
    ctx.fillStyle = bgColors[selectedBg].value;
    ctx.fillRect(0, 0, 512, 512);

    // Draw Pancho image
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const size = 420;
      const x = (512 - size) / 2;
      const y = (512 - size) / 2 + 20;
      ctx.drawImage(img, x, y, size, size);

      // Draw mood text
      ctx.font = "bold 24px Inter, sans-serif";
      ctx.fillStyle = bgColors[selectedBg].value === "#1a1a1a" ? "#fff" : "#1a1a1a";
      ctx.textAlign = "center";
      ctx.fillText(moods[selectedMood].label, 256, 40);

      // Download
      const link = document.createElement("a");
      link.download = `pancho-pfp-${selectedPancho}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
    img.src = `/images/pancho/pancho-${selectedPancho}.png`;
  }, [selectedPancho, selectedMood, selectedBg]);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#FFF8EC]">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#1a1a1a]" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-sm font-black tracking-[0.2em] uppercase text-[#8B5CF6] mb-4 block">
            pancho studio
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 leading-tight text-[#1a1a1a]">
            make your <span className="text-[#FF3DB8]">pancho.</span>
          </h2>
          <p className="text-lg text-[#666] max-w-xl mx-auto">
            pick a pancho. pick a mood. pick a vibe. generate your pfp.
            become pancho. ok.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Preview — Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* PFP Preview Card */}
            <div
              className="relative aspect-square max-w-[420px] mx-auto rounded-3xl border-[3px] border-[#1a1a1a] shadow-[8px_8px_0px_#1a1a1a] overflow-hidden transition-colors duration-500"
              style={{ background: bgColors[selectedBg].value }}
            >
              {/* Sparkle effects */}
              <AnimatePresence>
                {showSparkles && sparkles.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: 0 }}
                    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], rotate: [0, 180, 360] }}
                    transition={{ duration: 1, delay: s.delay }}
                    className="absolute z-20 pointer-events-none"
                    style={{ left: s.x, top: s.y }}
                  >
                    <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="#FFB800">
                      <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41Z" />
                    </svg>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Pancho image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPancho}
                  initial={isGenerating ? { opacity: 0, scale: 0.8, rotate: -10 } : { opacity: 0 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={isGenerating ? { opacity: 0, scale: 0.8, rotate: 10 } : { opacity: 0 }}
                  transition={{ duration: isGenerating ? 0.08 : 0.4 }}
                  className="relative w-full h-full flex items-center justify-center p-8"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={`/images/pancho/pancho-${selectedPancho}.png`}
                      alt="Pancho PFP"
                      fill
                      className="object-contain"
                      style={{
                        filter: isGenerating ? "blur(2px)" : "none",
                      }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Mood label overlay */}
              <div className="absolute top-4 left-4">
                <span className="brutal-tag text-xs">
                  {moods[selectedMood].emoji} {moods[selectedMood].label}
                </span>
              </div>

              {/* Generated badge */}
              <AnimatePresence>
                {isGenerated && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-4 right-4"
                  >
                    <span className="brutal-tag-pink text-xs font-black">
                      generated ✨
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hidden canvas for export */}
            <canvas ref={canvasRef} className="hidden" />
          </motion.div>

          {/* Controls — Right side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Pancho selector */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider text-[#1a1a1a] mb-3">
                pick your pancho
              </h3>
              <div className="grid grid-cols-6 sm:grid-cols-8 gap-2">
                {allPanchos.map((num) => (
                  <motion.button
                    key={num}
                    onClick={() => { setSelectedPancho(num); setIsGenerated(false); }}
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`aspect-square rounded-xl overflow-hidden border-[2px] transition-all cursor-pointer ${
                      selectedPancho === num
                        ? "border-[#FF3DB8] shadow-[3px_3px_0px_#FF3DB8] scale-105"
                        : "border-[#e0e0e0] hover:border-[#1a1a1a]"
                    }`}
                  >
                    <Image
                      src={`/images/pancho/pancho-${num}.png`}
                      alt={`Pancho ${num}`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mood selector */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider text-[#1a1a1a] mb-3">
                mood
              </h3>
              <div className="flex flex-wrap gap-2">
                {moods.map((mood, i) => (
                  <motion.button
                    key={mood.name}
                    onClick={() => { setSelectedMood(i); setIsGenerated(false); }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`brutal-tag cursor-pointer transition-all ${
                      selectedMood === i
                        ? "!bg-[#FF3DB8] !text-white !border-[#1a1a1a]"
                        : ""
                    }`}
                  >
                    {mood.emoji} {mood.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Background color selector */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider text-[#1a1a1a] mb-3">
                background
              </h3>
              <div className="flex gap-3">
                {bgColors.map((bg, i) => (
                  <motion.button
                    key={bg.name}
                    onClick={() => { setSelectedBg(i); setIsGenerated(false); }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full border-[3px] cursor-pointer transition-all ${
                      selectedBg === i
                        ? "border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a] scale-110"
                        : "border-[#e0e0e0]"
                    }`}
                    style={{ background: bg.value }}
                  />
                ))}
              </div>
            </div>

            {/* Generate + Download buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <motion.button
                onClick={generate}
                disabled={isGenerating}
                whileHover={{ scale: isGenerating ? 1 : 1.03 }}
                whileTap={{ scale: isGenerating ? 1 : 0.97 }}
                className={`brutal-btn-pink flex-1 justify-center text-lg ${isGenerating ? "opacity-60" : ""}`}
              >
                {isGenerating ? (
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    generating...
                  </motion.span>
                ) : (
                  <>✨ generate pancho</>
                )}
              </motion.button>

              {isGenerated && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={downloadPFP}
                  className="brutal-btn flex-1 justify-center text-lg"
                >
                  📥 download pfp
                </motion.button>
              )}
            </div>

            <p className="text-xs text-[#999] font-medium text-center">
              roll until it hits. 🌮
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
