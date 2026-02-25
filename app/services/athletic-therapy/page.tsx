import Link from "next/link"
import { Award, CheckCircle, ArrowRight, Target, TrendingUp, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Athletic Therapy in Ottawa, ON | Sports Rehab & Performance Enrichment",
  description:
    "Expert athletic therapy in Ottawa, Ontario. We specialize in sports injury rehabilitation, performance conditioning, and injury prevention for athletes of all levels.",

  alternates: { canonical: "/services/athletic-therapy" },

  openGraph: {
    title: "Athletic Therapy in Ottawa, Ontario | Lepro Wellness",
    description:
      "Expert athletic therapy services in Ottawa for sports recovery, injury prevention, and performance enhancement.",
    url: "/services/athletic-therapy",
    siteName: "Lepro Wellness",
    type: "website",
  },
}

export default function AthleticTherapy() {
  const benefits = [
    "Peak athletic performance optimization",
    "Evidence-based injury prevention strategies",
    "Rapid recovery from acute sports injuries",
    "Pro-level strength and conditioning",
    "Tailored sport-specific training programs",
    "Safe and structured return-to-play protocols",
  ]

  const services = [
    "Pre-season physical conditioning",
    "Comprehensive sports injury assessment",
    "Advanced rehabilitation programs",
    "Biomechanical movement analysis",
    "Functional movement screening",
    "Custom taping and bracing solutions",
  ]

  const features = [
    {
      icon: Target,
      title: "Sport-Specific Care",
      description: "Programs custom-built for your specific sport, position, and competitive level",
    },
    {
      icon: TrendingUp,
      title: "Performance Driven",
      description: "Focus on maximizing your athletic power, speed, and competitive edge",
    },
    {
      icon: Shield,
      title: "Injury Resilience",
      description: "Proactive, science-based strategies to keep you performing at your best",
    },
  ]

  const faq = [
    {
      q: "What is the difference between Athletic Therapy and Physiotherapy?",
      a: "While both share similarities, Athletic Therapy focuses specifically on the musculoskeletal system (muscles, bones, and joints) and is highly specialized in sports-related injury assessment and immediate on-field/clinic care for active individuals.",
    },
    {
      q: "Is Athletic Therapy only for professional athletes?",
      a: "Not at all! Athletic Therapy is for anyone with an active lifestyle—from weekend warriors and youth athletes to industrial professionals. If you want to move better and recover faster, Athletic Therapy is for you.",
    },
    {
      q: "What should I expect during my first Athletic Therapy session?",
      a: "Your first session involves a detailed assessment of your injury and physical goals. We’ll look at your biomechanics, range of motion, and strength to create a personalized rehab and performance plan.",
    },
    {
      q: "Is Athletic Therapy covered by insurance in Ontario?",
      a: "Yes, many extended health care plans in Ontario cover Athletic Therapy. We recommend checking with your specific insurance provider to confirm your coverage details.",
    },
  ]

  return (
    <div className="min-h-screen">
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
          <source src="/athletic-background.mp4" type="video/mp4" />
        </video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Athletic Therapy in Ottawa | Sports Injury Rehab</h1>
          </div>

          <p className="text-xl text-blue-50 mb-8 leading-relaxed">
            Unlock your full athletic potential and recover with precision. Our certified Ottawa athletic therapists provide specialized care designed to keep you performing at your peak, no matter your sport.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Book Your Assessment</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>


      {/* Athletic Therapy Session */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-slide-up font-display">
            Personalized Athletic Therapy Sessions
          </h2>
          <p className="text-lg text-blue-600 mb-4 font-semibold animate-slide-up delay-75">
            $58.19 - Strength, Conditioning & Functional Mobility
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 animate-slide-up delay-100">
            This intensive session focuses on high-level strength and conditioning to optimize your performance. By combining targeted exercises with functional mobility work, we address specific weaknesses, restore range of motion, and build the resilience needed to prevent future injuries and excel in your sport.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>Book Your Session</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Benefits and Services */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div className="animate-slide-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits for Active Individuals</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-start space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="animate-slide-right">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Specialized Services</h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div
                    key={service}
                    className="flex items-start space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{service}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Athletic Therapy FAQ</h2>
            <p className="text-gray-600 mt-3 text-lg">
              Frequently asked questions about our athletic therapy services in Ottawa.
            </p>
          </div>

          <div className="space-y-4">
            {faq.map((item, idx) => (
              <details
                key={idx}
                className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.q}</h3>
                  <span className="text-blue-700 font-bold group-open:rotate-45 transition-transform duration-200">
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">Elevate Your Performance</h2>
          <p className="text-xl mb-8 text-blue-50 animate-slide-up delay-100">
            Don't let a sports injury hold you back. Work with our certified specialists to reach your highest potential.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-scale-in delay-200"
          >
            <span>Start Your Journey Today</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
