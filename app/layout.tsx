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
    default: "Physiotherapy Ottawa | LePro Wellness Center | Pelvic Floor, Sports Injury & MVA Rehab",
    template: "%s | LePro Wellness Center Ottawa",
  },
  description:
    "Ottawa's #1 physiotherapy clinic at Suite 104 - 2 Gurdwara Road. Expert physiotherapy, pelvic floor therapy, registered massage therapy, athletic therapy & MVA rehabilitation. Same-day appointments. IFHP & WSIB accepted. Book today!",
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
    // Core physiotherapy
    "physiotherapy Ottawa",
    "physiotherapist Ottawa",
    "physio Ottawa",
    "physiotherapy clinic Ottawa",
    "best physiotherapy clinic Ottawa",
    "physiotherapy near me Ottawa",
    "physiotherapy Ottawa Ontario",
    "same-day physiotherapy Ottawa",
    "Ottawa physical therapy",
    "Ottawa sports medicine",
    // 2026 Trending
    "pelvic floor physiotherapy Ottawa",
    "pelvic floor therapy Ottawa",
    "physiotherapy for seniors Ottawa",
    "seniors rehabilitation Ottawa",
    "hybrid physiotherapy Ottawa",
    "manual therapy Ottawa",
    "sciatica treatment Ottawa",
    "knee pain physiotherapy Ottawa",
    "osteoarthritis physiotherapy Ottawa",
    "post-surgical rehabilitation Ottawa",
    // Conditions
    "back pain treatment Ottawa",
    "neck pain physiotherapy Ottawa",
    "sports injury rehab Ottawa",
    "injury rehabilitation Ottawa",
    "chronic pain clinic Ottawa",
    "dry needling Ottawa",
    "IMS therapy Ottawa",
    // Insurance
    "IFHP physiotherapy Ottawa",
    "WSIB physiotherapy Ottawa",
    "insurance direct billing physiotherapy Ottawa",
    "motor vehicle accident therapy Ottawa",
    "MVA rehabilitation Ottawa",
    "workplace injury therapy Ottawa",
    // Other services
    "wellness center Ottawa",
    "wellness centre Ottawa",
    "massage therapy Ottawa",
    "registered massage therapist Ottawa",
    "RMT Ottawa",
    "athletic therapy Ottawa",
    "Ottawa health clinic",
    "Ottawa rehabilitation center",
    // Neighbourhoods
    "Nepean physiotherapy",
    "Barrhaven physiotherapy",
    "Kanata physiotherapy",
    "Gloucester physiotherapy",
    "Orléans physiotherapy",
    "Westboro physiotherapy",
    "South Ottawa physiotherapy",
    "Centretown physiotherapy",
    // Location
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
    title: "Physiotherapy Ottawa | LePro Wellness Center | Pelvic Floor, Sports Injury & MVA Rehab",
    description:
      "Ottawa's trusted physiotherapy clinic. Expert physio, pelvic floor therapy, massage therapy & MVA rehab. Same-day appointments. IFHP & WSIB accepted.",
    url: "https://www.leprowellnesscenter.ca",
    siteName: "LePro Wellness Center",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://www.leprowellnesscenter.ca/logoo.png",
        width: 1200,
        height: 630,
        alt: "LePro Wellness Center Ottawa — Physiotherapy, Pelvic Floor & Wellness Services",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapy Ottawa | LePro Wellness Center | Same-Day Appointments",
    description: "Expert physiotherapy, pelvic floor therapy & massage therapy in Ottawa. Same-day appointments. IFHP & WSIB accepted.",
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

        {/* MedicalClinic + LocalBusiness Schema — Upgraded for 2026 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["MedicalClinic", "MedicalBusiness", "LocalBusiness"],
                  "@id": "https://www.leprowellnesscenter.ca/#organization",
                  "name": "LePro Wellness Center",
                  "alternateName": ["LePro Wellness Center Ottawa", "Lepro Wellness Ottawa", "LePro Physio Ottawa"],
                  "description":
                    "Ottawa's trusted physiotherapy clinic offering expert physiotherapy, pelvic floor therapy, registered massage therapy, athletic therapy, and MVA rehabilitation. Same-day appointments available. IFHP & WSIB accepted.",
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
                  "paymentAccepted": ["Cash", "Credit Card", "Insurance", "IFHP", "WSIB"],
                  "currenciesAccepted": "CAD",
                  "areaServed": [
                    {"@type": "City", "name": "Ottawa"},
                    {"@type": "AdministrativeArea", "name": "Nepean"},
                    {"@type": "AdministrativeArea", "name": "Barrhaven"},
                    {"@type": "AdministrativeArea", "name": "Kanata"},
                    {"@type": "AdministrativeArea", "name": "Gloucester"},
                    {"@type": "AdministrativeArea", "name": "Orléans"},
                    {"@type": "AdministrativeArea", "name": "Centretown"},
                    {"@type": "AdministrativeArea", "name": "Westboro"},
                    {"@type": "AdministrativeArea", "name": "Carlington"},
                    {"@type": "AdministrativeArea", "name": "South Keys"},
                    {"@type": "AdministrativeArea", "name": "Hunt Club"},
                    {"@type": "AdministrativeArea", "name": "Riverside South"},
                    {"@type": "AdministrativeArea", "name": "Vanier"},
                  ],
                  "sameAs": [
                    "https://maps.app.goo.gl/vCoEidjfaJQ1B1ou5",
                    "https://www.instagram.com/leprowellnesscenter.ca",
                    "https://www.facebook.com/leprowellnesscenter",
                    "https://www.linkedin.com/company/leprowellnesscenter",
                  ],
                  "medicalSpecialty": [
                    "Physiotherapy",
                    "Pelvic Floor Physiotherapy",
                    "Sports Medicine",
                    "Manual Therapy",
                    "Registered Massage Therapy",
                    "Athletic Therapy",
                    "MVA Rehabilitation",
                    "Dry Needling",
                    "Geriatric Rehabilitation",
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Physiotherapy & Wellness Services Ottawa",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "MedicalTherapy",
                          "name": "Physiotherapy Ottawa",
                          "url": "https://www.leprowellnesscenter.ca/services/physiotherapy",
                          "description": "Expert physiotherapy in Ottawa for back pain, sports injuries, MVA rehab, and chronic pain.",
                        },
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "MedicalTherapy",
                          "name": "Pelvic Floor Physiotherapy Ottawa",
                          "url": "https://www.leprowellnesscenter.ca/services/physiotherapy",
                          "description": "Specialized pelvic floor physiotherapy in Ottawa for pelvic pain, postpartum recovery, and incontinence.",
                        },
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "MedicalTherapy",
                          "name": "Registered Massage Therapy Ottawa",
                          "url": "https://www.leprowellnesscenter.ca/services/massage-therapy",
                          "description": "Registered massage therapy (RMT) in Ottawa for stress relief, healing, and pain management.",
                        },
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "MedicalTherapy",
                          "name": "Athletic Therapy Ottawa",
                          "url": "https://www.leprowellnesscenter.ca/services/athletic-therapy",
                          "description": "Specialized athletic therapy for sports injuries and performance rehabilitation in Ottawa.",
                        },
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "MedicalTherapy",
                          "name": "MVA Rehabilitation Ottawa",
                          "url": "https://www.leprowellnesscenter.ca/services/accidental-therapy",
                          "description": "Comprehensive MVA rehabilitation for motor vehicle accident victims in Ottawa.",
                        },
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "MedicalTherapy",
                          "name": "Dry Needling / IMS Ottawa",
                          "url": "https://www.leprowellnesscenter.ca/services/physiotherapy",
                          "description": "Intramuscular Stimulation (IMS) and dry needling therapy for chronic muscle tension and neuropathic pain in Ottawa.",
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.leprowellnesscenter.ca/#website",
                  "name": "LePro Wellness Center Ottawa",
                  "url": "https://www.leprowellnesscenter.ca",
                  "inLanguage": "en-CA",
                  "publisher": {"@id": "https://www.leprowellnesscenter.ca/#organization"},
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://www.leprowellnesscenter.ca/blog?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.leprowellnesscenter.ca/#webpage",
                  "url": "https://www.leprowellnesscenter.ca",
                  "name": "Physiotherapy Ottawa | LePro Wellness Center | Pelvic Floor, Sports Injury & MVA Rehab",
                  "isPartOf": {"@id": "https://www.leprowellnesscenter.ca/#website"},
                  "about": {"@id": "https://www.leprowellnesscenter.ca/#organization"},
                  "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".speakable-summary"],
                  },
                },
              ],
            }),
          }}
        />

        {/* BreadcrumbList Schema — Homepage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Physiotherapy Ottawa — LePro Wellness Center",
                  "item": "https://www.leprowellnesscenter.ca",
                },
              ],
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
