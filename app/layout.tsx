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
  title: "LePro Wellness Center Ottawa | Physiotherapy, Massage & Athletic Therapy Canada",
  description:
    "Leading wellness center in Ottawa, Ontario offering expert physiotherapy, massage therapy, athletic therapy & MVA rehabilitation. IFHP coverage accepted. Book your appointment today!",

  icons: {
    icon: [
      { url: "/logoo.png", sizes: "16x16", type: "image/png" },
      { url: "/logoo.png", sizes: "32x32", type: "image/png" },
      { url: "/logoo.png", sizes: "48x48", type: "image/png" },
      { url: "/logoo.png", sizes: "96x96", type: "image/png" },
      { url: "/logoo.png", sizes: "192x192", type: "image/png" },
      { url: "/logoo.png", sizes: "512x512", type: "image/png" }
    ],
    shortcut: [
      { url: "/logoo.png", sizes: "16x16", type: "image/png" },
      { url: "/logoo.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/logoo.png", sizes: "57x57", type: "image/png" },
      { url: "/logoo.png", sizes: "60x60", type: "image/png" },
      { url: "/logoo.png", sizes: "72x72", type: "image/png" },
      { url: "/logoo.png", sizes: "76x76", type: "image/png" },
      { url: "/logoo.png", sizes: "114x114", type: "image/png" },
      { url: "/logoo.png", sizes: "120x120", type: "image/png" },
      { url: "/logoo.png", sizes: "144x144", type: "image/png" },
      { url: "/logoo.png", sizes: "152x152", type: "image/png" },
      { url: "/logoo.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { rel: "icon", url: "/logoo.png", sizes: "16x16", type: "image/png" },
      { rel: "icon", url: "/logoo.png", sizes: "32x32", type: "image/png" },
      { rel: "mask-icon", url: "/logoo.png", color: "#059669" }
    ]
  },
  keywords: [
    "wellness center Ottawa",
    "wellness centre Ottawa",
    "physiotherapy Ottawa",
    "physiotherapist Ottawa",
    "massage therapy Ottawa",
    "registered massage therapist Ottawa",
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
    "Ottawa Ontario wellness",
    "Nepean physiotherapy",
    "Barrhaven physiotherapy",
    "Kanata physiotherapy",
    "Gloucester physiotherapy",
    "South Ottawa physiotherapy",
    "Ottawa sports medicine",
    "Ottawa physical therapy",
    "Ottawa holistic health"
  ],
  authors: [{ name: "LePro Wellness Center" }],
  creator: "LePro Wellness Center",
  publisher: "LePro Wellness Center",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.leprowellnesscenter.ca'),
  category: 'health',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "LePro Wellness Center Ottawa | Expert Physiotherapy & Wellness Services",
    description: "Premier wellness center in Ottawa, Ontario. Expert physiotherapy, massage therapy, athletic therapy & MVA rehabilitation. IFHP coverage accepted.",
    url: '/',
    siteName: 'LePro Wellness Center',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: 'https://www.leprowellnesscenter.ca/logoo.png',
        width: 1200,
        height: 630,
        alt: 'LePro Wellness Center Ottawa - Physiotherapy & Wellness Services',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LePro Wellness Center Ottawa | Physiotherapy & Wellness',
    description: 'Expert physiotherapy, massage therapy & athletic therapy in Ottawa, Ontario. IFHP coverage accepted.',
    images: ['https://www.leprowellnesscenter.ca/logoo.png'],
    creator: '@leprowellness',
    site: '@leprowellness',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    
    google: "x0iUP52O2ujRz8JnOk2B6fD9Rd_8eHIzUSvZQjzrk-A",
  },
};
{/* <meta name="google-site-verification" content="x0iUP52O2ujRz8JnOk2B6fD9Rd_8eHIzUSvZQjzrk-A" /> */}

{/* <meta name="google-site-verification" content="kOUWVI9EEweW3gIw_aAX6ice26_DOkAw1zdWxdXGigs" /> */}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <head>
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Ottawa" />
        <meta name="geo.position" content="45.4215;-75.6972" />
        <meta name="ICBM" content="45.4215, -75.6972" />
        <link rel="canonical" href="https://www.leprowellnesscenter.ca" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/logoo.png" type="image/png" sizes="any" />
        <link rel="icon" href="/logoo.png" type="image/png" sizes="32x32" />
        <link rel="shortcut icon" href="/logoo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logoo.png" sizes="180x180" />
        <meta name="msapplication-TileImage" content="/logoo.png" />
        <meta name="msapplication-TileColor" content="#059669" />
        <meta name="theme-color" content="#059669" />
        <meta property="og:logo" content="https://www.leprowellnesscenter.ca/logoo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Lepro Wellness Center",
              "alternateName": "Lepro Wellness Center Ottawa",
              "description": "Leading wellness center in Ottawa, Ontario offering expert physiotherapy, massage therapy, athletic therapy & MVA rehabilitation.",
              "url": "https://www.leprowellnesscenter.ca",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.leprowellnesscenter.ca/logoo.png",
                "width": 400,
                "height": 400,
                "caption": "Lepro Wellness Center Logo"
              },
              "image": [
                {
                  "@type": "ImageObject",
                  "url": "https://www.leprowellnesscenter.ca/logoo.png",
                  "width": 400,
                  "height": 400,
                  "caption": "Lepro Wellness Center Logo"
                }
              ],
              "telephone": "+16138785060",
              "email": "admin@leprowellnesscenter.ca",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Suite 104 - 2 Gurdwara Road",
                "addressLocality": "Ottawa",
                "addressRegion": "ON",
                "postalCode": "K2E 1A2",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 45.4215,
                "longitude": -75.6972
              },
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 09:00-15:00"
              ],
              "priceRange": "$$",
              "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
              "currenciesAccepted": "CAD",
              "areaServed": {
                "@type": "City",
                "name": "Ottawa",
                "containedInPlace": {
                  "@type": "Province",
                  "name": "Ontario",
                  "containedInPlace": {
                    "@type": "Country",
                    "name": "Canada"
                  }
                }
              },
              "medicalSpecialty": [
                "Physiotherapy",
                "Massage Therapy",
                "Athletic Therapy",
                "Rehabilitation Medicine"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Wellness Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTherapy",
                      "name": "Physiotherapy",
                      "description": "Expert physiotherapy treatments for injury recovery and pain management"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTherapy",
                      "name": "Massage Therapy",
                      "description": "Therapeutic massage for relaxation and healing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTherapy",
                      "name": "Athletic Therapy",
                      "description": "Specialized care for athletes and sports-related injuries"
                    }
                  }
                ]
              }
            })
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
