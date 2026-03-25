"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const merchItems = [
  { name: "Pancho OG Tee", image: "/images/pancho/pancho-5.png", price: "Coming Soon" },
  { name: "Degen Hoodie", image: "/images/pancho/pancho-6.png", price: "Coming Soon" },
  { name: "Pancho Plush", image: "/images/pancho/pancho-3.png", price: "Coming Soon" },
];

export default function Merch() {
  return (
    <section id="merch" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--accent-orange)] opacity-[0.04] blur-[200px]" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-[var(--accent-orange)] mb-4 block">
            Merch Drop
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-3xl glass overflow-hidden cursor-pointer"
            >
              <div className="relative aspect-square bg-gradient-to-br from-[#ff2244]/10 to-[var(--accent-orange)]/5 flex items-center justify-center overflow-hidden">
                <div className="relative w-48 h-56 group-hover:scale-110 transition-transform duration-700">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain drop-shadow-[0_0_40px_rgba(255,34,68,0.3)]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                <p className="text-sm text-[var(--accent-orange)] font-semibold">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex px-8 py-4 rounded-full bg-gradient-to-r from-[#ff2244] to-[var(--accent-orange)] text-white font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,107,43,0.2)]"
          >
            Visit Shop
          </a>
        </div>
      </div>
    </section>
  );
}
