"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { FaShieldAlt, FaCloud, FaBrain, FaBars, FaTimes } from "react-icons/fa"; 

const projectData = {
  healthsafety: {
    title: "Health & Safety Data Migration",
    tagline: "Transforming Data Management for a Secure, Scalable Future",
    description:
      "Our mission was to revolutionize how Health, Safety, and Environment (HSE) data is stored, accessed, and secured. By transitioning from an outdated on-premise system to a cutting-edge Azure Cloud infrastructure, we enhanced security, compliance, and efficiency—ensuring seamless operations and future-proof resilience.",
    video: "/health_safety_data_migration.mp4",
    sections: [
      {
        title: "Business Objective",
        icon: <FaShieldAlt size={28} className="text-white mb-2" />,
        content: `
          <span class="highlight">Goal:</span> Modernize data security & accessibility.<br/>
          Migrated outdated on-premise data to a <span class="highlight">highly secure cloud infrastructure</span>.<br/>
          Achieved <span class="highlight">seamless accessibility & compliance</span> for industry regulations.<br/>
          Eliminated <span class="highlight">scalability issues & security vulnerabilities</span>.
        `,
      },
      {
        title: "Execution",
        icon: <FaCloud size={28} className="text-white mb-2" />,
        content: `
          <span class="highlight">Conducted</span> a strategic audit to classify HSE data.<br/>
          <span class="highlight">Collaborated</span> with Azure Cloud architects to design a secure, scalable solution.<br/>
          <span class="highlight">Developed & implemented a migration plan</span> ensuring <span class="highlight">zero downtime</span>.<br/>
          <span class="highlight">Integrated advanced security measures</span> for compliance & risk mitigation.
        `,
      },
      {
        title: "Results & Impact",
        icon: <FaBrain size={28} className="text-white mb-2" />,
        content: `
          <span class="highlight">Boosted data accessibility</span> for real-time collaboration.<br/>
          <span class="highlight">Enhanced security & compliance</span>, aligning with industry standards.<br/>
          <span class="highlight">Optimized disaster recovery</span>, ensuring uninterrupted business continuity.<br/>
          <span class="highlight">Leveraged AI-driven insights</span> for predictive analytics.
        `,
      },
    ],
  },
};

export default function ProjectPage() {
  const { projectSlug } = useParams();
  const project = projectData[projectSlug as keyof typeof projectData];
  const [menuOpen, setMenuOpen] = useState(false);

  if (!project) {
    return <h1 className="text-center text-white text-3xl mt-20">Project Not Found</h1>;
  }

  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col items-center px-4 sm:px-12 py-16">
      
      {/* Sticky Header - Mobile & Desktop */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 sm:px-8 py-4 bg-black bg-opacity-80 backdrop-blur-md z-50">
        <h1 className="text-white text-lg sm:text-xl font-semibold uppercase tracking-widest">
          Shubham Goel
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex space-x-6 text-sm font-medium">
          <Link href="/projects">
            <span className="text-gray-300 hover:text-white transition-colors uppercase cursor-pointer">Projects</span>
          </Link>
          <Link href="/about">
            <span className="text-gray-300 hover:text-white transition-colors uppercase cursor-pointer">About</span>
          </Link>
        </nav>

        {/* Contact Me Button */}
        <button className="hidden sm:block border border-white text-white px-4 py-2 rounded-full text-xs uppercase hover:bg-white hover:text-black transition">
          Contact Me
        </button>

        {/* Mobile Menu Icon */}
        <button className="sm:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center z-40 sm:hidden">
          <Link href="/projects" className="text-white text-xl py-2" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link href="/about" className="text-white text-xl py-2" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <button className="mt-4 border border-white text-white px-6 py-2 rounded-full text-lg uppercase hover:bg-white hover:text-black transition">
            Contact Me
          </button>
        </div>
      )}

      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video className="w-full h-full object-cover opacity-50" autoPlay loop muted playsInline>
          <source src={project.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      {/* Hero Section */}
      <motion.div
        className="relative text-center mt-24 max-w-5xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-6xl font-bold uppercase tracking-wide">{project.title}</h1>
        <p className="text-lg sm:text-2xl text-gray-300 mt-3">{project.tagline}</p>
        <p className="mt-6 text-md sm:text-xl text-gray-300 max-w-4xl mx-auto text-center">{project.description}</p>
      </motion.div>

      {/* Project Details Sections */}
      <div className="w-full max-w-6xl mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {project.sections.map((section, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg bg-gray-900 bg-opacity-90 shadow-lg backdrop-blur-md border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <div className="flex justify-center">{section.icon}</div>
            <h2 className="text-xl sm:text-2xl font-bold uppercase text-white mb-4 text-center">{section.title}</h2>
            <p className="text-gray-300 text-sm sm:text-md whitespace-pre-line" dangerouslySetInnerHTML={{ __html: section.content }} />
          </motion.div>
        ))}
      </div>

      {/* Explore More Projects Button - Always Visible */}
      <motion.div
        className="relative flex justify-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Link href="/projects">
          <span className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium uppercase tracking-wide hover:bg-gray-300 transition cursor-pointer">
            Explore More Projects
          </span>
        </Link>
      </motion.div>

      <style jsx>{`
        .highlight {
          color: rgb(238, 123, 117);
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}