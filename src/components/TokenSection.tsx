"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const revenueStreams = [
  { source: "Pancho Fun Bot", fee: "1% on sells", icon: "⚡" },
  { source: "Degen Arena", fee: "6% platform fee", icon: "⚔️" },
  { source: "Pancho Hits Bot", fee: "package fees", icon: "🤖" },
  { source: "Arena Rooms", fee: "0.25 SOL/room", icon: "🏟️" },
];

const tokenStats = [
  { label: "revenue to holders", value: "50%", color: "#14F195" },
  { label: "on-chain", value: "solana", color: "#8B5CF6" },
  { label: "products live", value: "4+", color: "#FFB800" },
  { label: "status", value: "coming", color: "#FF3DB8" },
];

export default function TokenSection() {
  return (
    <section id="token" className="relative py-24 sm:py-32 overflow-hidden bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-sm font-black tracking-[0.2em] uppercase text-[#FF3DB8] mb-4 block">
            $PANCHO token
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight text-white">
            the token that{" "}
            <span className="text-[#FF3DB8]">pays back.</span>
          </h2>
          <p className="text-lg text-[#999] max-w-2xl mx-auto leading-relaxed">
            50% of all panchoverse revenue goes back to $PANCHO token holders.
            every product. every fee. every transaction. holders eat first.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Revenue visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Big 50% */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
                className="inline-block"
              >
                <span className="text-[100px] sm:text-[140px] font-black text-[#FF3DB8] leading-none">
                  50%
                </span>
                <p className="text-white font-black text-xl mt-2">
                  of ALL revenue → holders
                </p>
              </motion.div>
            </div>

            {/* Revenue streams */}
            <div className="space-y-3">
              {revenueStreams.map((stream, i) => (
                <motion.div
                  key={stream.source}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{stream.icon}</span>
                    <span className="font-bold text-white">{stream.source}</span>
                  </div>
                  <span className="text-sm font-black text-[#FF3DB8]">{stream.fee}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Token card + stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Token card */}
            <div className="relative p-8 rounded-3xl bg-white/5 border-[3px] border-[#FF3DB8] shadow-[6px_6px_0px_#FF3DB8] mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-[3px] border-[#FF3DB8]">
                  <Image
                    src="/images/pancho/pancho-1.webp"
                    alt="Pancho"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">$PANCHO</h3>
                  <p className="text-sm text-[#999]">the panchoverse token</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-[#999]">chain</span>
                  <span className="font-bold text-white">Solana ◎</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-[#999]">revenue share</span>
                  <span className="font-bold text-[#14F195]">50% to holders</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-[#999]">backed by</span>
                  <span className="font-bold text-white">4 live products</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[#999]">status</span>
                  <span className="font-bold text-[#FFB800]">coming soon 🔥</span>
                </div>
              </div>
            </div>

            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-3">
              {tokenStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 text-center"
                >
                  <div className="text-2xl font-black" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#999] font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-[#999] mt-12 text-sm font-medium"
        >
          sin ganas pero con profit. 🌮
        </motion.p>
      </div>
    </section>
  );
}
