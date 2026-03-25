"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [phase, setPhase] = useState<"text" | "expand" | "done">("text");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("expand"), 2200);
    const t2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 3000);
    return () => {
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
          className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center overflow-hidden"
        >
          {/* Background pulse */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 3, opacity: [0, 0.15, 0] }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            className="absolute w-[400px] h-[400px] rounded-full bg-[#ff2244]"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2.5, opacity: [0, 0.1, 0] }}
            transition={{ duration: 2.2, ease: "easeOut", delay: 0.7 }}
            className="absolute w-[300px] h-[300px] rounded-full bg-[#ff6b2b]"
          />

          {/* Horizontal lines */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute top-1/2 -translate-y-[60px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff2244]/30 to-transparent origin-center"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="absolute top-1/2 translate-y-[60px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff6b2b]/20 to-transparent origin-center"
          />

          {/* Small label above */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute top-1/2 -translate-y-[100px] text-center"
          >
            <span className="text-xs sm:text-sm tracking-[0.4em] uppercase text-[#ff2244]/60 font-medium">
              The Angriest Monkey In Crypto
            </span>
          </motion.div>

          {/* PANCHO text — letter by letter */}
          <div className="relative flex items-center justify-center">
            {"PANCHO".split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 80, rotateX: -90 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-7xl sm:text-9xl md:text-[160px] font-black tracking-tight text-white inline-block"
                style={{
                  textShadow:
                    "0 0 80px rgba(255,34,68,0.5), 0 0 160px rgba(255,34,68,0.2)",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Subtitle below */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="absolute top-1/2 translate-y-[80px] sm:translate-y-[100px]"
          >
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="w-8 h-[1px] bg-[#ff6b2b] origin-right"
              />
              <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-zinc-500 font-medium">
                Enter The Panchoverse
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="w-8 h-[1px] bg-[#ff6b2b] origin-left"
              />
            </div>
          </motion.div>

          {/* Corner accents */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.5 }}
            className="absolute top-8 left-8 w-12 h-12 border-l border-t border-[#ff2244]/30"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.6 }}
            className="absolute top-8 right-8 w-12 h-12 border-r border-t border-[#ff2244]/30"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-[#ff2244]/30"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-[#ff2244]/30"
          />

          {/* Loading bar */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="h-[2px] bg-gradient-to-r from-[#ff2244] to-[#ff6b2b] origin-left rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
