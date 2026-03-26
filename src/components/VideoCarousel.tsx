"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// Grouped into slides: portrait solo OR 2 landscapes stacked
const slides: { type: "portrait" | "landscape-pair"; videos: string[] }[] = [
  { type: "portrait", videos: ["/videos/pancho-p5.mp4"] },
  { type: "landscape-pair", videos: ["/videos/pancho-l1.mp4", "/videos/pancho-l2.mp4"] },
  { type: "portrait", videos: ["/videos/pancho-p1.mp4"] },
  { type: "landscape-pair", videos: ["/videos/pancho-l3.mp4", "/videos/pancho-l4.mp4"] },
  { type: "portrait", videos: ["/videos/pancho-p7.mp4"] },
  { type: "landscape-pair", videos: ["/videos/pancho-l6.mp4", "/videos/pancho-l7.mp4"] },
  { type: "portrait", videos: ["/videos/pancho-p8.mp4"] },
];

// Build flat list of all video srcs with their slide index
const flatVideos = slides.flatMap((slide, slideIdx) =>
  slide.videos.map((src) => ({ src, slideIdx }))
);

function MuteButton({ muted, onClick }: { muted: boolean; onClick: () => void }) {
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      className="absolute top-3 left-3 z-10 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all border border-white/20"
    >
      {muted ? (
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
  );
}

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);
  const [mutedMap, setMutedMap] = useState<Record<number, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());

  const isMuted = (flatIdx: number) => mutedMap[flatIdx] !== false; // default muted

  const toggleMute = (flatIdx: number) => {
    const wasMuted = isMuted(flatIdx);
    // If unmuting, mute all others first
    if (wasMuted) {
      const newMap: Record<number, boolean> = {};
      flatVideos.forEach((_, i) => { newMap[i] = true; });
      newMap[flatIdx] = false;
      setMutedMap(newMap);
      // Apply immediately
      videoRefs.current.forEach((video, i) => {
        video.muted = i !== flatIdx;
      });
    } else {
      setMutedMap((prev) => ({ ...prev, [flatIdx]: true }));
      const video = videoRefs.current.get(flatIdx);
      if (video) video.muted = true;
    }
  };

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

  // Play videos in current slide, pause others
  useEffect(() => {
    flatVideos.forEach(({ slideIdx }, flatIdx) => {
      const video = videoRefs.current.get(flatIdx);
      if (!video) return;
      if (slideIdx === current) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [current]);

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

  // Track which flat index we're at while rendering
  let flatIdx = 0;

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-sm font-black tracking-[0.2em] uppercase text-[#FF3DB8] mb-4 block">
            pancho tv
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 leading-tight text-[#1a1a1a]">
            the <span className="text-[#FF3DB8]">content.</span>
          </h2>
          <p className="text-lg text-[#666] max-w-xl mx-auto">
            pancho goes viral. pancho doesn&apos;t care. scroll through anyway.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="shrink-0" style={{ width: "calc(50vw - 160px)" }} />

        {slides.map((slide, slideIdx) => {
          const isActive = slideIdx === current;

          if (slide.type === "portrait") {
            const thisIdx = flatIdx;
            flatIdx += 1;
            return (
              <div
                key={slideIdx}
                data-slide
                className={`shrink-0 snap-center relative w-[320px] sm:w-[360px] h-[520px] sm:h-[600px] rounded-2xl overflow-hidden border-[3px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] bg-[#1a1a1a] transition-all duration-300 ${
                  isActive ? "scale-100 opacity-100" : "scale-[0.93] opacity-40"
                }`}
                onClick={() => { setCurrent(slideIdx); scrollToSlide(slideIdx); }}
              >
                <video
                  ref={(el) => { if (el) videoRefs.current.set(thisIdx, el); }}
                  src={slide.videos[0]}
                  loop
                  muted
                  playsInline
                  autoPlay={slideIdx === 0}
                  preload={slideIdx < 3 ? "auto" : "metadata"}
                  className="w-full h-full object-cover"
                />
                <MuteButton muted={isMuted(thisIdx)} onClick={() => toggleMute(thisIdx)} />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
            );
          }

          // Landscape pair
          const idx1 = flatIdx;
          const idx2 = flatIdx + 1;
          flatIdx += 2;
          return (
            <div
              key={slideIdx}
              data-slide
              className={`shrink-0 snap-center w-[320px] sm:w-[360px] h-[520px] sm:h-[600px] flex flex-col gap-2 transition-all duration-300 ${
                isActive ? "scale-100 opacity-100" : "scale-[0.93] opacity-40"
              }`}
              onClick={() => { setCurrent(slideIdx); scrollToSlide(slideIdx); }}
            >
              {/* Top landscape video */}
              <div className="relative flex-1 rounded-2xl overflow-hidden border-[3px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] bg-[#1a1a1a]">
                <video
                  ref={(el) => { if (el) videoRefs.current.set(idx1, el); }}
                  src={slide.videos[0]}
                  loop
                  muted
                  playsInline
                  preload={slideIdx < 3 ? "auto" : "metadata"}
                  className="w-full h-full object-cover"
                />
                <MuteButton muted={isMuted(idx1)} onClick={() => toggleMute(idx1)} />
              </div>
              {/* Bottom landscape video */}
              <div className="relative flex-1 rounded-2xl overflow-hidden border-[3px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] bg-[#1a1a1a]">
                <video
                  ref={(el) => { if (el) videoRefs.current.set(idx2, el); }}
                  src={slide.videos[1]}
                  loop
                  muted
                  playsInline
                  preload={slideIdx < 3 ? "auto" : "metadata"}
                  className="w-full h-full object-cover"
                />
                <MuteButton muted={isMuted(idx2)} onClick={() => toggleMute(idx2)} />
              </div>
            </div>
          );
        })}

        <div className="shrink-0" style={{ width: "calc(50vw - 160px)" }} />
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-4">
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

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
