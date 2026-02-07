"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Adebayo Williams",
      role: "Property Developer",
      company: "Williams & Co. Developments",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "Faleye Inc. transformed our land acquisition process. Their meticulous surveying and regulatory compliance made what could have been a nightmare into a smooth, professional experience. Highly recommended!",
      datePublished: "2024-11-15",
    },
    {
      name: "Mrs. Chioma Okafor",
      role: "Real Estate Investor",
      company: "Okafor Properties Ltd",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "The attention to detail and commitment to excellence is unmatched. From initial consultation to final documentation, every step was handled with utmost professionalism. A truly outstanding team!",
      datePublished: "2024-10-28",
    },
    {
      name: "Engr. Tunde Bakare",
      role: "Civil Engineer",
      company: "Bakare Engineering Solutions",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "Working with Faleye Inc. on our infrastructure project was a game-changer. Their technical expertise and adherence to government standards ensured seamless project execution. Exceptional service!",
      datePublished: "2024-09-12",
    },
    {
      name: "Alhaji Musa Ibrahim",
      role: "Land Owner",
      company: "Ibrahim Ventures",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "I've worked with several surveying firms, but none compare to Faleye Inc. Their transparency, reliability, and deep knowledge of regulatory processes set them apart. They deliver on every promise!",
      datePublished: "2024-08-20",
    },
    {
      name: "Dr. Ngozi Eze",
      role: "Urban Planning Consultant",
      company: "Eze Urban Designs",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "Faleye Inc. brings a level of precision and professionalism that's rare in the industry. Their comprehensive approach and commitment to client satisfaction make them my go-to surveying partner.",
      datePublished: "2024-07-05",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const starVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const quoteVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  // Structured data for testimonials
  const testimonialsStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Faleye Surveys",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
      ratingCount: testimonials.length,
    },
    review: testimonials.map((testimonial) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: testimonial.name,
        jobTitle: testimonial.role,
        worksFor: {
          "@type": "Organization",
          name: testimonial.company,
        },
      },
      datePublished: testimonial.datePublished,
      reviewBody: testimonial.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: testimonial.rating,
        bestRating: "5",
        worstRating: "1",
      },
      itemReviewed: {
        "@type": "ProfessionalService",
        name: "Faleye Surveys",
        image: "https://www.faleyesurveys.com/images/FaleyeWebsiteLogo.svg",
      },
    })),
  };

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-gradient-to-b from-[var(--color-primary-10)] via-white to-[var(--color-secondary-10)] overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(testimonialsStructuredData),
        }}
      />

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-0 w-96 h-96 bg-[var(--color-primary-50)]/5 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-20 right-0 w-80 h-80 bg-[var(--color-secondary-50)]/5 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-20 h-20 border-4 border-[var(--color-primary-50)]/20 rounded-lg"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-[var(--color-secondary-50)]/10 to-transparent rounded-full"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="text-sm font-bold text-[var(--color-primary-50)] uppercase tracking-wider px-4 py-2 bg-[var(--color-primary-20)] rounded-full">
                Client Testimonials
              </span>
            </motion.div>

            <motion.h2
              id="testimonials-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-secondary-90)] mb-4"
            >
              What Our{" "}
              <span className="relative inline-block">
                Clients Say
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--color-secondary-50)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  aria-hidden="true"
                />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-[var(--color-secondary-70)] max-w-3xl mx-auto"
            >
              Hear from our satisfied clients about their experiences working
              with us
            </motion.p>
          </motion.div>
        </header>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Card */}
          <div
            className="relative min-h-[500px] flex items-center justify-center perspective-1000"
            role="region"
            aria-label="Client testimonials carousel"
            aria-live="polite"
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.article
                key={currentIndex}
                custom={1}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                  {/* Decorative Corner Elements */}
                  <div
                    className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[var(--color-primary-50)]/20 to-transparent rounded-br-full"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[var(--color-secondary-50)]/20 to-transparent rounded-tl-full"
                    aria-hidden="true"
                  />

                  {/* Quote Icon */}
                  <motion.div
                    variants={quoteVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-primary-60)] rounded-2xl flex items-center justify-center shadow-xl rotate-12 z-10"
                    aria-hidden="true"
                  >
                    <Quote className="w-8 h-8 text-white" fill="currentColor" />
                  </motion.div>

                  <div className="relative p-12 md:p-16">
                    {/* Rating Stars */}
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      className="flex justify-center gap-2 mb-8"
                      itemProp="reviewRating"
                      itemScope
                      itemType="https://schema.org/Rating"
                      role="img"
                      aria-label={`${testimonials[currentIndex].rating} out of 5 stars`}
                    >
                      <meta
                        itemProp="ratingValue"
                        content={testimonials[currentIndex].rating.toString()}
                      />
                      <meta itemProp="bestRating" content="5" />
                      <meta itemProp="worstRating" content="1" />
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <motion.div
                            key={i}
                            custom={i}
                            variants={starVariants}
                          >
                            <Star
                              className="w-6 h-6 text-[var(--color-primary-50)]"
                              fill="var(--color-primary-50)"
                              aria-hidden="true"
                            />
                          </motion.div>
                        ),
                      )}
                    </motion.div>

                    {/* Testimonial Text */}
                    <motion.blockquote
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="text-xl md:text-2xl text-[var(--color-secondary-80)] text-center leading-relaxed mb-12 font-light italic"
                      itemProp="reviewBody"
                    >
                      "{testimonials[currentIndex].text}"
                    </motion.blockquote>

                    {/* Client Info */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="flex flex-col items-center"
                      itemProp="author"
                      itemScope
                      itemType="https://schema.org/Person"
                    >
                      {/* Client Image */}
                      <div className="relative mb-4">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--color-secondary-50)] rounded-full blur-lg opacity-50"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.7, 0.5],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          aria-hidden="true"
                        />
                        <img
                          src={testimonials[currentIndex].image}
                          alt={`${testimonials[currentIndex].name}, ${testimonials[currentIndex].role}`}
                          className="relative w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
                          itemProp="image"
                          loading="lazy"
                        />
                      </div>

                      {/* Client Name */}
                      <h3
                        className="text-2xl font-bold text-[var(--color-secondary-90)] mb-1"
                        itemProp="name"
                      >
                        {testimonials[currentIndex].name}
                      </h3>

                      {/* Client Role */}
                      <p
                        className="text-[var(--color-primary-50)] font-semibold mb-1"
                        itemProp="jobTitle"
                      >
                        {testimonials[currentIndex].role}
                      </p>

                      {/* Company */}
                      <p
                        className="text-[var(--color-secondary-60)] text-sm"
                        itemProp="worksFor"
                        itemScope
                        itemType="https://schema.org/Organization"
                      >
                        <span itemProp="name">
                          {testimonials[currentIndex].company}
                        </span>
                      </p>

                      {/* Hidden metadata for SEO */}
                      <meta
                        itemProp="datePublished"
                        content={testimonials[currentIndex].datePublished}
                      />
                    </motion.div>

                    {/* Decorative Line */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary-50)] to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Hidden structured data */}
                  <div
                    itemProp="itemReviewed"
                    itemScope
                    itemType="https://schema.org/ProfessionalService"
                    style={{ display: "none" }}
                  >
                    <meta itemProp="name" content="Faleye Surveys" />
                    <meta
                      itemProp="image"
                      content="https://www.faleyesurveys.com/images/FaleyeWebsiteLogo.svg"
                    />
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="pointer-events-auto w-14 h-14 rounded-full bg-gradient-to-r from-[var(--color-secondary-50)] to-[var(--color-secondary-60)] text-white shadow-xl hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="pointer-events-auto w-14 h-14 rounded-full bg-gradient-to-r from-[var(--color-secondary-50)] to-[var(--color-secondary-60)] text-white shadow-xl hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>

          {/* Dots Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-3 mt-12"
            aria-label="Testimonial navigation dots"
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className="relative group"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              >
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[var(--color-primary-50)] w-10"
                      : "bg-[var(--color-secondary-30)] group-hover:bg-[var(--color-secondary-50)]"
                  }`}
                />
              </motion.button>
            ))}
          </motion.nav>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
          role="list"
          aria-label="Company statistics"
        >
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "1000+", label: "Projects Completed" },
            { number: "15+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-white to-[var(--color-primary-10)] shadow-lg hover:shadow-xl transition-shadow duration-300"
              role="listitem"
            >
              <motion.h3
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--color-secondary-50)] bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-[var(--color-secondary-70)] font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-lg text-[var(--color-secondary-70)] mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Ready to experience excellence for yourself?
          </motion.p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-block px-12 py-5 bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--color-primary-60)] text-white font-bold text-lg rounded-full shadow-xl shadow-[var(--color-primary-50)]/30 hover:shadow-2xl hover:shadow-[var(--color-primary-50)]/40 transition-all duration-300 overflow-hidden"
            aria-label="Contact us to start your project"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Your Project Today
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                aria-hidden="true"
              >
                →
              </motion.span>
            </span>

            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary-50)] to-[var(--color-secondary-60)]"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
            />
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full" aria-hidden="true">
        <svg
          className="w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="var(--color-secondary-10)"
            opacity="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
