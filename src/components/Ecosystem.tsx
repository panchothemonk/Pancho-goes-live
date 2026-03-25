"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useFadeIn } from "@/hooks/useFadeIn";

const products = [
  {
    title: "pancho fun bot",
    desc: "the only pump.fun bot with a full web trading terminal. 100-point token scoring, whale tracking, live charts, auto take-profit, and a moonshots feed. all inside telegram.",
    link: "https://fun.panchoverse.com",
    image: "/images/pancho/pancho-4.webp",
    tag: "TRADING BOT",
    color: "#14F195",
    features: ["< 1s entry", "whale tracker", "auto TP", "copy trading"],
    tagline: "pancho trades. you profit.",
  },
  {
    title: "pancho degen arena",
    desc: "bull or bear. three minutes. real SOL. on-chain. no house edge. losers pay winners. 94% of the pool goes to the winning side.",
    link: "https://arena.panchoverse.com",
    image: "/images/pancho/pancho-10.webp",
    tag: "PREDICTION MARKET",
    color: "#FFB800",
    features: ["3min rounds", "on-chain", "94% to winners", "rooms live"],
    tagline: "pick a side. win the pool.",
  },
  {
    title: "pancho hits bot",
    desc: "your token needs volume. pancho hits it every 3 seconds. buys. sells. bumps to the top on pump.fun trending. you just watch.",
    link: "https://hit.panchoverse.com",
    image: "/images/pancho/pancho-12.webp",
    tag: "BUMP BOT",
    color: "#FF3DB8",
    features: ["3s bumps", "0.02 SOL/cycle", "free trial", "24/7"],
    tagline: "it bumps. you don't.",
  },
  {
    title: "arena rooms",
    desc: "launch a prediction arena for your community. any pump.fun or migrated token. 3-minute rounds. users bet bull or bear on YOUR token's price.",
    link: "https://arena.panchoverse.com",
    image: "/images/pancho/pancho-15.webp",
    tag: "COMMUNITY ARENAS",
    color: "#8B5CF6",
    features: ["any token", "0.25 SOL setup", "instant live", "your community"],
    tagline: "your token. your arena.",
  },
];

export default function Ecosystem() {
  const sectionRef = useFadeIn();

  return (
    <section id="products" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden bg-[#FFF8EC]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 fade-in-section">
          <span className="text-sm font-black tracking-[0.2em] uppercase text-[#FF3DB8] mb-4 block">
            products
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight text-[#1a1a1a]">
            cooking with{" "}
            <span className="text-[#FF3DB8]">pancho.</span>
          </h2>
          <p className="text-lg text-[#666] max-w-2xl mx-auto leading-relaxed">
            a closer look at pancho&apos;s ecosystem. real products. real infrastructure.
            not just memes — though those are pretty good too.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <a
              key={product.title}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group brutal-card p-8 cursor-pointer fade-in-section"
            >
              <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-24 h-32 sm:w-28 sm:h-36 shrink-0"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain sticker"
                    loading="lazy"
                  />
                </motion.div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-[10px] font-black tracking-[0.15em] px-3 py-1.5 rounded-full border-2"
                      style={{
                        color: product.color,
                        borderColor: product.color,
                        background: `${product.color}15`,
                      }}
                    >
                      {product.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black mb-1 text-[#1a1a1a] group-hover:text-[#FF3DB8] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs font-bold text-[#999] italic mb-3">
                    &quot;{product.tagline}&quot;
                  </p>
                  <p className="text-[#666] leading-relaxed text-sm mb-4">
                    {product.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((f) => (
                      <span
                        key={f}
                        className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#F5F0E8] border border-[#e0e0e0] text-[#666]"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div
                    className="flex items-center gap-2 text-sm font-black"
                    style={{ color: product.color }}
                  >
                    <span>explore →</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
