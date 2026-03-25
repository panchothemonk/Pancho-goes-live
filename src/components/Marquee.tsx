"use client";

const phrases = [
  "ok. 🌮",
  "sin ganas",
  "still here",
  "degen approved",
  "pancho never sleeps",
  "a la luna 🚀",
  "same pancho. different problems.",
  "segun tu",
  "we move.",
  "auto take-profit ⚡",
  "100-point scoring",
  "3 minute rounds ⚔️",
  "94% to winners",
  "bump every 3 seconds",
  "sin ganas pero con profit",
  "1% fee. that's it.",
  "built on solana ◎",
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
