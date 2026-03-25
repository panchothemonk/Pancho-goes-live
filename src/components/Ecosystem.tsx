"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    title: "Pancho Studio",
    desc: "Generate your own unique Pancho PFP. 183+ character variants with custom backgrounds, vibes, and export formats for every platform.",
    link: "https://panchoverse.com",
    image: "/images/pancho/pancho-4.png",
    tag: "PFP GENERATOR",
    color: "#ff2244",
    emoji: "🎨",
  },
  {
    title: "Degen Arena",
    desc: "Bull/Bear PvP prediction market on Solana. Stake SOL, predict price direction, and winners take the pool.",
    link: "https://arena.panchoverse.com",
    image: "/images/pancho/pancho-10.png",
    tag: "PREDICTION MARKET",
    color: "#ff6b2b",
    emoji: "⚔️",
  },
  {
    title: "Meme Generator",
    desc: "Create viral Pancho memes with Spanglish crypto humor. Bull, Bear, and Degen modes from Mild to Unhinged.",
    link: "https://fun.panchoverse.com",
    image: "/images/pancho/pancho-12.png",
    tag: "MEME FACTORY",
    color: "var(--accent)",
    emoji: "🤣",
  },
  {
    title: "Game Arena",
    desc: "Enter the Pancho gaming universe. Compete, earn, and prove you're the biggest degen in the arena.",
    link: "https://gamearena.panchoverse.com",
    image: "/images/pancho/pancho-1.png",
    tag: "GAMING",
    color: "var(--accent-purple)",
    emoji: "🎮",
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#ff2244] opacity-[0.02] blur-[250px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--accent)] mb-4 block">
            Ecosystem
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight">
            The <span className="text-gradient">Panchoverse</span> Empire
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            More than memes. Real products, real infrastructure, real chaos.
            Every product powers the ecosystem and fuels the mission.
          </p>
        </motion.div>

        {/* Product Cards — 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <motion.a
              key={product.title}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.12,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative p-8 rounded-3xl glass overflow-hidden cursor-pointer"
            >
              {/* Top accent bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
                className="absolute top-0 left-0 right-0 h-[2px] origin-left"
                style={{
                  background: `linear-gradient(90deg, ${product.color}, transparent)`,
                }}
              />

              {/* Hover gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(circle at 80% 80%, ${product.color}12, transparent 60%)`,
                }}
              />

              <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                {/* Character */}
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-24 h-32 sm:w-28 sm:h-36 shrink-0"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain transition-all duration-500"
                    style={{
                      filter: `drop-shadow(0 0 30px ${product.color}40)`,
                    }}
                  />
                </motion.div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-[10px] font-black tracking-[0.15em] px-3 py-1.5 rounded-full"
                      style={{ color: product.color, background: `${product.color}12` }}
                    >
                      {product.tag}
                    </span>
                    <span className="text-lg">{product.emoji}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-2 group-hover:text-white transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-sm mb-4">
                    {product.desc}
                  </p>
                  <div
                    className="flex items-center gap-2 text-sm font-bold"
                    style={{ color: product.color }}
                  >
                    <span>Explore</span>
                    <motion.svg
                      whileHover={{ x: 4 }}
                      width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </motion.svg>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
