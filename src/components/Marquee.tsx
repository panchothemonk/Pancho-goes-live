"use client";

export default function Marquee() {
  const items = [
    "I AM PANCHO",
    "YOU ARE PANCHO",
    "WE ARE PANCHO",
    "PANCHO NEVER SLEEPS",
    "RAGE ON",
    "DEGEN MONK",
  ];

  return (
    <div className="relative py-8 bg-gradient-to-r from-[#ff2244] to-[var(--accent-orange)] overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((text, i) => (
          <span
            key={i}
            className="mx-8 text-lg sm:text-2xl font-bold text-black/80 uppercase tracking-widest flex items-center gap-8"
          >
            {text}
            <span className="w-2 h-2 rounded-full bg-black/30" />
          </span>
        ))}
      </div>
    </div>
  );
}
