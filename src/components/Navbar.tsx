"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all ${scrolled ? "bg-black/90 backdrop-blur-md py-3 shadow-lg" : "py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        <h1 className="text-white text-2xl font-serif font-bold">
          Kaah
        </h1>

        <ul className="hidden md:flex gap-8 text-white text-sm">
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="bg-black text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-gray-800">
          Reserve
        </button>

      </div>
    </nav>
  );
}