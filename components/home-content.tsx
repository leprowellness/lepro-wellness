"use client";

import Link from "next/link";
import {
    Activity,
    Heart,
    Users,
    Award,
    ArrowRight,
    CheckCircle,
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
}

const iconMap: Record<string, any> = {
    Activity,
    Award,
    Heart,
    Users,
};

export default function HomeContent({ services, features }: HomeContentProps) {
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
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-down text-balance text-white">
                                Expert Physiotherapy Ottawa & Holistic Wellness Care
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 text-emerald-50 max-w-3xl mx-auto animate-slide-up delay-100 text-pretty">
                                Welcome to LePro Wellness Center in Ottawa. Our dedicated clinic provides professional physiotherapy, registered massage therapy, and specialized athletic therapy to help you recover and thrive. We proudly accept IFHP coverage for eligible patients.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in delay-200">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
                                >
                                    <span>Book Appointment</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="/about"
                                    className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-emerald-600 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-300"></div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-slide-up">
                        Our Holistic Approach to Ottawa Healthcare
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto animate-slide-up delay-100">
                        Looking for a top-rated physiotherapy clinic in Ottawa? At LePro Wellness Center, our philosophy centers on providing the best Canadian healthcare standards through a holistic approach. Whether you are seeking sports injury rehab or chronic pain relief, our Ottawa wellness center creates personalized treatment plans to restore your mobility and function. We are a proud provider for IFHP coverage, supporting the health and recovery of our local community.
                    </p>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-slide-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Why Choose Our Ottawa Wellness Clinic?
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                As one of Ottawa&apos;s leading wellness centers, we offer expert-led care that focuses on lasting results. Our multi-disciplinary team combines advanced manual therapy with personalized recovery plans for athletes, seniors, and MVA patients. From our state-of-the-art facility in Ottawa, we provide the compassionate, evidence-based physiotherapy and massage therapy you need to return to your daily activities pain-free.
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
                                        alt="Professional physiotherapy and rehabilitation treatments at LePro Wellness Center Ottawa"
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
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
                            Our Specialized Wellness & Physiotherapy Services in Ottawa
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up delay-100 leading-relaxed">
                            Experience the best in Canadian healthcare at LePro Wellness Center. We provide expert physiotherapy, registered massage therapy, and athletic therapy. Our Ottawa clinic specializes in injury recovery and MVA rehabilitation, with IFHP coverage accepted.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => {
                            const Icon = iconMap[service.icon] || Activity;
                            return (
                                <Link
                                    key={service.title}
                                    href={service.link}
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
                                alt={`LePro Wellness Center Ottawa - ${["Physiotherapy", "Massage Therapy", "Athletic Therapy", "Wellness Clinic"][index] || "Healthcare Services"}`}
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
                        Ready to Start Your Wellness Journey?
                    </h2>
                    <p className="text-xl mb-8 text-emerald-50 animate-slide-up delay-100">
                        Schedule your Ottawa physiotherapy or massage therapy appointment today. Join hundreds of satisfied patients who have found lasting pain relief at our expert-led wellness clinic.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-scale-in delay-200"
                    >
                        <span>Contact Us Now</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
