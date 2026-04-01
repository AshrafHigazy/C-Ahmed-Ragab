// Section: Auto-playing transformation photos slider
"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLang } from "../../context/LanguageContext";

const IMAGES = [
  "/images/transformations/t1.jpg",
  "/images/transformations/t2.jpg",
  "/images/transformations/t3.jpg",
  "/images/transformations/t4.jpg",
  "/images/transformations/t5.jpg",

];

const AUTO_PLAY_INTERVAL = 2000;

export default function TransformationSlider() {
  const { t } = useLang();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const goNext = useCallback(() => {
    const next = (current + 1) % IMAGES.length;
    setDirection(1);
    setCurrent(next);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(goNext, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [goNext]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const SLIDE_TRANSITION = { duration: 0.55, ease: "easeInOut" as const };

  return (
    <section id="transformations" className="bg-black px-6 py-24 md:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-bebas text-5xl text-text md:text-6xl lg:text-7xl">
            {t.transformationsTitle}
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 bg-gold rounded-full" />
        </motion.div>

        {/* Slider Container */}
        <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-3xl border border-border shadow-[0_0_40px_rgba(0,0,0,0.6)]">
          {/* 1:1 aspect ratio = 1280x1280 */}
          <div className="relative aspect-square w-full">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={SLIDE_TRANSITION}
                className="absolute inset-0"
              >
                <Image
                  src={IMAGES[current]}
                  alt={`Transformation ${current + 1}`}
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                  priority={current === 0}
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                idx === current
                  ? "w-8 h-3 bg-gold shadow-[0_0_8px_rgba(245,166,35,0.6)]"
                  : "w-3 h-3 bg-border hover:bg-gold/50"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}