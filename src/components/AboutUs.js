"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, Target, Users, Zap } from "lucide-react";

const AboutUs = () => {
  const stats = [
    { value: "15+", label: "Years Experience", delay: 0.2 },
    { value: "200+", label: "Projects Completed", delay: 0.3 },
    { value: "100%", label: "Client Satisfaction", delay: 0.4 },
    { value: "7+", label: "Service Sectors", delay: 0.5 },
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence Driven",
      description:
        "Consistently delivering top-notch solutions with a proven track record of excellence.",
      color: "primary",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Focus",
      description:
        "Utilizing cutting-edge technology to ensure unparalleled accuracy in every project.",
      color: "secondary",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description:
        "Seasoned professionals bringing years of experience and industry knowledge.",
      color: "primary",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation Forward",
      description:
        "Keeping pace with industry trends to deliver progressive, cutting-edge solutions.",
      color: "secondary",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Structured data for About Us section
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "ProfessionalService",
      name: "Faleye Surveys",
      description:
        "A pioneering General Survey Firm operating in Lagos, Nigeria, dedicated to revolutionizing the survey industry with cutting-edge technology and expert precision.",
      foundingDate: "2009",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressRegion: "Lagos",
        addressCountry: "NG",
      },
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 6.5244,
          longitude: 3.3792,
        },
        geoRadius: "50000",
      },
      slogan: "Revolutionizing the Survey Industry",
      knowsAbout: [
        "Topographical Surveys",
        "Engineering Surveys",
        "Cadastral Surveys",
        "Geospatial Solutions",
        "Land Surveying",
        "GIS Technology",
        "Route Surveys",
        "Environmental Impact Assessment",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        bestRating: "5",
        ratingCount: "200",
      },
    },
  };

  // Organization structured data
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Faleye Surveys",
    url: "https://www.faleyesurveys.com",
    logo: "https://www.faleyesurveys.com/images/FaleyeWebsiteLogo.svg",
    description:
      "Expert survey team bringing 15+ years of experience in topographical, engineering, and cadastral surveying across Lagos and Nigeria.",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "50",
    },
    foundingDate: "2009",
    awards: "Industry-recognized excellence in survey services",
  };

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-[var(--color-primary-0)] via-[var(--color-primary-10)] to-[var(--color-secondary-10)] overflow-hidden"
      aria-labelledby="about-heading"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary-50)]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-secondary-50)]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="inline-block mb-4">
              <span className="text-sm font-bold text-[var(--color-primary-50)] uppercase tracking-wider px-4 py-2 bg-[var(--color-primary-20)] rounded-full">
                About Faleye Surveys
              </span>
            </motion.div>

            <motion.h2
              id="about-heading"
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-secondary-90)] mb-6"
              itemProp="headline"
            >
              Revolutionizing the{" "}
              <span className="text-[var(--color-primary-50)]">
                Survey Industry
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-[var(--color-secondary-70)] max-w-3xl mx-auto leading-relaxed"
              itemProp="description"
            >
              A pioneering General Survey Firm operating in Lagos, Nigeria,
              dedicated to revolutionizing the survey industry
            </motion.p>
          </motion.div>
        </header>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Text Content */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-6"
            itemScope
            itemType="https://schema.org/Article"
          >
            <motion.div variants={itemVariants}>
              <div
                className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--color-secondary-50)] mb-6"
                aria-hidden="true"
              />
              <h3
                className="text-3xl font-bold text-[var(--color-secondary-90)] mb-4"
                itemProp="name"
              >
                Our Story
              </h3>
              <p
                className="text-[var(--color-secondary-70)] leading-relaxed mb-4"
                itemProp="articleBody"
              >
                Faleye Surveys is a pioneering General Survey Firm operating in
                Lagos, Nigeria, dedicated to revolutionizing the survey
                industry. With a strong commitment to excellence, we have gained
                recognition for consistently delivering top-notch solutions
                within our specialized sectors.
              </p>
              <p className="text-[var(--color-secondary-70)] leading-relaxed">
                Our team is composed of seasoned experts who bring years of
                experience and a proven track record of excellence. We
                continuously evolve our approach, keeping pace with industry and
                technological trends, to ensure our services remain progressive
                and cutting-edge.
              </p>

              {/* Hidden metadata for SEO */}
              <meta itemProp="author" content="Faleye Surveys" />
              <meta itemProp="datePublished" content="2009-01-01" />
              <meta itemProp="inLanguage" content="en-NG" />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-4"
              itemScope
              itemType="https://schema.org/Award"
            >
              <div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-primary-60)] flex items-center justify-center"
                aria-hidden="true"
              >
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4
                  className="text-xl font-bold text-[var(--color-secondary-90)]"
                  itemProp="name"
                >
                  Certified Excellence
                </h4>
                <p
                  className="text-[var(--color-secondary-70)]"
                  itemProp="description"
                >
                  Industry-recognized standards and practices
                </p>
              </div>
            </motion.div>
          </motion.article>

          {/* Right Column - Stats Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="grid grid-cols-2 gap-6"
            role="list"
            aria-label="Company statistics"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                className="relative group"
                role="listitem"
                itemScope
                itemType="https://schema.org/QuantitativeValue"
              >
                <div className="bg-white rounded-2xl p-8 border border-[var(--color-primary-20)] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-50)]/5 to-[var(--color-secondary-50)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    <motion.h3
                      className="text-5xl font-bold bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-secondary-50)] bg-clip-text text-transparent mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: stat.delay, duration: 0.5 }}
                      itemProp="value"
                    >
                      {stat.value}
                    </motion.h3>
                    <p
                      className="text-[var(--color-secondary-70)] font-semibold text-sm"
                      itemProp="unitText"
                    >
                      {stat.label}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[var(--color-primary-50)]/10 to-transparent rounded-bl-full"
                    aria-hidden="true"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
          aria-label="Company core values and features"
        >
          {features.map((feature, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="relative group"
              role="listitem"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="h-full bg-white rounded-2xl p-8 border border-[var(--color-primary-20)] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Animated Icon Background */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                    feature.color === "primary"
                      ? "from-[var(--color-primary-40)] to-[var(--color-primary-60)]"
                      : "from-[var(--color-secondary-40)] to-[var(--color-secondary-60)]"
                  } flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  aria-hidden="true"
                >
                  <div className="text-white">{feature.icon}</div>
                </motion.div>

                <h4
                  className="text-xl font-bold text-[var(--color-secondary-90)] mb-3"
                  itemProp="name"
                >
                  {feature.title}
                </h4>
                <p
                  className="text-[var(--color-secondary-70)] leading-relaxed"
                  itemProp="description"
                >
                  {feature.description}
                </p>

                {/* Hidden metadata for SEO */}
                <meta itemProp="provider" content="Faleye Surveys" />
                <meta itemProp="serviceType" content="Survey Excellence" />

                {/* Bottom Accent Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 ${
                    feature.color === "primary"
                      ? "bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--color-primary-60)]"
                      : "bg-gradient-to-r from-[var(--color-secondary-50)] to-[var(--color-secondary-60)]"
                  }`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  aria-hidden="true"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-20"
        >
          <motion.a
            href="#team"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-block px-12 py-5 bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--color-primary-60)] text-white font-bold text-lg rounded-full shadow-xl shadow-[var(--color-primary-50)]/30 hover:shadow-2xl hover:shadow-[var(--color-primary-50)]/40 transition-all duration-300 overflow-hidden"
            aria-label="Learn more about Faleye Surveys team"
          >
            <span className="relative z-10 flex items-center gap-3">
              Learn More About Us
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
    </section>
  );
};

export default AboutUs;
