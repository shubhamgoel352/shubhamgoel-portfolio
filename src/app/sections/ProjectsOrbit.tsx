"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";

const projectsData = [
  { title: "Visual Identity", href: "/projects/visual-identity" },
  { title: "Brand Guidelines", href: "/projects/brand-guidelines" },
  { title: "Landing Pages", href: "/projects/landing-pages" },
  { title: "Campaigns", href: "/projects/campaigns" },
  { title: "Packaging Design", href: "/projects/packaging-design" },
  { title: "Prototyping", href: "/projects/prototyping" },
  { title: "Art Direction", href: "/projects/art-direction" },
  { title: "Product Design", href: "/projects/product-design" },
];

const marqueeItems = [...projectsData, ...projectsData];

interface ProjectCardProps {
  item: { title: string; href: string };
  index: number;
  x: MotionValue<number>;
  containerWidth: number;
  itemWidth: number;
  CARD_WIDTH: number;
  GAP: number;
}

export function ProjectCard({
  item,
  index,
  x,
  containerWidth,
  itemWidth,
  CARD_WIDTH,
  GAP,
}: ProjectCardProps) {
  const basePos = index * itemWidth + CARD_WIDTH / 2;
  const scale = useTransform(x, (currentX: number) => {
    const effectivePos = basePos + currentX;
    const center = containerWidth / 2;
    const distance = Math.abs(effectivePos - center);
    const maxDistance = 250; // for a stronger effect, reduce this value
    const scaleFactor = 0.3; // scales down to 0.7 at farthest
    return 1 - Math.min(distance / maxDistance, 1) * scaleFactor;
  });

  return (
    <motion.div
      className="flex-shrink-0 h-64"
      style={{ width: CARD_WIDTH, marginRight: GAP, scale }}
    >
      <motion.div
        className="bg-gray-800 rounded-xl shadow-md h-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href={item.href}
          className="text-center px-4 flex items-center justify-center h-full w-full"
        >
          {item.title}
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsOrbit() {
  // Dynamically update container width and card width for mobile responsiveness.
  const [containerWidth, setContainerWidth] = useState<number>(1000);
  const [CARD_WIDTH, setCardWidth] = useState<number>(240);
  const GAP = 8; // in px
  const SPEED = 1.0; // auto-scroll speed in pixels per frame

  useEffect(() => {
    const handleResize = () => {
      const winWidth = window.innerWidth;
      // Use the smaller of window width and 1000 as container width.
      setContainerWidth(winWidth < 1000 ? winWidth : 1000);
      // For very small screens, reduce card width proportionally.
      setCardWidth(winWidth < 600 ? winWidth * 0.8 : 240);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemWidth = CARD_WIDTH + GAP;
  const totalWidth = itemWidth * marqueeItems.length;

  const [isDragging, setIsDragging] = useState(false);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const x = useMotionValue(0);
  const wheelTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let frame: number;
    const loop = () => {
      if (!isDragging && !isUserScrolling) {
        x.set(x.get() - SPEED);
        if (x.get() <= -totalWidth / 2) {
          x.set(0);
        }
      }
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [isDragging, isUserScrolling, totalWidth, x]);

  const handleWheel = () => {
    setIsUserScrolling(true);
    if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
    wheelTimeoutRef.current = setTimeout(() => {
      setIsUserScrolling(false);
    }, 1000);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setIsUserScrolling(false);
  };

  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center justify-center overflow-hidden text-white">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wider">
        Projects I Specialize In
      </h2>
      <p className="text-gray-400 mb-8 uppercase">Hover, Drag or Scroll</p>
      <div className="w-full overflow-hidden" onWheel={handleWheel}>
        <motion.div
          className="flex gap-2"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -totalWidth, right: 0 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
        >
          {marqueeItems.map((item, i) => (
            <ProjectCard
              key={`${item.title}-${i}`}
              item={item}
              index={i}
              x={x}
              containerWidth={containerWidth}
              itemWidth={itemWidth}
              CARD_WIDTH={CARD_WIDTH}
              GAP={GAP}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}