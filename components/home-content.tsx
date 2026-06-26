"use client";

import Link from "next/link";
import {
    Activity,
    Heart,
    Users,
    Award,
    ArrowRight,
    CheckCircle,
    Star,
    Phone,
    Clock,
    Shield,
} from "lucide-react";
import { useState, useEffect } from "react";

interface HomeContentProps {
    services: {
        title: string;
        description: string;
        icon: string;
        link: string;
        color: string;
    }[];
    features: string[];
    stats: {
        value: string;
        label: string;
    }[];
}

const iconMap: Record<string, any> = {
    Activity,
    Award,
    Heart,
    Users,
    Star,
    Phone,
    Clock,
    Shield,
};

export default function HomeContent({ services, features, stats }: HomeContentProps) {
    // Carousel images
    const carouselImages = ["/1.jpeg", "/2.jpeg", "/3.jpeg", "/4.jpeg"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [carouselImages.length]);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative text-white overflow-hidden">
                <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/wellness-bg.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center">
                            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-sm text-emerald-100 text-sm font-medium px-4 py-2 rounded-full mb-6 animate-fade-in">
                                <Clock className="w-4 h-4" />
                                <span>Same-Day Appointments Available · Ottawa, ON</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-down text-balance text-white">
                                Ottawa&apos;s #1 Physiotherapy Clinic
                            </h1>
                            <p className="speakable-summary text-xl md:text-2xl mb-8 text-emerald-50 max-w-3xl mx-auto animate-slide-up delay-100 text-pretty">
                                Expert physiotherapy, pelvic floor therapy, registered massage therapy, and MVA rehabilitation in Ottawa. IFHP &amp; WSIB accepted. Same-day appointments at Suite 104 – 2 Gurdwara Road.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in delay-200">
                                <Link
                                    href="/contact"
                                    id="hero-book-appointment"
                                    className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
                                >
                                    <span>Book Appointment</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <a
                                    href="tel:+16138785060"
                                    id="hero-call-now"
                                    className="px-8 py-4 bg-emerald-500/30 border-2 border-emerald-300 text-white font-semibold rounded-full hover:bg-emerald-500/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>Call: (613) 878-5060</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-300"></div>
            </section>

            {/* Stats Bar */}
            <section className="bg-emerald-700 py-6">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <span className="text-3xl font-bold text-emerald-100">{stat.value}</span>
                                <span className="text-sm text-emerald-200 mt-1">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-slide-up">
                        Ottawa&apos;s Trusted Physiotherapy &amp; Wellness Clinic
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto animate-slide-up delay-100">
                        At <strong>LePro Wellness Center</strong>, we are Ottawa&apos;s go-to physiotherapy clinic for back pain, sports injuries, pelvic floor rehabilitation, and MVA recovery. Our evidence-based approach combines expert manual therapy, personalized exercise programs, and compassionate care to help you recover faster and stay pain-free. We proudly accept <strong>IFHP coverage</strong> and <strong>WSIB</strong>, and offer same-day appointments at our clinic at Suite 104 – 2 Gurdwara Road, Ottawa.
                    </p>
                </div>
            </section>

            {/* Trending 2026 Services Callout */}
            <section className="py-14 bg-white border-y border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-3">Trending in Ottawa 2026</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">High-Demand Physiotherapy Services</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                            {
                                icon: "⚕️",
                                title: "Pelvic Floor Physiotherapy",
                                desc: "Ottawa's fastest-growing physio specialty. For postpartum recovery, pelvic pain, incontinence & pelvic floor dysfunction.",
                                href: "/services/physiotherapy",
                            },
                            {
                                icon: "🏃",
                                title: "Sports Injury Rehabilitation",
                                desc: "Get back in the game faster. Knee, shoulder, ankle, and back injuries treated with evidence-based athletic therapy.",
                                href: "/services/athletic-therapy",
                            },
                            {
                                icon: "🧓",
                                title: "Physiotherapy for Seniors",
                                desc: "Specialized rehab for osteoarthritis, fall prevention, post-surgical recovery, and maintaining mobility as you age.",
                                href: "/services/physiotherapy",
                            },
                        ].map((item, i) => (
                            <Link
                                key={i}
                                href={item.href}
                                id={`trending-service-${i}`}
                                className="group flex flex-col items-start p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                <span className="text-3xl mb-3">{item.icon}</span>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                                <span className="inline-flex items-center gap-1 text-emerald-600 text-sm font-medium">
                                    Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-slide-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Why Ottawa Chooses LePro Wellness Center
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                As one of Ottawa&apos;s leading physiotherapy clinics, we offer expert-led care that focuses on lasting results. Our multi-disciplinary team combines advanced manual therapy, pelvic floor physiotherapy, and personalized recovery plans for athletes, seniors, and MVA patients. From our state-of-the-art facility at 2 Gurdwara Road, Ottawa, we provide the compassionate, evidence-based physiotherapy you need to return to your daily activities pain-free.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {features.map((feature, index) => (
                                    <div
                                        key={feature}
                                        className="flex items-start space-x-3 animate-slide-up"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative animate-slide-right">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 p-1">
                                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                                    <img
                                        src="/4.jpeg"
                                        alt="Professional physiotherapy and pelvic floor rehabilitation treatments at LePro Wellness Center Ottawa"
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
                            Our Physiotherapy &amp; Wellness Services in Ottawa
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up delay-100 leading-relaxed">
                            From pelvic floor physiotherapy to sports injury rehab and MVA recovery, LePro Wellness Center Ottawa provides expert, evidence-based care. IFHP &amp; WSIB accepted. Same-day appointments available.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = iconMap[service.icon] || Activity;
                            return (
                                <Link
                                    key={service.title}
                                    href={service.link}
                                    id={`service-card-${index}`}
                                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 hover:-translate-y-2 animate-scale-in"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center text-emerald-600 font-medium group-hover:gap-2 transition-all duration-300">
                                        <span>Learn More</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Carousel Section */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-lg">
                        {carouselImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`LePro Wellness Center Ottawa - ${["Physiotherapy", "Pelvic Floor Therapy", "Athletic Therapy", "Wellness Clinic"][index] || "Healthcare Services"}`}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
                        <Clock className="w-4 h-4" />
                        <span>Same-Day Appointments Available</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
                        Ready to Start Your Recovery?
                    </h2>
                    <p className="text-xl mb-8 text-emerald-50 animate-slide-up delay-100">
                        Book your Ottawa physiotherapy assessment today. Expert physio, pelvic floor therapy &amp; massage therapy. Hundreds of Ottawa patients have found lasting pain relief at our clinic.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            id="cta-book-appointment"
                            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-scale-in delay-200"
                        >
                            <span>Book Appointment Online</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a
                            href="tel:+16138785060"
                            id="cta-call-now"
                            className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-emerald-600 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            <Phone className="w-5 h-5" />
                            <span>Call (613) 878-5060</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

