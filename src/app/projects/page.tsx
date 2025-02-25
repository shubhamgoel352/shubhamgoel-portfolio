"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Projects Data
const projects = [
  {
    title: "AI Innovation Hub",
    description: "A next-gen AI-powered innovation center reshaping industries.",
    image: "/ai_innovation_center.jpg",
    link: "/projects/ai-innovation-hub",
  },
  {
    title: "Smart Spaces Ecosystem",
    description: "An intelligent, connected environment integrating AI, IoT, and automation.",
    image: "/smart_spaces_ecosystem.jpg",
    link: "/projects/smart-spaces",
  },
  {
    title: "Sports Innovation Hub",
    description: "A cutting-edge AI-driven sports technology ecosystem enhancing performance.",
    image: "/sports_innovation_hub.jpg",
    link: "/projects/sports-innovation",
  },
  {
    title: "Sustainable Technology Hub",
    description: "Green technology projects focused on sustainable IT solutions.",
    image: "/sustainable_technology_hub.jpg",
    link: "/projects/sustainable-tech",
  },
  {
    title: "Health & Safety Data Migration",
    description: "Seamlessly migrating crucial health and safety data to modern platforms.",
    image: "/health_safety_data_migration.jpg",
    link: "/projects/healthsafety",
  },
];

export default function ProjectsPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      
      {/* 🔹 Sticky Header (Matches Homepage) */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-black bg-opacity-80 backdrop-blur-md z-50">
        <h1 className="text-white text-xl font-semibold uppercase tracking-widest">
          Shubham Goel
        </h1>
        <nav className="flex space-x-8 text-sm font-medium">
          <Link href="/projects">
            <span className="text-gray-300 hover:text-white transition-colors uppercase cursor-pointer">Projects</span>
          </Link>
          <Link href="/about">
            <span className="text-gray-300 hover:text-white transition-colors uppercase cursor-pointer">About</span>
          </Link>
        </nav>
        <button className="border border-white text-white px-4 py-2 rounded-full text-xs uppercase hover:bg-white hover:text-black transition">
          Contact Me
        </button>
      </header>

      {/* 🔹 Hero Section */}
      <div className="relative h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wide"
        >
          Explore My Work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-sm sm:text-lg md:text-xl text-gray-300 max-w-lg md:max-w-2xl"
        >
          A collection of projects that define the intersection of creativity, technology, and impact.
        </motion.p>

        {/* 🔹 Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="absolute bottom-6 sm:bottom-10 flex flex-col items-center opacity-100"
        >
          <span className="text-xs sm:text-sm text-gray-400">Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 sm:w-8 h-6 sm:h-8 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>

      {/* 🔹 Projects Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-16 py-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-48 sm:h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h2 className="text-lg sm:text-2xl font-bold">{project.title}</h2>
              <p className="text-gray-300 text-xs sm:text-sm mt-1 sm:mt-2">{project.description}</p>
              <Link href={project.link} className="mt-3">
                <span className="inline-block bg-white text-black px-4 sm:px-6 py-2 rounded-full font-medium uppercase tracking-wide hover:bg-gray-300 transition text-xs sm:text-sm">
                  View Project
                </span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔹 Scrolling Background Effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        animate={{ y: -scrollY * 0.3 }}
      >
        <div className="absolute w-[800px] sm:w-[1000px] h-[800px] sm:h-[1000px] bg-blue-600 opacity-10 blur-3xl top-[20%] left-[50%] transform -translate-x-1/2" />
      </motion.div>
    </section>
  );
}