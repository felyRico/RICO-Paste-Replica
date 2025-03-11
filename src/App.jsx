import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Header from "./components/Header";
import GsapIntroAnimation from "./components/GsapIntroAnimation";
import HeroSection from "./components/HeroSection";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const headerEl = document.getElementById("header");
    gsap.set(headerEl, { y: -100 });

    ScrollTrigger.create({
      trigger: "#introSection",
      start: "bottom top",    
      onEnter: () => gsap.to(headerEl, { y: 0, duration: 0.5 }),
      onLeaveBack: () => gsap.to(headerEl, { y: -100, duration: 0.5 }),
    });
  }, []);

  return (
    <div style={{ margin: 0, padding: 0, overflowX: "hidden" }}>
      <Header />
      <GsapIntroAnimation />
      <HeroSection />
      <div
        style={{
          height: "100vh",
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h2>I'm tired, boss...</h2>
      </div>
    </div>
  );
}

export default App;