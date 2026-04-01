// UI: Animated number counter that counts up to a target value when scrolled into view
"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  endValue: string; // E.g. "500+" or "+5" or "24/7"
  label: string;
}

export default function StatCounter({ endValue, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract numeric part for counting if applicable
  const numericMatch = endValue.match(/\d+/);
  const numTarget = numericMatch ? parseInt(numericMatch[0]) : null;
  const isFraction = endValue.includes("/"); // e.g. "24/7"

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || !numTarget || isFraction) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      // ease-out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easedProgress * numTarget));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, numTarget, isFraction]);

  // Reconstruct display value
  const displayValue = () => {
    if (isFraction || !numTarget) return endValue;
    return endValue.replace(numTarget.toString(), count.toString());
  };

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-4">
      <div className="font-bebas text-4xl text-gold md:text-5xl">
        {isInView ? displayValue() : "0"}
      </div>
      <div className="mt-2 text-sm font-bold tracking-wide text-muted uppercase">
        {label}
      </div>
    </div>
  );
}
