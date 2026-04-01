// Section: Displays coaching packages with pricing tiers (30 / 90 / 180 days)
"use client";

import { motion } from "framer-motion";
import { useLang } from "../../context/LanguageContext";
import { WHATSAPP_LINK } from "../../lib/constants";

export default function PricingPackages() {
  const { t } = useLang();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="packages" className="bg-black px-6 py-24 md:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-bebas text-5xl text-text md:text-6xl lg:text-7xl">
            {t.pricingTitle}
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 bg-brick rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch"
        >
          {t.pricingPackages.map((pkg, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`relative flex w-full max-w-sm flex-col rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] lg:w-1/3 ${
                pkg.primary
                  ? "bg-surface border-2 border-gold pb-10 pt-12 shadow-[0_0_40px_rgba(245,166,35,0.1)] lg:-mt-6 lg:mb-6 z-10"
                  : "bg-surface/80 border border-border mt-0 lg:mt-6"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-sm font-bold text-black uppercase tracking-wider shadow-lg">
                  {pkg.badge}
                </div>
              )}

              <h3 className="font-bebas mb-6 text-center text-5xl text-gold">
                {pkg.duration}
              </h3>

              <div className="mb-8 text-center flex items-end justify-center gap-2">
                <span className="text-5xl font-bold text-white tracking-tight">
                  {pkg.price}
                </span>
                <span className="mb-2 text-lg font-bold text-muted uppercase">
                  {pkg.currency}
                </span>
              </div>

              <p className="mb-10 flex-grow text-center text-lg text-muted">
                {pkg.desc}
              </p>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex w-full items-center justify-center rounded-xl py-4 text-xl font-bold transition-all duration-300 hover:scale-[1.02] ${
                  pkg.primary
                    ? "bg-gold text-black hover:bg-brick hover:text-white"
                    : "bg-border text-text hover:bg-gold hover:text-black"
                }`}
              >
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
