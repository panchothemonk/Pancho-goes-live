"use client";

import { useState, useCallback } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Ecosystem from "@/components/Ecosystem";
import TokenSection from "@/components/TokenSection";
import SlotMachine from "@/components/SlotMachine";
import Community from "@/components/Community";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <div className="noise">
      <SplashScreen onComplete={handleSplashComplete} />
      {splashDone && (
        <>
          <Navbar />
          <Hero />
          <Marquee />
          <About />
          <Ecosystem />
          <TokenSection />
          <SlotMachine />
          <Community />
          <CTA />
          <Footer />
        </>
      )}
    </div>
  );
}
