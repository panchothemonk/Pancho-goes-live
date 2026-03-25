"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [phase, setPhase] = useState<"logo" | "text" | "expand" | "done">("logo");

  useEffect(() => {
    const t0 = setTimeout(() => setPhase("text"), 600);
    const t1 = setTimeout(() => setPhase("expand"), 2400);
    const t2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 3000);
    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-[#FFFDF7] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Pancho face logo */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="relative w-32 h-32 sm:w-40 sm:h-40 mb-8"
          >
            <Image
              src="/images/pancho/pancho-1.png"
              alt="Pancho"
              fill
              className="object-contain sticker"
              priority
            />
          </motion.div>

          {/* PANCHO text — letter by letter, neo-brutalist */}
          <div className="relative flex items-center justify-center mb-4">
            {"PANCHO".split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, rotate: -15 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-6xl sm:text-8xl md:text-[120px] font-black tracking-tight text-[#1a1a1a] inline-block"
                style={{
                  WebkitTextStroke: "3px #1a1a1a",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-base sm:text-lg text-[#999] font-medium tracking-wide"
          >
            sin ganas • still here
          </motion.p>

          {/* Loading bar — brutal style */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48">
            <div className="h-[4px] bg-[#e0e0e0] rounded-full overflow-hidden border border-[#1a1a1a]">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="h-full bg-[#FF3DB8] origin-left"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center text-xs text-[#999] mt-2 font-medium"
            >
              ok.
            </motion.p>
          </div>

          {/* Corner decorations — thick brutalist lines */}
          <div className="absolute top-6 left-6 w-10 h-10 border-l-[3px] border-t-[3px] border-[#1a1a1a]" />
          <div className="absolute top-6 right-6 w-10 h-10 border-r-[3px] border-t-[3px] border-[#1a1a1a]" />
          <div className="absolute bottom-6 left-6 w-10 h-10 border-l-[3px] border-b-[3px] border-[#1a1a1a]" />
          <div className="absolute bottom-6 right-6 w-10 h-10 border-r-[3px] border-b-[3px] border-[#1a1a1a]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
