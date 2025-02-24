import { Inter } from "next/font/google";
import Hero from "./sections/Hero";
import ProjectsOrbit from "./sections/ProjectsOrbit";
import AboutPreview from "./sections/AboutPreview";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
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