// Section: Social media links only
"use client";

import { motion } from "framer-motion";
import { useLang } from "../../context/LanguageContext";
import { SOCIAL_LINKS } from "../../lib/constants";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.5-1.01 5-2.81 6.64-1.83 1.67-4.32 2.5-6.81 2.22-2.65-.29-5.11-1.74-6.52-3.95-1.29-1.99-1.64-4.52-1.02-6.8.69-2.58 2.62-4.66 5.15-5.46 1.48-.48 3.08-.55 4.61-.2v4.06c-1.1-.24-2.27-.14-3.28.32-.98.42-1.78 1.22-2.18 2.21-.49 1.14-.42 2.47.16 3.53.53.94 1.43 1.62 2.5 1.87 1.25.27 2.62.06 3.67-.62 1.05-.67 1.72-1.79 1.81-3.03.11-1.24.04-2.51.04-3.76V.02h2.57Z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function ContactSection() {
  const { lang } = useLang();

  return (
    <section id="contact" className="bg-gradient-to-b from-brick to-[#8a2e1e] px-6 py-24 text-center md:px-12 lg:py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-4xl flex-col items-center justify-center"
      >
        <p className="mb-8 text-sm font-bold uppercase tracking-[0.3em] text-white/70">
          {lang === "ar" ? "تابعنا" : "Follow Us"}
        </p>

        <div className="flex gap-6">
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-14 w-14 items-center justify-center rounded-full border border-white text-white transition-all duration-300 hover:border-gold hover:bg-gold hover:text-black"
            aria-label="Instagram Profile"
          >
            <InstagramIcon className="h-7 w-7 transition-transform group-hover:scale-110" />
          </a>
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-14 w-14 items-center justify-center rounded-full border border-white text-white transition-all duration-300 hover:border-gold hover:bg-gold hover:text-black"
            aria-label="Facebook Profile"
          >
            <FacebookIcon className="h-7 w-7 transition-transform group-hover:scale-110" />
          </a>
          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-14 w-14 items-center justify-center rounded-full border border-white text-white transition-all duration-300 hover:border-gold hover:bg-gold hover:text-black"
            aria-label="TikTok Profile"
          >
            <TikTokIcon className="h-7 w-7 transition-transform group-hover:scale-110" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
