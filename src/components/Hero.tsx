"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        // Parallax effect: move the background slower than scroll
        const yOffset = window.scrollY * 0.5; // adjust 0.5 to change speed
        bgRef.current.style.transform = `translateY(${yOffset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="hero-container relative overflow-hidden h-screen">
      
      {/* Background Image */}
      <img
        ref={bgRef}
        src="/images/img-hero.jpg"
        alt="Hero"
        className="hero-bg absolute top-0 left-0 w-full h-full object-cover will-change-transform"
        style={{ transition: "transform 0.1s linear" }} // optional smoothing
      />

      {/* Content */}
      <div className="hero-text relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-6xl font-bold tracking-wide">KAAH</h1>
        <p className="mt-4 text-lg">Fine Dining Experience</p>
        <button
          onClick={() => scrollTo("#voice")}
          style={{
            background: "black",
            color: "#c9a96e",
            border: "1px solid #7a6140",
            padding: "1rem 2.5rem",
            fontSize: "0.8rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 500,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          🎤 Ask Our AI Host
        </button>
      </div>
    </div>
  );
}