import type { Metadata } from "next";
import { Cairo, Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coachragab.com"),
  title: "كابتن أحمد رجب | للتدريب الاون لاين",
  description: "انضم إلى أكثر من 500+ مشترك وحقق أفضل نسخة من نفسك مع كابتن أحمد رجب. خطط تدريب وتغذية مخصصة ومتابعة 24/7.",
  openGraph: {
    locale: "ar_EG",
    type: "website",
    title: "كابتن أحمد رجب | للتدريب الاون لاين",
    description: "حقق أفضل نسخة من نفسك مع خطط التدريب والتغذية المخصصة من كابتن أحمد رجب.",
    url: "https://coachragab.com",
    siteName: "Coach Ahmed Ragab",
    images: [{ url: "/images/hero-bg.jpg", width: 1200, height: 630, alt: "Coach Ahmed Ragab Transformation" }],
  },
  twitter: {
    card: "summary_large_image",
      title: "كابتن أحمد رجب | كوتشينج وتدريب أونلاين",
    description: "حقق أفضل نسخة من نفسك مع خطط التدريب والتغذية المخصصة من كابتن أحمد رجب.",
    images: ["/images/hero-bg.jpg"],
  },
  alternates: {
    canonical: "https://coachragab.com",
    languages: { "ar-EG": "https://coachragab.com", "en-US": "https://coachragab.com/en" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "HealthAndBeautyBusiness"],
        "@id": "https://coachragab.com/#organization",
        name: "Coach Ahmed Ragab",
        url: "https://coachragab.com",
        logo: { "@type": "ImageObject", url: "https://coachragab.com/images/hero-bg.jpg", caption: "Coach Ahmed Ragab Logo" },
        image: "https://coachragab.com/images/hero-bg.jpg",
        description: "An elite online fitness & nutrition coach dedicated to transforming your body and lifestyle through tailored, science-based approaches.",
        telephone: "+201115584417",
        contactPoint: { "@type": "ContactPoint", telephone: "+201115584417", contactType: "customer support", areaServed: "EG", availableLanguage: ["Arabic", "English"] },
        sameAs: ["https://www.instagram.com/coachragab?igsh=dnNlYzVwd2VjeXZz", "https://www.facebook.com/share/18agxWW9wq/", "https://www.tiktok.com/@coach.ragab"]
      },
      {
        "@type": "Person",
        "@id": "https://coachragab.com/#person",
        name: "Ahmed Ragab",
        jobTitle: "Fitness Trainer",
        url: "https://coachragab.com",
        image: "https://coachragab.com/images/hero-bg.jpg",
        sameAs: ["https://www.instagram.com/coachragab?igsh=dnNlYzVwd2VjeXZz", "https://www.facebook.com/share/18agxWW9wq/", "https://www.tiktok.com/@coach.ragab"]
      }
    ]
  };

  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} ${cairo.variable} ${barlowCondensed.variable} h-full antialiased font-sans scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans transition-colors duration-300">
        <Script id="schema-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
        <LanguageProvider>
          {children}
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}


