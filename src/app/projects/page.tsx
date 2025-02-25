"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
      {/* Hero Section */}
      <div className="relative h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-wide"
        >
          Explore My Work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl"
        >
          A collection of projects that define the intersection of creativity, technology, and impact.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12 lg:px-20 py-20">
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
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p className="text-gray-300 text-sm mt-2">{project.description}</p>
              <Link href={project.link} className="mt-4">
                <span className="inline-block bg-white text-black px-6 py-2 rounded-full font-medium uppercase tracking-wide hover:bg-gray-300 transition">
                  View Project
                </span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scrolling Background Effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        animate={{ y: -scrollY * 0.3 }}
      >
        <div className="absolute w-[1000px] h-[1000px] bg-blue-600 opacity-10 blur-3xl top-[20%] left-[50%] transform -translate-x-1/2" />
      </motion.div>
    </section>
  );
}