"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const row2 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 1];

export default function ScrollingFaces() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#FF3DB8]">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#1a1a1a]" />
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1a1a1a]" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 px-6"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-3">
          i am pancho. you are pancho.
        </h2>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1a1a1a]">
          we are pancho.
        </h2>
      </motion.div>

      {/* Row 1 — scrolling left */}
      <div className="relative mb-4 overflow-hidden">
        <div className="flex animate-scroll-faces">
          {[...row1, ...row1].map((num, i) => (
            <div
              key={`r1-${i}`}
              className="shrink-0 mx-2"
            >
              <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border-[3px] border-[#1a1a1a] bg-[#FFB800] shadow-[4px_4px_0px_#1a1a1a] hover:scale-110 hover:rotate-[-3deg] transition-transform cursor-pointer">
                <Image
                  src={`/images/pancho/pancho-${num}.png`}
                  alt={`Pancho ${num}`}
                  width={176}
                  height={176}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolling right */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-faces-reverse">
          {[...row2, ...row2].map((num, i) => (
            <div
              key={`r2-${i}`}
              className="shrink-0 mx-2"
            >
              <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border-[3px] border-[#1a1a1a] bg-[#FFB800] shadow-[4px_4px_0px_#1a1a1a] hover:scale-110 hover:rotate-[3deg] transition-transform cursor-pointer">
                <Image
                  src={`/images/pancho/pancho-${num}.png`}
                  alt={`Pancho ${num}`}
                  width={176}
                  height={176}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
