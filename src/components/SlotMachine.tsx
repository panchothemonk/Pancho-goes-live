"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useFadeIn } from "@/hooks/useFadeIn";

const PANCHO_COUNT = 23;
const allPanchos = Array.from({ length: PANCHO_COUNT }, (_, i) => i + 1);

function getRandomPancho() {
  return allPanchos[Math.floor(Math.random() * allPanchos.length)];
}

// Confetti particle component
function Confetti({ count }: { count: number }) {
  const colors = ["#FF3DB8", "#FFB800", "#14F195", "#8B5CF6", "#FF4444", "#1a1a1a"];
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: colors[Math.floor(Math.random() * colors.length)],
    delay: Math.random() * 0.5,
    size: 4 + Math.random() * 8,
    rotation: Math.random() * 360,
    duration: 1.5 + Math.random() * 2,
    shape: Math.random() > 0.5 ? "circle" : "rect",
    drift: (Math.random() - 0.5) * 100,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            x: `${p.x}vw`,
            y: -20,
            rotate: 0,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            y: "110vh",
            x: `calc(${p.x}vw + ${p.drift}px)`,
            rotate: p.rotation + 720,
            opacity: [1, 1, 0],
            scale: [1, 1.2, 0.5],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeIn",
          }}
          style={{
            position: "absolute",
            width: p.size,
            height: p.shape === "rect" ? p.size * 1.5 : p.size,
            backgroundColor: p.color,
            borderRadius: p.shape === "circle" ? "50%" : "2px",
          }}
        />
      ))}
    </div>
  );
}

// Single reel
function Reel({
  target,
  spinning,
  index,
  onStop,
}: {
  target: number;
  spinning: boolean;
  index: number;
  onStop: () => void;
}) {
  const [displayImages, setDisplayImages] = useState<number[]>([target]);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    if (spinning) {
      intervalRef.current = setInterval(() => {
        setDisplayImages([getRandomPancho()]);
      }, 80);

      timeoutRef.current = setTimeout(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayImages([target]);
        onStop();
      }, 1200 + index * 600);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [spinning, target, index, onStop]);

  return (
    <div className="relative w-24 h-28 sm:w-32 sm:h-36 md:w-36 md:h-40 rounded-2xl overflow-hidden bg-[#FFF8EC] border-[3px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] flex items-center justify-center">
      {/* Scan line effect when spinning */}
      {spinning && (
        <motion.div
          animate={{ y: [-40, 160, -40] }}
          transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-8 bg-gradient-to-b from-transparent via-[#FF3DB8]/15 to-transparent z-10"
        />
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={displayImages[0]}
          initial={{ y: -60, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 60, opacity: 0, scale: 0.8 }}
          transition={{ duration: spinning ? 0.06 : 0.4, ease: spinning ? "linear" : [0.16, 1, 0.3, 1] }}
          className="relative w-20 h-24 sm:w-26 sm:h-30 md:w-28 md:h-32"
        >
          <Image
            src={`/images/pancho/pancho-${displayImages[0]}.webp`}
            alt="Pancho"
            fill
            className="object-contain"
            style={{
              filter: spinning ? "blur(1px)" : "none",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Reel number */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[8px] text-[#999] font-black">
        REEL {index + 1}
      </div>
    </div>
  );
}

export default function SlotMachine() {
  const [spinning, setSpinning] = useState(false);
  const [results, setResults] = useState([1, 10, 8]);
  const [stoppedReels, setStoppedReels] = useState(0);
  const [isMatch, setIsMatch] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [wins, setWins] = useState(0);
  const [spins, setSpins] = useState(0);

  const spin = useCallback(() => {
    if (spinning) return;

    const r1 = getRandomPancho();
    const r2 = getRandomPancho();
    const isWin = Math.random() < 0.2;
    const r3 = isWin ? r1 : getRandomPancho();
    const finalR2 = isWin ? r1 : r2;

    setResults([r1, finalR2, r3]);
    setSpinning(true);
    setStoppedReels(0);
    setIsMatch(false);
    setShowConfetti(false);
    setSpins((s) => s + 1);
  }, [spinning]);

  const handleReelStop = useCallback(() => {
    setStoppedReels((prev) => {
      const next = prev + 1;
      if (next >= 3) {
        setTimeout(() => {
          setSpinning(false);
          const matched = results[0] === results[1] && results[1] === results[2];
          if (matched) {
            setIsMatch(true);
            setShowConfetti(true);
            setWins((w) => w + 1);
            setTimeout(() => setShowConfetti(false), 4000);
          }
        }, 200);
      }
      return next;
    });
  }, [results]);

  const sectionRef = useFadeIn();

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      {showConfetti && <Confetti count={150} />}

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 fade-in-section">
          <span className="text-sm font-black tracking-[0.2em] uppercase text-[#FFB800] mb-4 block">
            try your luck
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 leading-tight text-[#1a1a1a]">
            pancho <span className="text-[#FF3DB8]">slots</span> 🎰
          </h2>
          <p className="text-lg text-[#666] max-w-xl mx-auto">
            spin the reels. match three panchos. go absolutely wild. ok.
          </p>
        </div>

        {/* Slot Machine */}
        <div className="relative fade-in-section">
          {/* Machine frame — brutal style */}
          <div className="relative p-8 sm:p-10 rounded-[24px] bg-white border-[3px] border-[#1a1a1a] shadow-[8px_8px_0px_#1a1a1a]">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#FF3DB8] border-2 border-[#1a1a1a]" />
                <span className="text-xs font-black text-[#1a1a1a] tracking-wider uppercase">
                  pancho slots machine
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs font-black text-[#999]">
                <span>SPINS: <span className="text-[#FF3DB8]">{spins}</span></span>
                <span>WINS: <span className="text-[#14F195]">{wins}</span></span>
              </div>
            </div>

            {/* Reels */}
            <div className="flex items-center justify-center gap-3 sm:gap-5 mb-8">
              {results.map((target, i) => (
                <Reel
                  key={`reel-${i}-${spins}`}
                  target={target}
                  spinning={spinning}
                  index={i}
                  onStop={handleReelStop}
                />
              ))}
            </div>

            {/* Win banner */}
            <AnimatePresence>
              {isMatch && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="absolute inset-x-8 top-1/2 -translate-y-1/2 py-6 rounded-2xl bg-[#FF3DB8] border-[3px] border-[#1a1a1a] text-center z-20 shadow-[6px_6px_0px_#1a1a1a]"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5, repeat: 3 }}
                    className="text-3xl sm:text-5xl font-black text-white"
                  >
                    🌮 TRIPLE PANCHO! 🌮
                  </motion.div>
                  <p className="text-white/80 text-sm mt-2 font-bold">
                    degen approved. ok.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Spin button */}
            <div className="flex justify-center">
              <motion.button
                onClick={spin}
                disabled={spinning}
                whileHover={{ scale: spinning ? 1 : 1.05 }}
                whileTap={{ scale: spinning ? 1 : 0.95 }}
                className={`brutal-btn-pink text-xl !px-12 !py-5 ${
                  spinning ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {spinning ? (
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    SPINNING...
                  </motion.span>
                ) : (
                  "🎰 SPIN THE REELS"
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
