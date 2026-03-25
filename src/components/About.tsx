"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { number: "2B+", label: "Views Across Platforms" },
  { number: "60K+", label: "Gang Members" },
  { number: "183+", label: "Unique Panchos" },
  { number: "24/7", label: "Nonstop Rage" },
];

const galleryImages = [2, 3, 5, 6, 7, 9, 10, 11, 13];

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ff2244] opacity-[0.03] blur-[200px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-3 gap-3">
              {galleryImages.map((num, i) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="aspect-square rounded-2xl overflow-hidden glass group cursor-pointer relative"
                >
                  <Image
                    src={`/images/pancho/pancho-${num}.png`}
                    alt={`Pancho variant ${num}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-[#ff2244] mb-4 block">
              Who Is Pancho?
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Angry Monkey{" "}
              <span className="text-gradient">In All Of Us</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-4 leading-relaxed">
              Pancho is the angriest, most unapologetic monkey in all of crypto.
              With his fiery mohawk, heavy-lidded eyes, and permanent scowl, he
              represents every degen who&apos;s tired of playing it safe.
            </p>
            <p className="text-lg text-zinc-400 mb-4 leading-relaxed">
              Whether rocking a cowboy hat with a cigar, a backwards cap with a
              gold chain, or just vibing with his raw fury &mdash; Pancho has 183+
              unique variants and a personality that refuses to be tamed.
            </p>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
              From the PFP Studio to the Degen Arena, from viral memes to an
              entire gaming ecosystem &mdash; the Panchoverse is real and it&apos;s
              growing every day.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-2xl glass"
                >
                  <div className="text-3xl font-bold text-gradient mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
