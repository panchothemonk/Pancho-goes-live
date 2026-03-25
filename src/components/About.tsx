"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const stats = [
  { number: "2B+", label: "Views Across Platforms", color: "#ff2244" },
  { number: "60K+", label: "Gang Members", color: "#ff6b2b" },
  { number: "183+", label: "Unique Panchos", color: "var(--accent)" },
  { number: "24/7", label: "Nonstop Rage", color: "var(--accent-purple)" },
];

const galleryImages = [2, 3, 5, 6, 7, 9, 10, 11, 13];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#ff2244] opacity-[0.04] blur-[200px]"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 40]) }}
        className="absolute bottom-0 left-[20%] w-[400px] h-[400px] rounded-full bg-[#ff6b2b] opacity-[0.03] blur-[180px]"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid with staggered reveal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="grid grid-cols-3 gap-3">
              {galleryImages.map((num, i) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ scale: 1.1, rotate: 2, zIndex: 10 }}
                  className="aspect-square rounded-2xl overflow-hidden glass group cursor-pointer relative"
                >
                  <Image
                    src={`/images/pancho/pancho-${num}.png`}
                    alt={`Pancho variant ${num}`}
                    fill
                    className="object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-bold text-white/80">#{num.toString().padStart(3, "0")}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="absolute -bottom-4 -right-4 px-5 py-3 rounded-2xl bg-[#ff2244] text-white font-bold text-sm shadow-[0_0_40px_rgba(255,34,68,0.4)]"
            >
              183+ VARIANTS
            </motion.div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-[0.2em] uppercase text-[#ff2244] mb-4 block"
            >
              Who Is Pancho?
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-[1.05]"
            >
              The Angry Monkey{" "}
              <span className="text-gradient">In All Of Us</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 mb-10"
            >
              <p className="text-lg text-zinc-400 leading-relaxed">
                Pancho is the angriest, most unapologetic monkey in all of crypto.
                With his fiery mohawk, heavy-lidded eyes, and permanent scowl, he
                represents every degen who&apos;s tired of playing it safe.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Whether rocking a Bitcoin crown with pixel shades, stuffing his face
                with burgers, or dripping in diamonds &mdash; Pancho has 183+
                unique variants and a personality that refuses to be tamed.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
                From the PFP Studio to the Degen Arena, from viral memes to an
                entire gaming ecosystem &mdash; the Panchoverse is real and it&apos;s
                growing every day.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.05 }}
                  className="p-5 rounded-2xl glass cursor-default"
                >
                  <div
                    className="text-3xl sm:text-4xl font-black mb-1"
                    style={{ color: stat.color }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
