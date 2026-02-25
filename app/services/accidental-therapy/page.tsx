import Link from "next/link"
import { Users, CheckCircle, ArrowRight, Shield, HeartPulse, Ambulance } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accidental Injury & MVA Rehab in Ottawa | Lepro Wellness",
  description:
    "Accidental injury therapy in Ottawa including Motor Vehicle Accident (MVA) rehab, sports injury treatment, and personalized wellness therapy at Lepro Wellness.",
  alternates: { canonical: "/services/accidental-therapy" },
  openGraph: {
    title: "Accidental Injury & MVA Rehab in Ottawa | Lepro Wellness",
    description:
      "Accidental injury therapy in Ottawa including Motor Vehicle Accident (MVA) rehab, sports injury treatment, and personalized wellness therapy at Lepro Wellness.",
    url: "/services/accidental-therapy",
    siteName: "Lepro Wellness",
    type: "website",
    images: ["/accidentalTherapy/ottawa_injury_rehab.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accidental Injury & MVA Rehab in Ottawa | Lepro Wellness",
    description:
      "Accidental injury therapy in Ottawa including MVA rehab, sports injury treatment, and personalized wellness therapy.",
    images: ["/accidentalTherapy/ottawa_injury_rehab.png"],
  },
}

export default function AccidentalTherapy() {
  const benefits = [
    "Comprehensive injury assessment",
    "Pain management strategies",
    "Functional restoration",
    "Psychological support",
   
    "Return-to-work programs",
  ]

  const injuries = [
    "Motor vehicle accidents",
    // "Workplace injuries",
    "Slip and fall accidents",
    "Whiplash and soft tissue injuries",
    "Fractures and dislocations",
    "Concussions and head injuries",
  ]

  const features = [
    {
      icon: Shield,
      title: "Comprehensive Care",
      description: "Complete rehabilitation from initial assessment to full recovery",
    },
    {
      icon: HeartPulse,
      title: "Holistic Approach",
      description: "Address physical, emotional, and functional aspects of recovery",
    },
    {
      icon: Ambulance,
      title: "Rapid Response",
      description: "Quick access to care when you need it most",
    },
  ]

  const therapies = [
    {
      title: "Initial Accident Assessment",
      price: "$150",
      duration: "90 minutes",
      provider: "Lepro Wellness Team",
    },
    {
      title: "Injury Rehabilitation Session",
      price: "$100",
      duration: "60 minutes",
      provider: "Lepro Wellness Team",
    },
    {
      title: "Advanced Recovery Therapy",
      price: "$180",
      duration: "120 minutes",
      provider: "Lepro Wellness Team",
    },
  ]
  
const faq = [
  {
    q: "Do I need a doctor’s referral to start treatment?",
    a: "In many cases, you can begin treatment without a referral. If you have specific paperwork requirements, contact our clinic and we’ll guide you on next steps.",
  },
  {
    q: "What injuries do you treat after a car accident?",
    a: "We commonly treat whiplash, soft tissue injuries, back/neck pain, mobility restrictions, and concussion-related symptoms depending on your assessment.",
  },
  {
    q: "How soon should I start rehab after an accident?",
    a: "As soon as it’s safe. Early assessment and a structured plan can reduce pain and improve recovery outcomes.",
  },
  {
    q: "What should I bring to my first appointment?",
    a: "Bring any relevant medical notes (if you have them), a list of symptoms, and comfortable clothing so we can assess movement and function.",
  },
]
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-32 md:min-h-[600px]">
        {/* Background Video */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/therapy-background.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Motor Vehicle Accident (MVA) & Accidental Injury Rehab in Ottawa
            </h1>
          </div>

          <p className="text-xl text-cyan-50 mb-8 leading-relaxed">
            At Lepro Wellness, we provide expert Motor Vehicle Accident (MVA) and accidental injury rehabilitation in
            Ottawa, Ontario. Our personalized recovery programs help reduce pain, restore mobility, and safely return
            you to work and daily activities after car accidents, workplace injuries, and sports-related trauma.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-cyan-600 font-semibold rounded-full hover:bg-cyan-50 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* SEO Intro / MVA Focus */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur rounded-2xl p-8 md:p-10 shadow-md">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Motor Vehicle Accident (MVA) Rehabilitation in Ottawa
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg">
              If you’ve been in a car accident, early treatment can reduce pain and help prevent long-term issues. At
              Lepro Wellness in Ottawa, Ontario, we build a personalized rehab plan focused on restoring mobility,
              improving function, and helping you return to work, sports, and daily life with confidence.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Whiplash & soft tissue injuries",
                "Back/neck pain after collisions",
                "Concussion support & recovery",
                "Mobility + strength restoration",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-cyan-600 text-white font-semibold rounded-full hover:bg-cyan-700 hover:shadow-lg transition-all duration-300"
              >
                <span>Book an Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <p className="text-sm text-gray-500 sm:ml-2">
                Same-day/next-day availability may be possible depending on schedule.
              </p>
            </div>
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
                  className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
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

      {/* Therapy Sessions */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Our Therapy Sessions</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {therapies.map((therapy, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{therapy.title}</h3>
                  <p className="text-gray-600 mb-2">
                    {therapy.price} – {therapy.duration}
                  </p>
                  <p className="text-sm text-gray-500">Offered by {therapy.provider}</p>
                </div>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full hover:bg-cyan-700 hover:shadow-lg transition-all duration-300"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Prices and session lengths may vary depending on assessment and treatment plan.
          </p>
        </div>
      </section>

      {/* Benefits and Injuries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div className="animate-slide-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Accidental Injury Rehabilitation Services</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-start space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Not sure where to start?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Book an assessment and we’ll recommend a rehab plan based on your symptoms, goals, and recovery
                  timeline.
                </p>
              </div>
            </div>

            {/* Injuries */}
            <div className="animate-slide-right">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Common Accident & Sports Injuries We Treat in Ottawa
              </h2>
              <div className="space-y-4">
                {injuries.map((injury, index) => (
                  <div
                    key={injury}
                    className="flex items-start space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{injury}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Serving Ottawa & nearby areas</h3>
                <p className="text-gray-700 leading-relaxed">
                  Convenient care for patients across Ottawa, including nearby communities where applicable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-3 text-lg">
              Quick answers about accidental injury rehab and MVA therapy in Ottawa.
            </p>
          </div>

          <div className="space-y-4">
            {faq.map((item) => (
              <details
                key={item.q}
                className="group bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.q}</h3>
                  <span className="text-cyan-700 font-bold group-open:rotate-45 transition-transform duration-200">
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
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">Start Your Recovery Today</h2>
          <p className="text-xl mb-8 text-cyan-50 animate-slide-up delay-100">
            Don't let an accident hold you back. Get the expert care you need to recover fully.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-cyan-600 font-semibold rounded-full hover:bg-cyan-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-scale-in delay-200"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}