"use client";

import Image from "next/image";

const footerLinks = {
  Navigate: [
    { label: "About", href: "#about" },
    { label: "Tools", href: "#products" },
    { label: "Token", href: "#token" },
    { label: "Community", href: "#community" },
  ],
  Panchoverse: [
    { label: "Home", href: "#" },
    { label: "Degen Arena", href: "https://gamearena.panchoverse.com" },
    { label: "Hits Bot", href: "https://bumps.panchoverse.com/" },
  ],
  Social: [
    { label: "X / Twitter", href: "https://x.com/Panchomonks" },
    { label: "YouTube", href: "https://youtube.com/@Panchojourney" },
    { label: "Telegram", href: "https://t.me/panchodegen" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t-[3px] border-[#1a1a1a] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-[2px] border-[#1a1a1a]">
                <Image
                  src="/images/pancho/pancho-1.webp"
                  alt="Pancho"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-black text-[#1a1a1a]">PANCHO</span>
            </div>
            <p className="text-sm text-[#999] leading-relaxed mb-4">
              the degen ape in all of us.
              <br />
              sin ganas. still here.
            </p>
            <div className="flex gap-2">
              <a
                href="https://x.com/Panchomonks"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border-2 border-[#1a1a1a] flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@Panchojourney"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border-2 border-[#1a1a1a] flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://t.me/panchodegen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border-2 border-[#1a1a1a] flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-black uppercase tracking-wider text-[#1a1a1a] mb-4">
                {title}
              </h4>
              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-[#999] hover:text-[#FF3DB8] transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t-2 border-[#e0e0e0] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#999] font-medium">
            &copy; 2026 PANCHO. sin ganas. still here.
          </p>
          <p className="text-sm text-[#ccc] font-medium">
            built on solana ◎
          </p>
        </div>
      </div>
    </footer>
  );
}
