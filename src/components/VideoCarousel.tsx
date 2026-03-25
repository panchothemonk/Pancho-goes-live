"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const videos = [
  { src: "/videos/pancho-p1.mp4", orientation: "portrait" as const },
  { src: "/videos/pancho-l1.mp4", orientation: "landscape" as const },
  { src: "/videos/pancho-p2.mp4", orientation: "portrait" as const },
  { src: "/videos/pancho-l2.mp4", orientation: "landscape" as const },
  { src: "/videos/pancho-p3.mp4", orientation: "portrait" as const },
  { src: "/videos/pancho-l3.mp4", orientation: "landscape" as const },
  { src: "/videos/pancho-l4.mp4", orientation: "landscape" as const },
];

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);
  const [mutedStates, setMutedStates] = useState<boolean[]>(
    videos.map(() => true)
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);

  // Scroll to current video
  const scrollToVideo = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const cards = container.querySelectorAll("[data-video-card]");
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

  // Auto-play visible video, pause others
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === current) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [current]);

  // Detect scroll position to update current
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cards = container.querySelectorAll("[data-video-card]");
      const containerCenter =
        container.scrollLeft + container.offsetWidth / 2;

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

      if (closest !== current) {
        setCurrent(closest);
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [current]);

  const toggleMute = (index: number) => {
    setMutedStates((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
    const video = videoRefs.current[index];
    if (video) {
      video.muted = !video.muted;
    }
  };

  // Touch/mouse drag for swipe
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    scrollStartX.current = containerRef.current?.scrollLeft || 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !containerRef.current) return;
    const dx = dragStartX.current - e.clientX;
    containerRef.current.scrollLeft = scrollStartX.current + dx;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="text-sm font-black tracking-[0.2em] uppercase text-[#FF3DB8] mb-4 block">
            world of pancho
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 leading-tight text-[#1a1a1a]">
            meet <span className="text-[#FF3DB8]">pancho.</span>
          </h2>
          <p className="text-lg text-[#666] max-w-xl mx-auto">
            pancho has become a universal language. one viral moment at a time.
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Left spacer to center first card */}
        <div className="shrink-0 w-[calc(50vw-200px)] sm:w-[calc(50vw-240px)]" />

        {videos.map((video, i) => {
          const isPortrait = video.orientation === "portrait";
          return (
            <motion.div
              key={i}
              data-video-card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`shrink-0 snap-center relative rounded-2xl overflow-hidden border-[3px] border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a] bg-[#1a1a1a] ${
                isPortrait
                  ? "w-[280px] sm:w-[320px] h-[500px] sm:h-[570px]"
                  : "w-[380px] sm:w-[440px] h-[280px] sm:h-[320px]"
              } ${i === current ? "scale-100" : "scale-[0.95] opacity-70"} transition-all duration-300`}
              onClick={() => {
                setCurrent(i);
                scrollToVideo(i);
              }}
            >
              <video
                ref={(el) => { videoRefs.current[i] = el; }}
                src={video.src}
                loop
                muted={mutedStates[i]}
                playsInline
                autoPlay={i === 0}
                preload="metadata"
                className="w-full h-full object-cover"
              />

              {/* Mute/unmute button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute(i);
                }}
                className="absolute top-3 left-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all border border-white/20"
              >
                {mutedStates[i] ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
              </button>

              {/* Gradient overlay bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </motion.div>
          );
        })}

        {/* Right spacer */}
        <div className="shrink-0 w-[calc(50vw-200px)] sm:w-[calc(50vw-240px)]" />
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-6">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrent(i);
              scrollToVideo(i);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-[#1a1a1a]"
                : "w-2 bg-[#e0e0e0] hover:bg-[#ccc]"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
