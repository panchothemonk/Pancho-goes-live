"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    title: "Pancho's Gang",
    desc: "Join thousands of degens who live and breathe the Pancho lifestyle. We move as one, rage as one.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: "#ff2244",
    stat: "60K+",
    statLabel: "Members",
  },
  {
    title: "Multi-Chain Rage",
    desc: "Pancho's territory keeps expanding. Available across multiple chains for faster access and wider reach.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    color: "#ff6b2b",
    stat: "2",
    statLabel: "Chains",
  },
  {
    title: "The Inner Circle",
    desc: "Exclusive access for verified holders. Token-gated channels where the real ones connect and build.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    color: "var(--accent)",
    stat: "VIP",
    statLabel: "Access",
  },
];

export default function Community() {
  return (
    <section id="community" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#ff6b2b] opacity-[0.03] blur-[200px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#ff6b2b] mb-4 block">
            The Gang
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight">
            More Than A Community.
            <br />
            <span className="text-gradient">A Movement.</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A collective driven by creativity, passion, and the raw chaotic
            energy that makes Pancho who he is.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-3xl glass relative overflow-hidden"
            >
              {/* Top accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                className="absolute top-0 left-0 right-0 h-[2px] origin-left"
                style={{
                  background: `linear-gradient(90deg, ${card.color}, transparent)`,
                }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${card.color}15, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                {/* Icon + stat row */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ color: card.color, background: `${card.color}12` }}
                  >
                    {card.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black" style={{ color: card.color }}>
                      {card.stat}
                    </div>
                    <div className="text-xs text-zinc-600">{card.statLabel}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                  {card.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pancho face strip — circular avatars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20"
        >
          <div className="flex justify-center items-center gap-2 sm:gap-4 flex-wrap">
            {[1, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map((num, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3 + i * 0.06,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                whileHover={{
                  scale: 1.3,
                  zIndex: 10,
                  rotate: Math.random() > 0.5 ? 10 : -10,
                }}
                className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full overflow-hidden ring-2 ring-white/5 hover:ring-[#ff2244]/60 transition-all cursor-pointer relative"
              >
                <Image
                  src={`/images/pancho/pancho-${num}.png`}
                  alt={`Pancho ${num}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-zinc-600 mt-4">
            I am Pancho. You are Pancho. <span className="text-[#ff2244]">We are Pancho.</span>
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
