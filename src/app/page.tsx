import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Community from "@/components/Community";
import Ecosystem from "@/components/Ecosystem";
import Merch from "@/components/Merch";
import Marquee from "@/components/Marquee";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Community />
      <Ecosystem />
      <Marquee />
      <Merch />
      <CTA />
      <Footer />
    </>
  );
}
