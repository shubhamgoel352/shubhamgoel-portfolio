"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="relative w-full min-h-screen snap-start bg-gradient-to-br from-black via-[#0a0a0a] to-black text-white overflow-hidden px-4 sm:px-8 py-8 sm:py-16">
      {/* Optional Animated Background Gradient */}
      <motion.div
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen gap-8">
        {/* Left Column: Animated Intro Text */}
        <div className="md:w-1/2 space-y-4 text-left">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase tracking-tight"
          >
            Discover My Story
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-gray-400"
          >
            I blend creativity and technology to build immersive experiences.
            Explore my journey as I transform ideas into reality.
          </motion.p>
        </div>

        {/* Right Column: Interactive Profile Image with Tilt, Zoom & Hover Overlay */}
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 w-full flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center"
        >
          <span className="text-xs sm:text-sm text-gray-400 uppercase mb-2">Scroll</span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 sm:w-6 sm:h-6"
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <path d="M7 17l9-9M17 7l-9 9" />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
}