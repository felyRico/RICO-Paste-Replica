import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const leftLaptopRef = useRef(null);
  const centerDisplayRef = useRef(null);
  const rightLaptopRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      tl.to(leftLaptopRef.current, { x: 300 }, 0);
      tl.to(rightLaptopRef.current, { x: -300 }, 0);
      tl.to(centerDisplayRef.current, { scale: 0.9 }, 0);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100vw",
        height: "200vh",
        background: "#fff",
        overflowX: "hidden",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          paddingTop: "100px",
        }}
      >
        <h1 style={{ fontSize: "3rem", margin: "0 0 0.5rem", fontWeight: "bold" }}>
          New Look. New Feel.
          <br />
          <span
      style={{
        backgroundImage: "linear-gradient(90deg, rgb(255, 159, 82) 0%, rgb(255, 159, 82) 50%, rgb(255, 87, 60) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        display: "inline-block",
      }}
    >
          All-New Paste
          </span>
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            maxWidth: "600px",
            margin: "0 auto 2rem",
            lineHeight: "1.5",
            color: "#555",
          }}
        >
          Discover unprecedented efficiency with our most advanced, intuitive, and
          user-centric update yet.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <div style={{ position: "relative", zIndex: 2 }}>
            <img
              ref={leftLaptopRef}
              src="https://framerusercontent.com/images/MFsNIGZmcW4MYnZCHCETuFIL9tc.png?scale-down-to=512"
              alt="Left Laptop"
              style={{ width: "400px", height: "auto" }}
            />
          </div>

          <div style={{ position: "relative", zIndex: 1, margin: "0 -80px" }}>
            <img
              ref={centerDisplayRef}
              src="https://framerusercontent.com/images/XhrkXBnHJaTWtrEjq133BhtBg.png?scale-down-to=512"
              alt="Center Display"
              style={{ width: "600px", height: "auto" }}
            />
          </div>

          <div style={{ position: "relative", zIndex: 2 }}>
            <img
              ref={rightLaptopRef}
              src="https://framerusercontent.com/images/5wZGXwxBjkqvElgRafMjIwVrAk.png?scale-down-to=512"
              alt="Right Laptop"
              style={{ width: "400px", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
