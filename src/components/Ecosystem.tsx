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
  },
  {
    title: "Degen Arena",
    desc: "Bull/Bear PvP prediction market on Solana. Stake SOL, predict price direction, and winners take the pool. Real-time, on-chain settlement.",
    link: "https://arena.panchoverse.com",
    image: "/images/pancho/pancho-8.png",
    tag: "PREDICTION MARKET",
    color: "var(--accent-orange)",
  },
  {
    title: "Meme Generator",
    desc: "Create viral Pancho memes with Spanglish crypto humor. Bull, Bear, and Degen modes with adjustable spice levels from Mild to Unhinged.",
    link: "https://fun.panchoverse.com",
    image: "/images/pancho/pancho-12.png",
    tag: "MEME FACTORY",
    color: "var(--accent)",
  },
  {
    title: "Game Arena",
    desc: "Enter the Pancho gaming universe. Compete, earn, and prove you're the biggest degen in the arena.",
    link: "https://gamearena.panchoverse.com",
    image: "/images/pancho/pancho-1.png",
    tag: "GAMING",
    color: "var(--accent-purple)",
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#ff2244] opacity-[0.02] blur-[200px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-[var(--accent)] mb-4 block">
            Ecosystem
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            The <span className="text-gradient">Panchoverse</span> Empire
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            More than memes. Real products, real infrastructure, real chaos.
            Every product powers the Pancho ecosystem and fuels the mission.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <motion.a
              key={product.title}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-3xl glass overflow-hidden cursor-pointer"
            >
              {/* Hover gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(circle at 80% 80%, ${product.color}12, transparent 60%)`,
                }}
              />

              <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                {/* Character */}
                <div className="relative w-24 h-32 sm:w-28 sm:h-36 shrink-0">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain drop-shadow-[0_0_30px_rgba(255,34,68,0.3)] group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1">
                  <span
                    className="text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-4 inline-block"
                    style={{ color: product.color, background: `${product.color}15` }}
                  >
                    {product.tag}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {product.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold" style={{ color: product.color }}>
                    <span>Explore</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
