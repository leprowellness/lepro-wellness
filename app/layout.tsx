import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: {
    default: "LePro Wellness Center Ottawa | Physiotherapy, Massage & Athletic Therapy",
    template: "%s | LePro Wellness Center Ottawa",
  },
  description:
    "Ottawa's trusted wellness center at Suite 104 - 2 Gurdwara Road. Expert physiotherapy, registered massage therapy, athletic therapy & MVA rehabilitation. IFHP & WSIB accepted. Book today!",
  icons: {
    icon: [
      { url: "/logoo.png", type: "image/png", sizes: "32x32" },
      { url: "/logoo.png", type: "image/png", sizes: "96x96" },
      { url: "/logoo.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: { url: "/logoo.png", type: "image/png" },
    apple: { url: "/logoo.png", type: "image/png", sizes: "180x180" },
  },
  keywords: [
    "wellness center Ottawa",
    "wellness centre Ottawa",
    "physiotherapy Ottawa",
    "physiotherapist Ottawa",
    "massage therapy Ottawa",
    "registered massage therapist Ottawa",
    "RMT Ottawa",
    "athletic therapy Ottawa",
    "MVA rehabilitation Ottawa",
    "motor vehicle accident therapy Ottawa",
    "IFHP physiotherapy Ottawa",
    "WSIB physiotherapy Ottawa",
    "sports injury rehab Ottawa",
    "back pain treatment Ottawa",
    "neck pain physiotherapy Ottawa",
    "injury rehabilitation Ottawa",
    "chronic pain clinic Ottawa",
    "workplace injury therapy Ottawa",
    "physiotherapy near me Ottawa",
    "best physiotherapy clinic Ottawa",
    "Ottawa health clinic",
    "Ottawa rehabilitation center",
    "Nepean physiotherapy",
    "Barrhaven physiotherapy",
    "Kanata physiotherapy",
    "Gloucester physiotherapy",
    "South Ottawa physiotherapy",
    "Ottawa sports medicine",
    "Ottawa physical therapy",
    "2 Gurdwara Road Ottawa",
    "K2E 1A2 physiotherapy",
  ],
  authors: [{ name: "LePro Wellness Center", url: "https://www.leprowellnesscenter.ca" }],
  creator: "LePro Wellness Center",
  publisher: "LePro Wellness Center",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL("https://www.leprowellnesscenter.ca"),
  category: "health",
  alternates: { canonical: "https://www.leprowellnesscenter.ca" },
  openGraph: {
    title: "LePro Wellness Center Ottawa | Physiotherapy, Massage & Athletic Therapy",
    description:
      "Ottawa's trusted wellness center. Expert physiotherapy, massage therapy, athletic therapy & MVA rehabilitation. IFHP & WSIB accepted.",
    url: "https://www.leprowellnesscenter.ca",
    siteName: "LePro Wellness Center",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://www.leprowellnesscenter.ca/logoo.png",
        width: 1200,
        height: 630,
        alt: "LePro Wellness Center Ottawa — Physiotherapy & Wellness Services",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LePro Wellness Center Ottawa | Physiotherapy & Wellness",
    description: "Expert physiotherapy, massage therapy & athletic therapy in Ottawa. IFHP & WSIB accepted.",
    images: ["https://www.leprowellnesscenter.ca/logoo.png"],
    creator: "@leprowellness",
    site: "@leprowellness",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "x0iUP52O2ujRz8JnOk2B6fD9Rd_8eHIzUSvZQjzrk-A",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA">
      <head>
        {/* Geo targeting — Ottawa, Ontario */}
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Ottawa, Ontario" />
        <meta name="geo.position" content="45.3352;-75.7272" />
        <meta name="ICBM" content="45.3352, -75.7272" />

        {/* Canonical — always https://www */}
        <link rel="canonical" href="https://www.leprowellnesscenter.ca" />

        {/* Favicon — explicit links to ensure browser picks up */}
        <link rel="icon" href="/logoo.png" type="image/png" />
        <link rel="shortcut icon" href="/logoo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logoo.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme */}
        <meta name="theme-color" content="#059669" />
        <meta name="msapplication-TileColor" content="#059669" />
        <meta name="msapplication-TileImage" content="/logoo.png" />

        {/* Social */}
        <meta property="og:logo" content="https://www.leprowellnesscenter.ca/logoo.png" />

        {/* LocalBusiness + MedicalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["MedicalBusiness", "LocalBusiness"],
              "name": "LePro Wellness Center",
              "alternateName": ["LePro Wellness Center Ottawa", "Lepro Wellness Ottawa"],
              "description":
                "Ottawa's trusted wellness center offering physiotherapy, registered massage therapy, athletic therapy, and MVA rehabilitation. IFHP & WSIB accepted.",
              "url": "https://www.leprowellnesscenter.ca",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.leprowellnesscenter.ca/logoo.png",
                "width": 400,
                "height": 400,
              },
              "image": "https://www.leprowellnesscenter.ca/logoo.png",
              "telephone": "+16138785060",
              "email": "admin@leprowellnesscenter.ca",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Suite 104 - 2 Gurdwara Road",
                "addressLocality": "Ottawa",
                "addressRegion": "ON",
                "postalCode": "K2E 1A2",
                "addressCountry": "CA",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 45.3352,
                "longitude": -75.7272,
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "16:00",
                },
              ],
              "hasMap": "https://maps.app.goo.gl/vCoEidjfaJQ1B1ou5",
              "priceRange": "$$",
              "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
              "currenciesAccepted": "CAD",
              "areaServed": [
                "Ottawa", "Nepean", "Barrhaven", "Kanata", "Gloucester",
                "Orléans", "Centretown", "Westboro", "Carlington", "South Keys",
              ],
              "sameAs": [
                "https://maps.app.goo.gl/vCoEidjfaJQ1B1ou5",
                "https://www.instagram.com/leprowellnesscenter.ca",
              ],
              "medicalSpecialty": [
                "Physiotherapy",
                "Registered Massage Therapy",
                "Athletic Therapy",
                "MVA Rehabilitation",
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Wellness & Physiotherapy Services Ottawa",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTherapy",
                      "name": "Physiotherapy Ottawa",
                      "url": "https://www.leprowellnesscenter.ca/services/physiotherapy",
                    },
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTherapy",
                      "name": "Registered Massage Therapy Ottawa",
                      "url": "https://www.leprowellnesscenter.ca/services/massage-therapy",
                    },
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTherapy",
                      "name": "Athletic Therapy Ottawa",
                      "url": "https://www.leprowellnesscenter.ca/services/athletic-therapy",
                    },
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTherapy",
                      "name": "MVA Rehabilitation Ottawa",
                      "url": "https://www.leprowellnesscenter.ca/services/accidental-therapy",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "LePro Wellness Center Ottawa",
              "url": "https://www.leprowellnesscenter.ca",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.leprowellnesscenter.ca/blog?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-green-50 to-blue-50">
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
        </Suspense>
        <main className="flex-grow">{children}</main>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
