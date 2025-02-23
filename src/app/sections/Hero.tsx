"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  // Optional: Ripple effect tracking mouse position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay to maintain text contrast */}
      <div className="absolute inset-0 bg-black opacity-50 z-[5]" />

      {/* Optional Ripple Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[6]"
        animate={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.08), transparent 60%)`,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Header / Navbar */}
      {/* Desktop Header */}
      <header className="hidden md:flex absolute top-0 left-0 w-full items-center justify-between px-8 py-6 z-10">
        {/* Left: Name */}
        <h1 className="text-white text-xl font-semibold uppercase tracking-widest">
          Shubham Goel
        </h1>
        {/* Center: Nav Links */}
        <nav className="flex space-x-8 text-sm font-medium">
          <a
            href="#projects"
            className="text-gray-300 hover:text-white transition-colors uppercase"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-white transition-colors uppercase"
          >
            About
          </a>
        </nav>
        {/* Right: Button */}
        <button className="border border-white text-white px-4 py-2 rounded-full text-xs uppercase hover:bg-white hover:text-black transition">
          Available
        </button>
      </header>
      {/* Mobile Header */}
      <header className="flex md:hidden absolute top-0 left-0 w-full items-center justify-between px-4 py-4 z-10">
        <h1 className="text-white text-lg font-semibold uppercase tracking-widest">
          Shubham Goel
        </h1>
        <button className="border border-white text-white px-3 py-1 rounded-full text-xs uppercase hover:bg-white hover:text-black transition">
          Menu
        </button>
      </header>

      {/* Side Label (Desktop Only) */}
      <div className="hidden md:block absolute left-8 bottom-1/2 -rotate-90 origin-bottom text-xs text-gray-400 uppercase tracking-wider z-10">
        Cu / on - scroll &gt;
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center md:justify-between text-white">
          {/* Big Bold Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase leading-tight">
              Multi-<br />Disciplinary<br />Designer
            </h2>
          </motion.div>
          {/* Subtitle / Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 md:mt-0 md:max-w-sm text-gray-300 text-xs sm:text-sm md:text-base text-right"
          >
            Creative thinking and problem solving are where my mind wanders,
            using my knowledge and passion for design as my medium.
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator (Center Bottom) */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 border border-white rounded-full cursor-pointer z-10"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth={2}
          stroke="white"
          className="w-6 h-6"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.a>
    </section>
  );
}