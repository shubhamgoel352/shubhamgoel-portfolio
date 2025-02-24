"use client";

import { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/**
 * A small seeded random utility so SSR & client match.
 * Each call returns a stable pseudo-random in [0,1).
 */
function seededRandom(seedRef: { current: number }) {
  const x = Math.sin(seedRef.current++) * 10000;
  return x - Math.floor(x);
}

export default function AboutPreview() {
  const seedRef = useRef<number>(123); // Any seed you like
  const stars = useMemo(() => {
    const starCount = 40;
    const newStars = [];
    for (let i = 0; i < starCount; i++) {
      const x = seededRandom(seedRef); // [0..1)
      const y = seededRandom(seedRef);
      const size = 1 + seededRandom(seedRef) * 2; // between 1 and 3
      const duration = 2 + seededRandom(seedRef) * 2; // flicker 2-4s
      newStars.push({ x, y, size, duration });
    }
    return newStars;
  }, []);

  return (
    <section className="relative w-full min-h-screen snap-start bg-gradient-to-br from-black via-[#0a0a0a] to-black text-white overflow-hidden px-4 sm:px-8 py-8 sm:py-16">
      {/* Large rotating pink circle */}
      <motion.div
        className="absolute w-[800px] h-[800px] bg-pink-600 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20 z-0"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />

      {/* Smaller rotating blue circle */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-blue-500 rounded-full top-[30%] left-[70%] blur-2xl opacity-20 z-0"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
      />

      {/* Starfield (seeded random) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${(star.x * 100).toFixed(4)}%`,
              top: `${(star.y * 100).toFixed(4)}%`,
              width: `${star.size.toFixed(2)}px`,
              height: `${star.size.toFixed(2)}px`,
            }}
            animate={{ opacity: [0.1, 1, 0.1] }}
            transition={{
              repeat: Infinity,
              duration: star.duration,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen gap-12">
        {/* Left Column: Animated Intro Text */}
        <div className="md:w-1/2 space-y-6 text-left">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight leading-tight"
          >
            Discover My Story
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-gray-300"
          >
            I blend creativity and technology to build immersive experiences.
            Explore my journey as I transform ideas into reality.
          </motion.p>
          {/* "Read More" Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <Link
              href="/about"
              className="inline-block bg-transparent border border-white text-white px-6 py-3 rounded-full uppercase tracking-wider hover:bg-white hover:text-black transition duration-300"
            >
              Read More
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Interactive Profile Image */}
        <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <motion.div
            className="relative w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
            initial={{ scale: 0.8, rotateY: -10 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
          >
            <Image
              src="/shubham-profile.jpg"
              alt="Shubham Profile"
              width={288}
              height={288}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="text-base sm:text-lg md:text-2xl font-bold uppercase tracking-wide"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Discover More
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}