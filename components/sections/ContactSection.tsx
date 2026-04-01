// Section: Final CTA with WhatsApp button and social media links
"use client";

import { motion } from "framer-motion";
import { useLang } from "../../context/LanguageContext";
import { WHATSAPP_LINK, SOCIAL_LINKS } from "../../lib/constants";

// Custom TikTok SVG Icon
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.5-1.01 5-2.81 6.64-1.83 1.67-4.32 2.5-6.81 2.22-2.65-.29-5.11-1.74-6.52-3.95-1.29-1.99-1.64-4.52-1.02-6.8.69-2.58 2.62-4.66 5.15-5.46 1.48-.48 3.08-.55 4.61-.2v4.06c-1.1-.24-2.27-.14-3.28.32-.98.42-1.78 1.22-2.18 2.21-.49 1.14-.42 2.47.16 3.53.53.94 1.43 1.62 2.5 1.87 1.25.27 2.62.06 3.67-.62 1.05-.67 1.72-1.79 1.81-3.03.11-1.24.04-2.51.04-3.76V.02h2.57Z" />
  </svg>
);

// Custom WhatsApp SVG Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
);

// Custom Instagram SVG Icon
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// Custom Facebook SVG Icon
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function ContactSection() {
  const { t } = useLang();

  return (
    <section id="contact" className="bg-gradient-to-b from-brick to-[#8a2e1e] px-6 py-24 text-center md:px-12 lg:py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-4xl flex-col items-center justify-center"
      >
        <h2 className="font-bebas mb-4 text-5xl tracking-wide text-white md:text-6xl lg:text-7xl drop-shadow-md">
          {t.contactTitle}
        </h2>
        
        <p className="mb-12 text-xl font-bold text-white/90">
          {t.contactSubtext}
        </p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-16 flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-xl font-black text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#20b858] hover:shadow-2xl active:scale-95"
          aria-label="Contact via WhatsApp"
        >
          <WhatsAppIcon className="h-8 w-8" />
          <span dir="ltr">{t.whatsappBtn}</span>
        </a>

        {/* Social Links Row */}
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
