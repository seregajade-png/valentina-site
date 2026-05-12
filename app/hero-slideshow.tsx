"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const SLIDES = [
  "/assets/projects/living-1.jpg",
  "/assets/projects/living-3.jpg",
  "/assets/projects/living-7.jpg",
  "/assets/projects/kitchen-3.jpg",
  "/assets/projects/kitchen-7.jpg",
];

const INTERVAL_MS = 5500;
const FADE_MS = 1400;

export function HeroSlideshow() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((p) => (p + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-panel">
      <AnimatePresence initial={false}>
        <motion.div
          key={SLIDES[idx]}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_MS / 1000, ease: "easeInOut" }}
        >
          <Image
            src={SLIDES[idx]}
            alt="Интерьер от Valentina Захряловой"
            fill
            sizes="100vw"
            className="object-cover"
            priority={idx === 0}
          />
        </motion.div>
      </AnimatePresence>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,.25) 0%, rgba(0,0,0,.35) 50%, rgba(0,0,0,.6) 100%)",
        }}
      />

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <span
            key={i}
            className="h-[2px] w-8 rounded-full transition-colors duration-300"
            style={{ background: i === idx ? "var(--color-accent)" : "rgba(255,255,255,.25)" }}
          />
        ))}
      </div>
    </div>
  );
}
