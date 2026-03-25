"use client";

import Image from "next/image";
import { useFadeIn } from "@/hooks/useFadeIn";

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
  const sectionRef = useFadeIn();

  return (
    <section id="token" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in-section">
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
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Revenue visual */}
          <div className="fade-in-section">
            <div className="text-center mb-8">
              <span className="text-[100px] sm:text-[140px] font-black text-[#FF3DB8] leading-none inline-block">
                50%
              </span>
              <p className="text-white font-black text-xl mt-2">
                of ALL revenue → holders
              </p>
            </div>

            <div className="space-y-3">
              {revenueStreams.map((stream) => (
                <div
                  key={stream.source}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{stream.icon}</span>
                    <span className="font-bold text-white">{stream.source}</span>
                  </div>
                  <span className="text-sm font-black text-[#FF3DB8]">{stream.fee}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Token card + stats */}
          <div className="fade-in-section">
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

            <div className="grid grid-cols-2 gap-3">
              {tokenStats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 text-center"
                >
                  <div className="text-2xl font-black" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#999] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-[#999] mt-12 text-sm font-medium fade-in-section">
          sin ganas pero con profit. 🌮
        </p>
      </div>
    </section>
  );
}
