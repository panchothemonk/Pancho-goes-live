"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#ff2244] blur-[180px]"
        />
      </div>

      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Floating character */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.7 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <div className="relative w-36 h-44 mx-auto animate-float">
            <Image
              src="/images/pancho/pancho-8.png"
              alt="Pancho"
              fill
              className="object-contain"
              style={{
                filter:
                  "drop-shadow(0 0 60px rgba(255,34,68,0.5)) drop-shadow(0 0 120px rgba(255,34,68,0.2))",
              }}
            />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl lg:text-8xl font-black mb-6 leading-[0.95]"
        >
          The Angry Monkey
          <br />
          <span className="text-gradient">In All Of Us</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Pancho isn&apos;t just a token. He&apos;s the spirit of every degen, every
          rebel, every legend who refuses to play it safe. The Panchoverse
          awaits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://panchoverse.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-[#ff2244] to-[#ff6b2b] text-white font-black text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_80px_rgba(255,34,68,0.4)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Enter the Panchoverse
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </a>
          <a
            href="https://m.youtube.com/@Panchojourney"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 rounded-full border border-white/10 text-zinc-300 font-bold text-lg hover:border-[#ff2244]/40 hover:text-white hover:bg-white/[0.02] transition-all duration-300"
          >
            Watch the Journey 📺
          </a>
        </motion.div>
      </div>
    </section>
  );
}
