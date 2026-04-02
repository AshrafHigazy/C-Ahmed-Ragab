// Section: Displays coaching packages with categories (Nutrition / Membership)
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Apple, Zap, Timer } from "lucide-react";
import { useLang } from "../../context/LanguageContext";
import SubscriptionForm from "../ui/SubscriptionForm";

export default function PricingPackages() {
  const { t, dir } = useLang();
  const [selectedPackage, setSelectedPackage] = useState<{
    name: string;
    price: string;
  } | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      {selectedPackage && (
        <SubscriptionForm
          packageName={selectedPackage.name}
          packagePrice={selectedPackage.price}
          onClose={() => setSelectedPackage(null)}
        />
      )}

      <section id="packages" className="bg-black px-6 py-24 md:px-12 lg:py-32 scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="font-heading font-bold uppercase text-5xl text-white md:text-6xl lg:text-7xl">
              {t.pricingTitle}
            </h2>
            <div className="mx-auto mt-6 h-1 w-24 bg-gold rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 xl:gap-16">
            {t.pricingCategories?.map((category: any, catIdx: number) => {
              const HeaderIcon = catIdx === 0 ? Apple : Zap;
              return (
                <motion.div
                  key={catIdx}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex flex-col"
                >
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <HeaderIcon className="w-8 h-8 text-gold" />
                    <h3 className="font-heading text-3xl md:text-4xl uppercase text-white font-bold">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 h-full">
                    {category.packages.map((pkg: any, idx: number) => (
                      <motion.div
                        key={idx}
                        variants={cardVariants}
                        className={`relative flex w-full flex-col rounded-3xl p-6 sm:p-8 flex-1 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] ${pkg.featured
                            ? "bg-[#0F0F0F] border-2 border-gold shadow-[0_0_30px_rgba(245,197,24,0.1)]"
                            : "bg-[#0F0F0F] border border-[#1A1A1A]"
                          }`}
                      >
                        {pkg.badge && (
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs sm:text-sm font-bold text-black uppercase tracking-wider flex items-center gap-1 shadow-lg whitespace-nowrap">
                            <Timer className="w-4 h-4" />
                            {pkg.badge}
                          </div>
                        )}
                        {pkg.percentage && (
                          <div className={`absolute top-4 ${dir === "rtl" ? "left-4" : "right-4"} rounded-lg bg-[#CC2200]/20 border border-[#CC2200]/40 px-2 py-1 text-xs font-bold text-[#CC2200]`}>
                            {dir === "rtl" ? `خصم ${pkg.percentage}%` : `Save ${pkg.percentage}%`}
                          </div>
                        )}

                        <h4 className="font-heading mb-4 text-center text-4xl text-white uppercase mt-4">
                          {pkg.duration}
                        </h4>

                        <div className="mb-8 flex flex-col items-center justify-center border-b border-white/5 pb-8">
                         <div className="relative text-muted text-lg font-bold mb-1 w-fit mx-auto">
                          {pkg.originalPrice} {pkg.currency}
                           <span className="absolute inset-x-0 top-1/2 h-[1.5px] bg-gold -translate-y-1/2 opacity-70" />
                           </div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-5xl lg:text-6xl font-bold text-gold tracking-tight">
                              {pkg.salePrice}
                            </span>
                            <span className="text-lg font-bold text-gold uppercase">
                              {pkg.currency}
                            </span>
                          </div>
                        </div>

                        <ul className="mb-10 flex flex-col gap-4 flex-grow">
                          {pkg.features.map((feature: string, fIdx: number) => (
                            <li key={fIdx} className="flex items-start gap-3 text-white/80">
                              <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                              <span className="text-sm md:text-base leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <button
                          onClick={() =>
                            setSelectedPackage({
                              name: `${category.title} — ${pkg.duration}`,
                              price: `${pkg.salePrice} ${pkg.currency}`,
                            })
                          }
                          className={`flex w-full items-center justify-center rounded-xl py-4 text-lg font-bold transition-all duration-300 hover:scale-[1.02] ${pkg.featured
                              ? "bg-gold text-black hover:bg-white"
                              : "bg-[#1A1A1A] text-white hover:bg-gold hover:text-black"
                            }`}
                        >
                          {pkg.cta}
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
