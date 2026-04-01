// UI: Floating WhatsApp CTA button — fixed position, RTL-aware, pulse animation
"use client";

import { motion } from "framer-motion";
import { useLang } from "../../context/LanguageContext";
import { WHATSAPP_LINK } from "../../lib/constants";

export default function WhatsAppButton() {
  const { dir } = useLang();

  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.4, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className={`fixed bottom-6 z-50 flex h-[52px] w-[52px] items-center justify-center rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.45)] ${
        dir === "rtl" ? "left-6" : "right-6"
      }`}
      style={{ backgroundColor: "#25D366" }}
    >
      {/* Pulse ring */}
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: "#25D366" }}
        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="relative z-10 h-7 w-7"
        aria-hidden="true"
      >
        <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.66 4.77 1.81 6.76L2 30l7.45-1.78A13.93 13.93 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2Zm0 25.5a11.44 11.44 0 0 1-5.84-1.6l-.42-.25-4.42 1.06 1.1-4.3-.28-.44A11.46 11.46 0 0 1 4.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5Zm6.3-8.57c-.34-.17-2.03-1-2.34-1.12-.32-.11-.55-.17-.78.17-.23.34-.9 1.12-1.1 1.35-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.75-1.7-1.01-.9-1.7-2.01-1.9-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.57-.28-.67-.57-.58-.78-.59h-.67c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.86s1.23 3.32 1.4 3.55c.17.23 2.41 3.68 5.84 5.16.82.35 1.45.56 1.95.72.82.26 1.56.22 2.15.13.65-.1 2.03-.83 2.32-1.63.29-.8.29-1.48.2-1.63-.08-.15-.31-.23-.65-.4Z" />
      </svg>
    </motion.a>
  );
}
