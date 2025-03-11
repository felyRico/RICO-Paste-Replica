import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapIntroAnimation = () => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const logoRef = useRef(null);
  const notificationRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        text1Ref.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      )
        .to(
          text1Ref.current,
          { y: -50, opacity: 0, duration: 1, ease: "power2.inOut" },
          "+=1"
        )
        .fromTo(
          text2Ref.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
          "-=0.5"
        )
        .to(
          text2Ref.current,
          { y: -50, opacity: 0, duration: 1, ease: "power2.inOut" },
          "+=1"
        )
        .fromTo(
          logoRef.current,
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" }
        )
        .fromTo(
          notificationRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.5"
        )
        .to(
          logoRef.current,
          { scale: 0.5, opacity: 0, duration: 1, ease: "power2.inOut" },
          "+=1"
        )
        .fromTo(
          bgRef.current,
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: "power2.inOut" },
          "-=1"
        );

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
      });

      gsap.to(overlayRef.current, {
        opacity: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="introSection"
      ref={containerRef}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflowX: "hidden",
        fontFamily: "sans-serif",
        background: "#fff",
      }}
    >
      <div
        ref={text1Ref}
        style={{
          position: "absolute",
          width: "100%",
          textAlign: "center",
          top: "30%",
          fontSize: "6rem",
          fontWeight: "bold",
        }}
      >
        Your Workflow Amplified
      </div>

      <div
        ref={text2Ref}
        style={{
          position: "absolute",
          width: "100%",
          textAlign: "center",
          top: "30%",
          fontSize: "6rem",
          fontWeight: "bold",
        }}
      >
        Once again
      </div>

      <div
        ref={logoRef}
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0,
        }}
      >
        <img
          src="https://framerusercontent.com/modules/hLuqQCS43wOS6vijmFSD/Nx7L85Z1Cd9FDx1OX7OT/assets/EPhoZwzfI0nbSVeXEefawWiZyVU.png"
          alt="Logo"
          style={{ width: "100%", height: "100%" }}
        />
        <div
          ref={notificationRef}
          style={{
            position: "absolute",
            top: "-10px",
            right: "-10px",
            background: "rgb(0, 153, 255)",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
            opacity: 0,
          }}
        >
          4.0
        </div>
      </div>

      <div
        ref={bgRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0,
        }}
      >
        <img
          src="https://framerusercontent.com/images/DhDsfyks1iwAWu29uci5zpO8.jpg"
          alt="Background"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div
        ref={overlayRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "black",
          opacity: 0,
          pointerEvents: "none",
        }}
      ></div>
    </div>
  );
};

export default GsapIntroAnimation;
