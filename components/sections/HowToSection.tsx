// Section: Step-by-step guide on how to subscribe and start coaching
"use client";

import { motion } from "framer-motion";
import { CreditCard, MessageCircle, Dumbbell, UserCheck } from "lucide-react";
import { useLang } from "../../context/LanguageContext";

export default function HowToSection() {
  const { t } = useLang();

  // Map step index to icons
  const ICONS = [CreditCard, MessageCircle, Dumbbell, UserCheck];

  return (
    <section id="howto" className="bg-[#F5F5F5] px-6 py-24 md:px-12 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <h2 className="font-heading font-bold uppercase leading-none text-black mt-8" style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
            <span className="block">{t.howToTitle1}</span>
            <span className="block">{t.howToTitle2}</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8 max-w-xl mx-auto">
          {t.howToSteps?.map((step: any, idx: number) => {
            const Icon = ICONS[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative flex flex-col items-center"
              >
                {/* Number Watermark & Icon Container */}
                <div className="relative mb-6">
                  {/* Number Watermark */}
                  <span className="absolute -top-4 -right-6 text-7xl md:text-8xl font-black text-black/5 z-0 select-none">
                    {idx + 1}
                  </span>
                  
                  {/* Icon Circle */}
                  <div className="relative z-10 flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-full bg-white border border-[#E5E5E5] shadow-sm">
                    <Icon className="h-10 w-10 text-black" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Subtitle / Desc */}
                <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase text-black text-center mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-[#666666] text-center text-base md:text-lg max-w-[300px]">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
