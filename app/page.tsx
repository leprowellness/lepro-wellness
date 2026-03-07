import { Metadata } from "next";
import HomeContent from "@/components/home-content";
import { Activity, Award, Heart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Physiotherapy Ottawa | Expert Wellness & Rehab Clinic",
  description:
    "Top-rated Ottawa wellness clinic offering expert physiotherapy, registered massage therapy, and athletic therapy. Specialized in sports injury rehab and MVA recovery. IFHP accepted. Book your assessment today!",
  keywords: [
    "physiotherapy Ottawa",
    "massage therapy Ottawa",
    "athletic therapy Ottawa",
    "MVA rehabilitation Ottawa",
    "IFHP physiotherapy",
    "sports injury rehab Ottawa",
    "wellness center Ottawa",
    "physiotherapist near me Ottawa",
    "registered massage therapist Ottawa",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best Physiotherapy Ottawa | LePro Wellness Center",
    description:
      "Restore your movement and reclaim your life at Ottawa's premier wellness destination. Expert physiotherapy, massage, and athletic therapy services.",
    url: "/",
    siteName: "LePro Wellness Center",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LePro Wellness Center Ottawa | Expert Physiotherapy",
    description: "Expert physiotherapy, massage therapy, and athletic therapy in Ottawa. IFHP coverage accepted.",
  },
};

export default function Home() {
  const services = [
    {
      title: "Physiotherapy Ottawa",
      description:
        "Restore movement and function with expert physiotherapy treatments for injury recovery, back pain, and chronic conditions. IFHP coverage accepted.",
      icon: "Activity",
      link: "/services/physiotherapy",
      color: "from-emerald-500 to-teal-600",
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
        "Comprehensive Ottawa MVA rehabilitation and injury recovery services for motor vehicle accident victims. We help you heal faster.",
      icon: "Users",
      link: "/services/accidental-therapy",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  const features = [
    "Licensed Canadian Healthcare Professionals",
    "IFHP Coverage Accepted",
    "Insurance Direct Billing Available",
    "State-of-the-Art Facilities in Ottawa",
    "Personalized Treatment Plans",
    "Flexible Scheduling Options",
    "MVA & Workplace Injury Specialists",
    "Bilingual Services Available",
  ];

  return <HomeContent services={services} features={features} />;
}
