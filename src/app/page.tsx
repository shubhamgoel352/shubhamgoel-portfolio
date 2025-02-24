import { Metadata } from "next";
import { Inter } from "next/font/google";
import Hero from "./sections/Hero";
import AboutPreview from "./sections/AboutPreview";
import ProjectsOrbit from "./sections/ProjectsOrbit";


const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Shubham Goel - AI & Tech Innovator",
  description: "A multi-disciplinary designer and AI strategist.",
};

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Hero />
      <AboutPreview />
      <ProjectsOrbit />
    </main>
  );
}