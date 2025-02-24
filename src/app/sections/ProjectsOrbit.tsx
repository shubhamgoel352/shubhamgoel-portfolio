"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
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

export default function ProjectsOrbit() {
  const CARD_WIDTH = 240; // in px
  const GAP = 8; // in px (tighter spacing)
  const SPEED = 1.0; // increased auto-scroll speed
  const itemWidth = CARD_WIDTH + GAP;
  const totalWidth = itemWidth * marqueeItems.length;
  const containerWidth = 1000; // assumed container width for convex scaling

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
          {marqueeItems.map((item, i) => {
            const basePos = i * itemWidth + CARD_WIDTH / 2;
            const scale = useTransform(x, (currentX) => {
              const effectivePos = basePos + currentX;
              const center = containerWidth / 2;
              const distance = Math.abs(effectivePos - center);
              const maxDistance = 250; // reduce this for a stronger effect
              const scaleFactor = 0.3; // further from center scales down to 0.7
              const computedScale = 1 - Math.min(distance / maxDistance, 1) * scaleFactor;
              return computedScale;
            });

            return (
              <motion.div
                key={`${item.title}-${i}`}
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
          })}
        </motion.div>
      </div>
    </section>
  );
}