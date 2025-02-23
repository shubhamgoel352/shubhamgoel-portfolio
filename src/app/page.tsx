import { Metadata } from "next";
import { Inter } from "next/font/google";
import Hero from "./sections/Hero";
import About from "./sections/AboutPreview";
import Projects from "./sections/Projects";
import AboutPreview from "./sections/AboutPreview";

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
      <Projects />
    </main>
  );
}