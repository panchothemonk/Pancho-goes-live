"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// Grouped into slides: portrait solo OR 2 landscapes stacked (heights match)
// Ordered: pump.fun first, then alternating portrait/landscape-pair
const slides = [
  // Slide 1: pump.fun (portrait solo)
  { type: "portrait" as const, videos: ["/videos/pancho-p5.mp4"] },
  // Slide 2: sunglasses corner + uber decline (landscape pair)
  { type: "landscape-pair" as const, videos: ["/videos/pancho-l1.mp4", "/videos/pancho-l2.mp4"] },
  // Slide 3: phone chart mall (portrait solo)
  { type: "portrait" as const, videos: ["/videos/pancho-p1.mp4"] },
  // Slide 4: braces + kitchen (landscape pair)
  { type: "landscape-pair" as const, videos: ["/videos/pancho-l3.mp4", "/videos/pancho-l4.mp4"] },
  // Slide 5: miami lambo (portrait solo)
  { type: "portrait" as const, videos: ["/videos/pancho-p7.mp4"] },
  // Slide 6: sleeping + blue mohawk (landscape pair)
  { type: "landscape-pair" as const, videos: ["/videos/pancho-l6.mp4", "/videos/pancho-l7.mp4"] },
  // Slide 7: mcdonalds job app (portrait solo)
  { type: "portrait" as const, videos: ["/videos/pancho-p8.mp4"] },
];

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);
  const [globalMuted, setGlobalMuted] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Flatten video index for refs
  const allVideoSrcs = slides.flatMap((s) => s.videos);
  const totalVideos = allVideoSrcs.length;

  const scrollToSlide = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const cards = container.querySelectorAll("[data-slide]");
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      const containerCenter = container.offsetWidth / 2;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      container.scrollTo({
        left: cardCenter - containerCenter,
        behavior: "smooth",
      });
    }
  }, []);

  // Play videos in current slide, pause all others
  useEffect(() => {
    let videoIdx = 0;
    slides.forEach((slide, slideIdx) => {
      slide.videos.forEach(() => {
        const video = videoRefs.current[videoIdx];
        if (video) {
          if (slideIdx === current) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
        videoIdx++;
      });
    });
  }, [current]);

  // Update muted state when globalMuted changes
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) video.muted = globalMuted;
    });
  }, [globalMuted]);

  // Detect scroll to update current slide
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cards = container.querySelectorAll("[data-slide]");
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      cards.forEach((card, i) => {
        const el = card as HTMLElement;
        const cardCenter = el.offsetLeft + el.offsetWidth / 2;
        const dist = Math.abs(cardCenter - containerCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      if (closest !== current) setCurrent(closest);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [current]);

  // Track video ref index
  let refIdx = 0;

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-sm font-black tracking-[0.2em] uppercase text-[#FF3DB8] mb-4 block">
            world of pancho
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 leading-tight text-[#1a1a1a]">
            meet <span className="text-[#FF3DB8]">pancho.</span>
          </h2>
          <p className="text-lg text-[#666] max-w-xl mx-auto">
            one viral moment at a time.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Left spacer to center first slide */}
        <div className="shrink-0" style={{ width: "calc(50vw - 160px)" }} />

        {slides.map((slide, slideIdx) => {
          const isActive = slideIdx === current;

          if (slide.type === "portrait") {
            const vidIdx = refIdx;
            refIdx += 1;
            return (
              <div
                key={slideIdx}
                data-slide
                className={`shrink-0 snap-center w-[320px] sm:w-[360px] h-[520px] sm:h-[600px] rounded-2xl overflow-hidden border-[3px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] bg-[#1a1a1a] transition-all duration-300 ${
                  isActive ? "scale-100 opacity-100" : "scale-[0.93] opacity-40"
                }`}
                onClick={() => { setCurrent(slideIdx); scrollToSlide(slideIdx); }}
              >
                <video
                  ref={(el) => { videoRefs.current[vidIdx] = el; }}
                  src={slide.videos[0]}
                  loop
                  muted={globalMuted}
                  playsInline
                  autoPlay={slideIdx === 0}
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
            );
          }

          // Landscape pair: 2 videos stacked, same total height as portrait
          const vidIdx1 = refIdx;
          const vidIdx2 = refIdx + 1;
          refIdx += 2;
          return (
            <div
              key={slideIdx}
              data-slide
              className={`shrink-0 snap-center w-[320px] sm:w-[360px] h-[520px] sm:h-[600px] flex flex-col gap-2 transition-all duration-300 ${
                isActive ? "scale-100 opacity-100" : "scale-[0.93] opacity-40"
              }`}
              onClick={() => { setCurrent(slideIdx); scrollToSlide(slideIdx); }}
            >
              <div className="flex-1 rounded-2xl overflow-hidden border-[3px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] bg-[#1a1a1a]">
                <video
                  ref={(el) => { videoRefs.current[vidIdx1] = el; }}
                  src={slide.videos[0]}
                  loop
                  muted={globalMuted}
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden border-[3px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] bg-[#1a1a1a]">
                <video
                  ref={(el) => { videoRefs.current[vidIdx2] = el; }}
                  src={slide.videos[1]}
                  loop
                  muted={globalMuted}
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          );
        })}

        {/* Right spacer */}
        <div className="shrink-0" style={{ width: "calc(50vw - 160px)" }} />
      </div>

      {/* Controls row: dots + mute toggle */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); scrollToSlide(i); }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-[#1a1a1a]" : "w-2 bg-[#e0e0e0] hover:bg-[#ccc]"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => setGlobalMuted(!globalMuted)}
          className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#FF3DB8] transition-all"
        >
          {globalMuted ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          )}
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
