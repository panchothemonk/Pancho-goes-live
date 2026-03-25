"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const merchItems = [
  { name: "Pancho OG Tee", image: "/images/pancho/pancho-5.png", price: "Coming Soon", tag: "APPAREL" },
  { name: "Degen Hoodie", image: "/images/pancho/pancho-6.png", price: "Coming Soon", tag: "APPAREL" },
  { name: "Pancho Plush", image: "/images/pancho/pancho-3.png", price: "Coming Soon", tag: "COLLECTIBLE" },
];

export default function Merch() {
  return (
    <section id="merch" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ff6b2b] opacity-[0.04] blur-[200px]" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#ff6b2b] mb-4 block">
            Merch Drop
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6">
            Wear Your{" "}
            <span className="text-gradient">Pancho Pride</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            High-quality apparel and collectibles for the real ones.
            Rep the gang everywhere you go.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {merchItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl glass overflow-hidden cursor-pointer"
            >
              <div className="relative aspect-square bg-gradient-to-br from-[#ff2244]/8 to-[#ff6b2b]/5 flex items-center justify-center overflow-hidden">
                {/* Animated background shimmer */}
                <div className="absolute inset-0 animate-shimmer" />

                <motion.div
                  whileHover={{ scale: 1.15, rotate: [-2, 2, 0] }}
                  transition={{ duration: 0.5 }}
                  className="relative w-44 h-52 sm:w-48 sm:h-56"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                    style={{
                      filter: "drop-shadow(0 0 40px rgba(255,34,68,0.3))",
                    }}
                  />
                </motion.div>

                {/* Tag */}
                <div className="absolute top-4 left-4 text-[9px] font-black tracking-widest text-[#ff2244] bg-[#ff2244]/10 px-3 py-1 rounded-full">
                  {item.tag}
                </div>

                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1 group-hover:text-white transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-[#ff6b2b] font-bold">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#"
            className="inline-flex px-10 py-5 rounded-full bg-gradient-to-r from-[#ff2244] to-[#ff6b2b] text-white font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,34,68,0.2)] hover:shadow-[0_0_60px_rgba(255,34,68,0.4)]"
          >
            Visit Shop →
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
