"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const communityLinks = [
  {
    title: "join the headquarters",
    desc: "the main pancho telegram. memes, alpha, and comfortable silence.",
    href: "https://t.me/panchodegen",
    icon: "💬",
    color: "#14F195",
    cta: "join telegram",
  },
  {
    title: "stay updated",
    desc: "follow pancho on X. mostly retweets and the occasional 'ok.'",
    href: "https://x.com/Panchomonks",
    icon: "🐦",
    color: "#FF3DB8",
    cta: "follow on X",
  },
  {
    title: "watch the journey",
    desc: "the pancho youtube. behind the scenes, dev logs, and vibes.",
    href: "https://youtube.com/@Panchojourney",
    icon: "📺",
    color: "#FF4444",
    cta: "subscribe",
  },
];

const panchoFaces = [1, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

export default function Community() {
  return (
    <section id="community" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-black tracking-[0.2em] uppercase text-[#FFB800] mb-4 block">
            the gang
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight text-[#1a1a1a]">
            more than a community.
            <br />
            <span className="text-[#FF3DB8]">a movement.</span>
          </h2>
          <p className="text-lg text-[#666] max-w-2xl mx-auto leading-relaxed">
            a collective driven by creativity, passion, and the raw chaotic
            energy that makes pancho who he is. sin ganas but always showing up.
          </p>
        </div>

        {/* Community Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {communityLinks.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group brutal-card p-8 cursor-pointer"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-black mb-2 text-[#1a1a1a] group-hover:text-[#FF3DB8] transition-colors">
                {card.title}
              </h3>
              <p className="text-[#666] leading-relaxed text-sm mb-6">{card.desc}</p>
              <span
                className="text-sm font-black flex items-center gap-2"
                style={{ color: card.color }}
              >
                {card.cta} →
              </span>
            </a>
          ))}
        </div>

        {/* Pancho face strip */}
        <div className="fade-in-section">
          <div className="flex justify-center items-center gap-2 sm:gap-4 flex-wrap">
            {panchoFaces.map((num, i) => (
              <motion.div
                key={num}
                whileHover={{
                  scale: 1.3,
                  zIndex: 10,
                  rotate: i % 2 === 0 ? 10 : -10,
                }}
                className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full overflow-hidden border-[3px] border-[#1a1a1a] hover:border-[#FF3DB8] transition-all cursor-pointer relative shadow-[3px_3px_0px_#1a1a1a]"
              >
                <Image
                  src={`/images/pancho/pancho-${num}.webp`}
                  alt={`Pancho ${num}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-[#999] mt-6 font-bold">
            i am pancho. you are pancho. <span className="text-[#FF3DB8]">we are pancho.</span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
