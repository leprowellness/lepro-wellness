import { Metadata } from "next";
import HomeContent from "@/components/home-content";
import { Activity, Award, Heart, Users, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Physiotherapy Ottawa | Pelvic Floor, Sports Injury & MVA Rehab | LePro Wellness",
  description:
    "Ottawa's #1 physiotherapy clinic at Suite 104 - 2 Gurdwara Road. Expert physiotherapy, pelvic floor therapy, registered massage therapy & MVA rehabilitation. Same-day appointments. IFHP & WSIB accepted. Book today!",
  keywords: [
    // Core 2026 high-intent
    "physiotherapy Ottawa",
    "physiotherapist Ottawa",
    "physio Ottawa",
    "best physiotherapy clinic Ottawa",
    "physiotherapy near me Ottawa",
    "same-day physiotherapy Ottawa",
    "physiotherapy Ottawa Ontario",
    // Trending 2026 specialties
    "pelvic floor physiotherapy Ottawa",
    "pelvic floor therapy Ottawa",
    "physiotherapy for seniors Ottawa",
    "manual therapy Ottawa",
    "sciatica treatment Ottawa",
    "sports injury physiotherapy Ottawa",
    "knee pain physiotherapy Ottawa",
    "osteoarthritis physiotherapy Ottawa",
    "post-surgical rehabilitation Ottawa",
    "hybrid physiotherapy Ottawa",
    // Conditions
    "back pain treatment Ottawa",
    "neck pain physiotherapy Ottawa",
    "sports injury rehab Ottawa",
    "injury rehabilitation Ottawa",
    "chronic pain clinic Ottawa",
    "dry needling Ottawa",
    // Insurance
    "IFHP physiotherapy Ottawa",
    "WSIB physiotherapy Ottawa",
    "insurance direct billing physiotherapy Ottawa",
    "MVA rehabilitation Ottawa",
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
    "Orléans physiotherapy",
    "South Ottawa physiotherapy",
    "Westboro physiotherapy",
    "Nepean wellness center",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Physiotherapy Ottawa | LePro Wellness | Pelvic Floor, Sports Injury & MVA Rehab",
    description:
      "Ottawa's #1 physiotherapy clinic. Expert physio, pelvic floor therapy, massage therapy & MVA rehab. Same-day appointments. IFHP & WSIB accepted. Book today.",
    url: "/",
    siteName: "LePro Wellness Center",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapy Ottawa | LePro Wellness Center | Same-Day Appointments",
    description: "Ottawa's #1 physiotherapy clinic. Expert physio, pelvic floor therapy & massage therapy. Same-day appointments. IFHP & WSIB accepted.",
  },
};

export default function Home() {
  const services = [
    {
      title: "Physiotherapy Ottawa",
      description:
        "Restore movement and function with expert physiotherapy treatments for back pain, sports injuries, pelvic floor, and chronic pain. IFHP & WSIB accepted.",
      icon: "Activity",
      link: "/services/physiotherapy",
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Pelvic Floor Physiotherapy",
      description:
        "Specialized pelvic floor physiotherapy in Ottawa for postpartum recovery, pelvic pain, and incontinence. Evidence-based, private one-on-one sessions.",
      icon: "Star",
      link: "/services/physiotherapy",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Athletic Therapy",
      description:
        "Specialized Ottawa athletic therapy for sports injuries, performance enhancement, and rapid rehabilitation. Expert care for athletes of all levels.",
      icon: "Award",
      link: "/services/athletic-therapy",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Massage Therapy Ottawa",
      description:
        "Registered massage therapy (RMT) in Ottawa for stress relief, healing, and pain management. Insurance direct billing available.",
      icon: "Heart",
      link: "/services/massage-therapy",
      color: "from-teal-500 to-emerald-600",
    },
    {
      title: "MVA Rehabilitation",
      description:
        "Comprehensive Ottawa MVA rehabilitation and injury recovery services for motor vehicle accident victims. We handle all the paperwork.",
      icon: "Users",
      link: "/services/accidental-therapy",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  const features = [
    "Licensed Canadian Healthcare Professionals",
    "IFHP & WSIB Coverage Accepted",
    "Same-Day Appointments Available",
    "Insurance Direct Billing Available",
    "State-of-the-Art Facilities in Ottawa",
    "Personalized Treatment Plans",
    "Pelvic Floor Physiotherapy Specialists",
    "Bilingual Services Available",
  ];

  const stats = [
    { value: "500+", label: "Patients Treated" },
    { value: "5★", label: "Google Rating" },
    { value: "4+", label: "Expert Therapists" },
    { value: "IFHP", label: "Coverage Accepted" },
  ];

  return <HomeContent services={services} features={features} stats={stats} />;
}
