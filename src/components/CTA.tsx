"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#FFF8EC]">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Floating character */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.7 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <div className="relative w-40 h-48 mx-auto animate-float">
            <Image
              src="/images/pancho/pancho-8.png"
              alt="Pancho"
              fill
              className="object-contain sticker"
            />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-[0.95] text-[#1a1a1a]"
        >
          the world is loud.
          <br />
          <span className="text-[#FF3DB8]">pancho says &quot;ok.&quot;</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-lg sm:text-xl text-[#666] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          from viral memes to real-world products. a trading bot. a prediction arena.
          a bump bot. a community. and a token that pays you back 50%. the panchoverse
          isn&apos;t coming — it&apos;s already here. sin ganas pero con profit.
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
            className="brutal-btn-pink text-lg"
          >
            enter the panchoverse
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
          <a
            href="https://t.me/panchodegen"
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-btn-outline text-lg"
          >
            join the gang 💬
          </a>
        </motion.div>
      </div>
    </section>
  );
}
