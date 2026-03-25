"use client";

import { useState, useCallback, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import ScrollingFaces from "@/components/ScrollingFaces";
import Ecosystem from "@/components/Ecosystem";
import PFPStudio from "@/components/PFPStudio";
import TokenSection from "@/components/TokenSection";
import SlotMachine from "@/components/SlotMachine";
import Community from "@/components/Community";
import CTA from "@/components/CTA";
import VideoCarousel from "@/components/VideoCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);
  const [ready, setReady] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
    // Small delay so the browser can paint before animations start
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setReady(true);
      });
    });
  }, []);

  // Preload critical hero images during splash
  useEffect(() => {
    const preloadImages = [1, 4, 8].map((num) => {
      const img = new window.Image();
      img.src = `/images/pancho/pancho-${num}.webp`;
      return img;
    });
    return () => { preloadImages.forEach((img) => { img.src = ""; }); };
  }, []);

  return (
    <div>
      <SplashScreen onComplete={handleSplashComplete} />
      {splashDone && (
        <div
          className={`transition-opacity duration-700 ease-out ${ready ? "opacity-100" : "opacity-0"}`}
        >
          <Navbar />
          <Hero />
          <Marquee />
          <About />
          <VideoCarousel />
          <ScrollingFaces />
          <Ecosystem />
          <PFPStudio />
          <TokenSection />
          <SlotMachine />
          <Community />
          <CTA />
          <Footer />
        </div>
      )}
    </div>
  );
}
