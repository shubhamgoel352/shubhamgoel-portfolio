"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for Mobile Menu

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-[5]" />

      {/* Sticky Header */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 sm:px-12 py-4 bg-black bg-opacity-80 backdrop-blur-md z-50">
        {/* Left: Name */}
        <h1 className="text-white text-lg sm:text-xl font-semibold uppercase tracking-widest">
          Shubham Goel
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/projects" className="text-gray-300 hover:text-white transition-colors uppercase">
            Projects
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors uppercase">
            About
          </Link>
        </nav>

        {/* Right: Contact Me Button (Visible on Desktop) */}
        <Link href="/contact" className="hidden md:block">
          <button className="border border-white text-white px-4 py-2 rounded-full text-xs uppercase hover:bg-white hover:text-black transition">
            Contact Me
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 text-white text-lg z-50">
          <Link href="/projects" className="hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>
            Projects
          </Link>
          <Link href="/about" className="hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>
            Contact Me
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 border border-white text-white px-6 py-2 rounded-full text-sm uppercase hover:bg-white hover:text-black transition"
          >
            Close
          </button>
        </nav>
      )}

      {/* Main Hero Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 sm:px-12">
        <div className="w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-between text-white text-center md:text-left">
          {/* Big Bold Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-lg"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight">
              Innovate-<br />Technology<br />Strategy
            </h2>
          </motion.div>

          {/* Subtitle / Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 md:mt-0 max-w-md text-gray-300 text-sm sm:text-base md:text-lg"
          >
            Creative thinking and problem solving are where my mind wanders,
            using my knowledge and passion for design as my medium.
          </motion.div>
        </div>
      </div>
    </section>
  );
}