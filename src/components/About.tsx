"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useFadeIn } from "@/hooks/useFadeIn";

const galleryImages = [2, 3, 5, 6, 7, 9, 11, 13, 14];

const traits = [
  { emoji: "😐", text: "underreaction" },
  { emoji: "🤫", text: "awkward silence" },
  { emoji: "🌮", text: "tiny wins" },
  { emoji: "😴", text: "sin ganas" },
  { emoji: "🚀", text: "a la luna" },
  { emoji: "🌮", text: "still vibing" },
];

export default function About() {
  const sectionRef = useFadeIn();

  return (
    <section id="about" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <div className="fade-in-section relative">
            <div className="grid grid-cols-3 gap-3">
              {galleryImages.map((num, i) => (
                <motion.div
                  key={num}
                  whileHover={{ scale: 1.08, rotate: i % 2 === 0 ? 2 : -2, zIndex: 10 }}
                  className="aspect-square rounded-2xl overflow-hidden border-[3px] border-[#1a1a1a] bg-[#FFF8EC] group cursor-pointer relative shadow-[4px_4px_0px_#1a1a1a] hover:shadow-[6px_6px_0px_#1a1a1a] transition-shadow"
                >
                  <Image
                    src={`/images/pancho/pancho-${num}.webp`}
                    alt={`Pancho variant ${num}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 px-5 py-3 rounded-2xl bg-[#FF3DB8] text-white font-black text-sm border-[3px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a]">
              23+ VARIANTS 🌮
            </div>
          </div>

          {/* Content */}
          <div className="fade-in-section">
            <span className="text-sm font-black tracking-[0.2em] uppercase text-[#FF3DB8] mb-4 block">
              who is pancho?
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-[1.05] text-[#1a1a1a]">
              the degen ape{" "}
              <span className="text-[#FF3DB8]">in all of us.</span>
            </h2>

            <div className="space-y-4 mb-10">
              <p className="text-lg text-[#666] leading-relaxed">
                pancho doesn&apos;t yell. pancho doesn&apos;t hype. pancho wakes up tired,
                drinks his coffee, checks the charts, and says &quot;ok.&quot; that&apos;s it.
                that&apos;s the whole personality.
              </p>
              <p className="text-lg text-[#666] leading-relaxed">
                from viral memes to real-world products — the panchoverse is building
                a legacy that bridges internet culture and tokenized entertainment.
                a full trading bot. a prediction arena. a bump bot. and a community
                that says &quot;sin ganas&quot; but shows up every day anyway.
              </p>
              <p className="text-lg text-[#666] leading-relaxed font-bold italic">
                &quot;good days. bad days. same pancho.&quot;
              </p>
            </div>

            {/* Trait tags */}
            <div className="flex flex-wrap gap-2">
              {traits.map((trait) => (
                <motion.span
                  key={trait.text}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className="brutal-tag cursor-default"
                >
                  {trait.emoji} {trait.text}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Catchphrase */}
        <div className="mt-20 text-center fade-in-section">
          <p className="text-2xl sm:text-3xl font-black text-[#1a1a1a]">
            i am pancho. you are pancho.{" "}
            <span className="text-[#FF3DB8]">we are pancho.</span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
