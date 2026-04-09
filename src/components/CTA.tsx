"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#FFF8EC]">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="mb-10">
          <div className="relative w-40 h-48 mx-auto animate-float">
            <Image
              src="/images/pancho/pancho-8.webp"
              alt="Pancho"
              fill
              className="object-contain sticker"
              loading="lazy"
            />
          </div>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-[0.95] text-[#1a1a1a]">
          the world is loud.
          <br />
          <span className="text-[#FF3DB8]">pancho says &quot;ok.&quot;</span>
        </h2>

        <p className="text-lg sm:text-xl text-[#666] max-w-2xl mx-auto mb-12 leading-relaxed">
          trading bot. prediction arena. bump bot. $TACO token.
          all live. all on solana. pancho didn&apos;t ask for this but here we are.
          sin ganas pero con profit.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://gamearena.panchoverse.com"
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-btn-pink text-lg"
          >
            enter the arena
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
        </div>
      </div>
    </section>
  );
}
