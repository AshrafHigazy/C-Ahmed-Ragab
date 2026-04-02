// Section: Your program includes — grid of features
"use client";

import { motion } from "framer-motion";
import { useLang } from "../../context/LanguageContext";

// --- Custom Inline SVGs ---

// Card 1: WhatsApp / Chat Bubble SVG
const ChatIcon = (props: any) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M40 70C23.4315 70 10 56.5685 10 40C10 23.4315 23.4315 10 40 10C56.5685 10 70 23.4315 70 40C70 45.4578 68.5414 50.5731 65.98 55.05L70 70L55.05 65.98C50.5731 68.5414 45.4578 70 40 70Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M30 25C28.3431 25 27 26.3431 27 28C27 41.2548 37.7452 52 51 52C52.6569 52 54 50.6569 54 49V43C54 41.8954 53.1046 41 52 41H46.5C45.3954 41 44.5 41.8954 44.5 43V45C41 43 38 40 36 36.5H38C39.1046 38 40 37.1046 40 36V30.5C40 29.3954 39.1046 28.5 38 28.5H32C30.8954 28.5 30 27.6046 30 26.5V25Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
  </svg>
);

// Card 2: Stationary Bike / Cardio
const BikeIcon = (props: any) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="20" cy="60" r="10" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="60" cy="60" r="10" stroke="currentColor" strokeWidth="1.2" />
    <path d="M20 60L35 35L55 35L60 60" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M35 35L30 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M25 20H35" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M55 35L45 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M42 20C42 20 45 15 50 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M33 40H47" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

// Card 3: Diet / Plate Bowl
const DietIcon = (props: any) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M10 40C10 56.5685 23.4315 70 40 70C56.5685 70 70 56.5685 70 40H10Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M25 40V30C25 24.4772 29.4772 20 35 20H45C50.5228 20 55 24.4772 55 30V40" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M40 20V12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M33 15V12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M47 15V12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

// Card 4: Stretching Person / Yoga
const StretchIcon = (props: any) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="40" cy="20" r="6" stroke="currentColor" strokeWidth="1.2" />
    <path d="M40 26V45" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M40 30L25 45L15 45" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M40 30L55 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M40 45L25 70" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M40 45L55 60L70 60" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Card 5: Dumbbell / Weight
const DumbbellIcon = (props: any) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M25 40H55" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <rect x="15" y="25" width="10" height="30" rx="2" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    <rect x="55" y="25" width="10" height="30" rx="2" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    <rect x="8" y="32" width="7" height="16" rx="1" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    <rect x="65" y="32" width="7" height="16" rx="1" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
  </svg>
);

// Card 6: Doctor / Stethoscope
const DoctorIcon = (props: any) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="40" cy="25" r="10" stroke="currentColor" strokeWidth="1.2" />
    <path d="M20 65C20 53.9543 28.9543 45 40 45C51.0457 45 60 53.9543 60 65" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M30 46V55C30 60.5228 34.4772 65 40 65C45.5228 65 50 60.5228 50 55" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="40" cy="65" r="4" stroke="currentColor" strokeWidth="1.2" />
    <path d="M35 55H45" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const ICONS = [ChatIcon, BikeIcon, DietIcon, StretchIcon, DumbbellIcon, DoctorIcon];

export default function ProgramIncludes() {
  const { t, dir } = useLang();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="bg-[#EFEFEF] py-20 px-6 md:px-12 overflow-hidden scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, x: dir === "rtl" ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-heading text-5xl md:text-7xl uppercase leading-none" style={{ fontFamily: "var(--font-barlow), Impact, sans-serif", fontWeight: 900 }}>
            <span className="block text-black">{t.programTitle1}</span>
            <span className="block text-[#CC2200]">{t.programTitle2}</span>
          </h2>
          <p className="mt-4 max-w-2xl text-gray-600 text-sm md:text-base leading-relaxed">
            {t.programDesc}
          </p>
        </motion.div>

        {/* Grid Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-3 md:gap-4"
        >
          {t.programCards?.map((card: any, idx: number) => {
            const Icon = ICONS[idx];

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="relative flex flex-col items-center justify-center rounded-2xl bg-white p-8 md:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-[1.015] min-h-[200px] md:min-h-[220px]"
              >
                {/* Icon */}
                <div className="mx-auto w-20 h-20 mb-4 flex items-center justify-center">
                  <Icon className="w-[80px] h-[80px] text-[#999999]" />
                </div>

                {/* Title */}
                <h3 className="text-center font-heading font-bold text-lg md:text-xl text-[#111111] uppercase tracking-wide">
                  {card.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
