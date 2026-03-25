"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ff2244] opacity-[0.08] blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="relative w-32 h-40 mx-auto mb-8 animate-float">
            <Image
              src="/images/pancho/pancho-8.png"
              alt="Pancho"
              fill
              className="object-contain drop-shadow-[0_0_60px_rgba(255,34,68,0.5)]"
            />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
        >
          The Angry Monkey{" "}
          <span className="text-gradient">In All Of Us</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Pancho isn&apos;t just a token. He&apos;s the spirit of every degen, every
          rebel, every legend who refuses to play it safe. The Panchoverse
          awaits. Are you ready to rage?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://panchoverse.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-[#ff2244] to-[var(--accent-orange)] text-white font-bold text-lg overflow-hidden transition-transform hover:scale-105 shadow-[0_0_60px_rgba(255,34,68,0.3)]"
          >
            <span className="relative z-10">Enter the Panchoverse</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </a>
          <a
            href="https://m.youtube.com/@Panchojourney"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 rounded-full border border-white/10 text-zinc-300 font-semibold text-lg hover:border-[#ff2244]/40 hover:text-[#ff2244] transition-all"
          >
            Watch the Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}
