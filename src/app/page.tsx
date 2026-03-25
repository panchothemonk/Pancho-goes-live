"use client";

import { useState, useCallback } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Community from "@/components/Community";
import Ecosystem from "@/components/Ecosystem";
import SlotMachine from "@/components/SlotMachine";
import Marquee from "@/components/Marquee";
import Merch from "@/components/Merch";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <>
      <SplashScreen onComplete={handleSplashComplete} />
      {splashDone && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Community />
          <Ecosystem />
          <SlotMachine />
          <Marquee />
          <Merch />
          <CTA />
          <Footer />
        </>
      )}
    </>
  );
}
