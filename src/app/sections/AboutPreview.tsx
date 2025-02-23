"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      {/* Marquee Text at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden h-32 pointer-events-none">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}
          className="whitespace-nowrap text-9xl font-extrabold uppercase text-white"
        >
          SHUBHAM GOEL -&nbsp;SHUBHAM GOEL -&nbsp; SHUBHAM GOEL -&nbsp; SHUBHAM GOEL -&nbsp;
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen px-8">
        {/* Left Column: Intro Text */}
        <div className="w-full md:w-1/3 text-left">
          <p className="text-sm uppercase tracking-wider text-gray-400">
            Hello, my name's Shubham. I was a senior designer at MNO where I create products, websites &amp; Airspaces.
          </p>
        </div>

        {/* Center Column: Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center my-8 md:my-0">
          <div className="w-64 h-64 rounded-xl overflow-hidden">
            <Image
              src="/shubham-profile.jpg"
              alt="Shubham Profile"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Column: Learn More Button */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <a
            href="/about"
            className="relative group flex items-center justify-center w-40 h-40 border border-white rounded-full transition-colors duration-300"
          >
            <span className="text-white uppercase tracking-wider group-hover:opacity-0 transition-opacity duration-300">
              Learn More
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <path d="M7 17l9-9M17 7l-9 9" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}