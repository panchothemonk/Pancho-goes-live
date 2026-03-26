"use client";

const phrases = [
  "ok. 🌮",
  "sin ganas",
  "still here",
  "degen approved",
  "pancho never sleeps",
  "a la luna 🚀",
  "same pancho. different pump.",
  "segun tu",
  "we move.",
  "rug me harder daddy",
  "pump it. dump it. pancho don't care.",
  "3 minute rounds ⚔️",
  "94% to winners",
  "bump every 3 seconds",
  "sin ganas pero con profit",
  "ngmi? pancho says ok.",
  "built on solana ◎",
  "ser pls",
  "devs do something (they did)",
];

export default function Marquee() {
  const repeatedPhrases = [...phrases, ...phrases, ...phrases];

  return (
    <div className="marquee-strip">
      <div className="flex animate-marquee">
        {repeatedPhrases.map((phrase, i) => (
          <span key={i} className="mx-6 whitespace-nowrap uppercase tracking-wider flex items-center gap-3">
            {phrase}
            <span className="text-[#FF3DB8]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
