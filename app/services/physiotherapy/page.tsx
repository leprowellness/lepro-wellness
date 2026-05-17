import Link from "next/link"
import { Activity, CheckCircle, ArrowRight, Clock, Users, Award } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Physiotherapy Ottawa | #1 Rated Physio Clinic | LePro Wellness",
  description:
    "Top-rated physiotherapy clinic in Ottawa, Ontario. Expert treatment for back pain, sports injuries, MVA rehab, and chronic pain. IFHP & WSIB accepted. Book your assessment today.",
  keywords: [
    "physiotherapy Ottawa",
    "physiotherapist Ottawa",
    "physio Ottawa",
    "physiotherapy clinic Ottawa",
    "back pain physiotherapy Ottawa",
    "sports injury physiotherapy Ottawa",
    "MVA physiotherapy Ottawa",
    "WSIB physiotherapy Ottawa",
    "IFHP physiotherapy Ottawa",
    "dry needling Ottawa",
    "IMS therapy Ottawa",
    "chronic pain physiotherapy Ottawa",
    "neck pain treatment Ottawa",
    "physiotherapy near me Ottawa",
    "best physiotherapist Ottawa",
    "Ottawa physio clinic",
    "Nepean physiotherapy",
    "South Ottawa physio",
  ],
  alternates: { canonical: "/services/physiotherapy" },
  openGraph: {
    title: "Physiotherapy Ottawa | Expert Injury Recovery | LePro Wellness",
    description:
      "Top-rated physiotherapy in Ottawa for back pain, sports injuries, MVA rehab, and chronic pain. IFHP & WSIB accepted.",
    url: "/services/physiotherapy",
    siteName: "LePro Wellness Center",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapy Ottawa | LePro Wellness Center",
    description: "Expert physiotherapy in Ottawa for injury recovery, back pain, and MVA rehab. IFHP & WSIB accepted.",
  },
}
export default function Physiotherapy() {
  const benefits = [
    "Effective pain relief and management",
    "Improved mobility and joint flexibility",
    "Accelerated recovery from sports injuries",
    "Prevention of future injuries",
    "Enhanced athletic performance",
    "Better posture and functional balance",
  ]

  const conditions = [
    "Lower back and neck pain",
    "Sports injuries and rehabilitation",
    "Motor vehicle accident (MVA) rehabilitation",
    "Workplace injury recovery (WSIB)",
    "Post-surgical rehabilitation",
    "Arthritis and joint pain management",
    "Neurological condition support",
    "Chronic pain management",
    "Tension headaches and migraines",
  ]

  const features = [
    {
      icon: Clock,
      title: "Flexible Appointments",
      description: "Convenient scheduling options to fit your busy Ottawa lifestyle",
    },
    {
      icon: Users,
      title: "Certified Specialists",
      description: "Licensed Canadian physiotherapists with extensive clinical experience",
    },
    {
      icon: Award,
      title: "Evidence-Based Care",
      description: "Science-backed treatments ensuring the best possible recovery outcomes",
    },
  ]

  const services = [
    {
      title: "Subsequent Physiotherapy",
      subtitle: "60 Minutes Follow-Up Visit - $100",
      description:
        "Dedicated follow-up care for ongoing injury treatment. We monitor your progress, adjust manual therapy techniques, and update your exercise program to ensure continuous improvement and long-term recovery.",
    },
    {
      title: "Physiotherapy Assessment",
      subtitle: "60 Minutes Initial Session - $200",
      description:
        "A comprehensive evaluation to identify the root cause of your pain or injury. Includes functional testing, diagnosis, and the creation of a personalized treatment plan tailored to your specific goals.",
    },
    {
      title: "Online Physiotherapy / Virtual Rehab",
      subtitle: "$100 - Follow-Up Consultation",
      description:
        "Receive expert physiotherapy guidance from the comfort of your home. Perfect for exercise review, progress tracking, and professional advice through a secure, high-quality video platform.",
    },
    {
      title: "Dry Needling / IMS",
      subtitle: "60-Minute Specialized Session - $140",
      description:
        "Intramuscular Stimulation (IMS) targets deep muscle trigger points and neuropathic pain. An effective technique for releasing chronic muscle tension and accelerating the healing process.",
    },
  ]

  const faq = [
    {
      q: "Do I need a doctor's referral for physiotherapy in Ottawa?",
      a: "No, in Ontario, you have direct access to physiotherapy. However, some private insurance plans may require a referral for reimbursement, so it's always best to check with your provider.",
    },
    {
      q: "How many physiotherapy sessions will I need?",
      a: "The number of sessions depends on the nature of your injury or condition. During your initial assessment, your therapist will provide a recommended treatment timeline based on your recovery goals.",
    },
    {
      q: "Does LePro Wellness accept IFHP and WSIB?",
      a: "Yes, we are a registered provider for IFHP (Interim Federal Health Program) and WSIB (Workplace Safety and Insurance Board). We handle the necessary paperwork to make your recovery as stress-free as possible.",
    },
    {
      q: "What should I wear to my first physiotherapy appointment?",
      a: "Wear comfortable, loose-fitting clothing that allows us to easily access the area being treated. For example, shorts for knee injuries or a tank top for shoulder issues are ideal.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faq.map((item) => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a,
              },
            })),
          }),
        }}
      />
      {/* Hero Section */}
      <section className="relative md:min-h-[600px] text-white py-32">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/physiotherapy-background.mp4" type="video/mp4" />
        </video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Physiotherapy in Ottawa for Injury Recovery</h1>
          </div>

          <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
            Restore movement, eliminate pain, and reclaim your quality of life. Our expert Ottawa physiotherapists provide personalized, evidence-based care for back pain, sports injuries, and MVA recovery.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Start Your Recovery</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">Specialized Physiotherapy Treatments</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our range of professional physiotherapy services designed to address your unique health concerns.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div>
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-2">{service.title}</h3>
                  <p className="text-md text-gray-500 mb-4 font-medium">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                </div>
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 hover:shadow-lg transition-all duration-300"
                  >
                    <span>Book Your Session</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits and Conditions */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div className="animate-slide-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Physiotherapy Works</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-start space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conditions */}
            <div className="animate-slide-right">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Conditions We Help Manage</h2>
              <div className="space-y-4">
                {conditions.map((condition, index) => (
                  <div
                    key={condition}
                    className="flex items-start space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{condition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Physiotherapy FAQ</h2>
            <p className="text-gray-600 mt-3 text-lg">
              Frequently asked questions about our physiotherapy services in Ottawa.
            </p>
          </div>

          <div className="space-y-4">
            {faq.map((item, idx) => (
              <details
                key={idx}
                className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.q}</h3>
                  <span className="text-emerald-700 font-bold group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">Ready to Move Pain-Free?</h2>
          <p className="text-xl mb-8 text-emerald-50 animate-slide-up delay-100">
            Book your physiotherapy assessment today and take the first step toward lasting health and mobility.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-scale-in delay-200"
          >
            <span>Schedule Your Appointment</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

