"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      title: "Pioneering Survey Solutions",
      description:
        "Revolutionizing the survey industry in Nigeria with cutting-edge technology, expert precision, and unwavering commitment to excellence.",
      buttonText: "Get Started Today",
      image: "/images/surveyor-equipment.jpg",
    },
    {
      title: "Advanced Geospatial Mapping",
      description:
        "Harnessing state-of-the-art GPS and drone technology to deliver unparalleled accuracy in land surveying and mapping solutions.",
      buttonText: "Explore Services",
      image: "/images/advanced-geo.jpg",
    },
    {
      title: "Smart Infrastructure Planning",
      description:
        "Empowering developers and government agencies with data-driven insights for sustainable urban development and infrastructure projects.",
      buttonText: "Learn More",
      image: "images/smartInfrastructure.jpg",
    },
    {
      title: "3D Terrain Modeling",
      description:
        "Transform your projects with photorealistic 3D terrain models and advanced LiDAR scanning for precision engineering and design.",
      buttonText: "View Portfolio",
      image: "/images/3dterrainmodelling.jpeg",
    },
    {
      title: "Digital Transformation",
      description:
        "Leading Nigeria's surveying industry into the future with AI-powered analytics, cloud-based solutions, and real-time collaboration tools.",
      buttonText: "Join the Future",
      image: "/images/digitalTransformation.jpeg",
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  // Manual navigation handlers
  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Ken Burns Effect */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === currentSlide
              ? "opacity-100 scale-105"
              : "opacity-0 scale-100"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover animate-ken-burns"
          />
          {/* Gradient Overlay with theme colors */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary-100)]/80 via-[var(--color-secondary-90)]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary-100)]/70 via-transparent to-transparent" />
        </div>
      ))}

      {/* Floating Orbs with theme colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary-50)]/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--color-secondary-50)]/20 rounded-full blur-3xl animate-float-slower" />
      </div>

      {/* Main Content */}
      <div className="relative h-full flex items-center px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          {/* Animated Line Accent */}
          <div
            className={`mb-6 transition-all duration-700 ${
              isAnimating ? "w-0 opacity-0" : "w-24 opacity-100"
            }`}
          >
            <div className="h-1 bg-gradient-to-r from-[var(--color-primary-50)] to-transparent" />
          </div>

          {/* Title */}
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[var(--color-primary-0)] mb-6 leading-tight transition-all duration-700 ${
              isAnimating
                ? "opacity-0 translate-x-12 blur-sm"
                : "opacity-100 translate-x-0 blur-0"
            }`}
          >
            {slides[currentSlide].title.split(" ").map((word, i) => (
              <span
                key={i}
                className="inline-block mr-4 mb-2"
                style={{
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p
            className={`text-xl sm:text-2xl text-[var(--color-primary-10)] mb-10 leading-relaxed transition-all duration-700 delay-200 ${
              isAnimating
                ? "opacity-0 translate-x-12 blur-sm"
                : "opacity-100 translate-x-0 blur-0"
            }`}
          >
            {slides[currentSlide].description}
          </p>

          {/* CTA Button */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isAnimating
                ? "opacity-0 translate-y-8 blur-sm"
                : "opacity-100 translate-y-0 blur-0"
            }`}
          >
            <button className="group relative px-10 py-5 bg-[var(--color-primary-50)] text-[var(--color-primary-0)] font-bold text-lg rounded-full overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--color-primary-50)]/50">
              <span className="relative z-10 flex items-center gap-3">
                {slides[currentSlide].buttonText}
                <span className="inline-block transform group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </span>
              {/* Ripple effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-40)] to-[var(--color-primary-60)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-[var(--color-primary-0)]/10 backdrop-blur-xl rounded-full text-[var(--color-primary-0)] hover:bg-[var(--color-primary-0)]/20 transition-all duration-300 border border-[var(--color-primary-0)]/20 hover:scale-110 hover:border-[var(--color-primary-0)]/40 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-[var(--color-primary-0)]/10 backdrop-blur-xl rounded-full text-[var(--color-primary-0)] hover:bg-[var(--color-primary-0)]/20 transition-all duration-300 border border-[var(--color-primary-0)]/20 hover:scale-110 hover:border-[var(--color-primary-0)]/40 z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            {/* Outer ring */}
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                index === currentSlide
                  ? "bg-[var(--color-primary-0)]/20 backdrop-blur-xl border-2 border-[var(--color-primary-50)] scale-110"
                  : "bg-[var(--color-primary-0)]/5 backdrop-blur-md border border-[var(--color-primary-0)]/20 group-hover:bg-[var(--color-primary-0)]/10 group-hover:scale-105"
              }`}
            >
              {/* Inner dot */}
              <div
                className={`rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? "w-6 h-6 bg-[var(--color-primary-50)]"
                    : "w-3 h-3 bg-[var(--color-primary-0)]/50 group-hover:w-4 group-hover:h-4 group-hover:bg-[var(--color-primary-0)]/70"
                }`}
              />
            </div>

            {/* Number */}
            <span
              className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-semibold transition-all duration-300 ${
                index === currentSlide
                  ? "text-[var(--color-primary-50)] opacity-100"
                  : "text-[var(--color-primary-0)]/50 opacity-0 group-hover:opacity-100"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      {/* Animated Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[var(--color-primary-0)]/10 to-[var(--color-primary-0)]/5 z-20">
        <div
          className="h-full bg-gradient-to-r from-[var(--color-primary-50)] via-[var(--color-primary-40)] to-[var(--color-primary-50)] transition-all duration-500 ease-out relative overflow-hidden"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-primary-0)]/50 to-transparent animate-shimmer" />
        </div>
      </div>

      <style jsx>{`
        @keyframes ken-burns {
          0%,
          100% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.1);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, 30px);
          }
        }
        @keyframes float-slower {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-40px, -40px);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-ken-burns {
          animation: ken-burns 20s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 20s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
