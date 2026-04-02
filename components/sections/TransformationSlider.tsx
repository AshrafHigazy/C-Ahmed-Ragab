// Section: Manual transformation photos slider
"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useLang } from "../../context/LanguageContext";

const IMAGES = [
  "/images/transformations/t1.jpg",
  "/images/transformations/t2.jpg",
  "/images/transformations/t3.jpg",
  "/images/transformations/t4.jpg",
  "/images/transformations/t5.jpg",
];

export default function TransformationSlider() {
  const { t, dir } = useLang();
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

  const goPrev = useCallback(() => {
    const prev = current === 0 ? IMAGES.length - 1 : current - 1;
    setDirection(-1);
    setCurrent(prev);
  }, [current]);

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
    <section id="transformations" className="bg-black px-6 py-24 md:px-12 lg:py-32 scroll-mt-20">
      <div className="mx-auto max-w-6xl">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-2 text-[13px] md:text-sm font-bold tracking-[0.2em] text-brick uppercase">
            [ COACH RAGAB ]
          </div>
          <h2 className="font-heading text-5xl text-white md:text-6xl lg:text-7xl uppercase mb-4">
            {t.transformationsTitle}
          </h2>
          <p className="mx-auto max-w-2xl text-xs md:text-sm font-bold uppercase tracking-widest text-white/50">
            {t.transformationsSubtitle}
          </p>
          <div className="mx-auto mt-8 h-1 w-24 bg-gold rounded-full" />
        </motion.div>

        {/* Slider Layout Wrapper */}
        <div className="relative mx-auto flex items-center justify-center gap-4 sm:gap-8 max-w-[1000px]">
          
          {/* Left Arrow */}
          <button
            onClick={dir === "rtl" ? goNext : goPrev}
            className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-black border border-border text-white transition-colors hover:border-gold hover:text-gold"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Slider Container */}
          <div className="relative w-full overflow-hidden rounded-3xl border border-border shadow-[0_0_40px_rgba(0,0,0,0.6)]">
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
                    sizes="(max-width: 768px) 100vw, 1000px"
                    priority={current === 0}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Right Arrow */}
          <button
            onClick={dir === "rtl" ? goPrev : goNext}
            className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-black border border-border text-white transition-colors hover:border-gold hover:text-gold"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
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

        {/* Instagram CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://www.instagram.com/coachragab?igsh=dnNlYzVwd2VjeXZz"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-border bg-black px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-gold hover:text-gold"
          >
            {t.transformationsCta}
            <ArrowUpRight className="h-5 w-5 text-white transition-colors group-hover:text-gold" />
          </a>
        </div>

      </div>
    </section>
  );
}