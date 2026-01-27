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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-[var(--color-primary-0)] via-[var(--color-primary-10)] to-[var(--color-secondary-10)] overflow-hidden"
    >
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
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="text-sm font-bold text-[var(--color-primary-50)] uppercase tracking-wider px-4 py-2 bg-[var(--color-primary-20)] rounded-full">
              About Faleye Inc.
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-secondary-90)] mb-6"
          >
            Revolutionizing the{" "}
            <span className="text-[var(--color-primary-50)]">
              Survey Industry
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[var(--color-secondary-70)] max-w-3xl mx-auto leading-relaxed"
          >
            A pioneering General Survey Firm operating in Lagos, Nigeria,
            dedicated to revolutionizing the survey industry
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--color-secondary-50)] mb-6" />
              <h3 className="text-3xl font-bold text-[var(--color-secondary-90)] mb-4">
                Our Story
              </h3>
              <p className="text-[var(--color-secondary-70)] leading-relaxed mb-4">
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
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-4"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-primary-60)] flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[var(--color-secondary-90)]">
                  Certified Excellence
                </h4>
                <p className="text-[var(--color-secondary-70)]">
                  Industry-recognized standards and practices
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="grid grid-cols-2 gap-6"
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
              >
                <div className="bg-white rounded-2xl p-8 border border-[var(--color-primary-20)] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-50)]/5 to-[var(--color-secondary-50)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <motion.h3
                      className="text-5xl font-bold bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-secondary-50)] bg-clip-text text-transparent mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: stat.delay, duration: 0.5 }}
                    >
                      {stat.value}
                    </motion.h3>
                    <p className="text-[var(--color-secondary-70)] font-semibold text-sm">
                      {stat.label}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[var(--color-primary-50)]/10 to-transparent rounded-bl-full" />
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
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="relative group"
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
                >
                  <div className="text-white">{feature.icon}</div>
                </motion.div>

                <h4 className="text-xl font-bold text-[var(--color-secondary-90)] mb-3">
                  {feature.title}
                </h4>
                <p className="text-[var(--color-secondary-70)] leading-relaxed">
                  {feature.description}
                </p>

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
                />
              </div>
            </motion.div>
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--color-primary-60)] text-white font-bold text-lg rounded-full shadow-xl shadow-[var(--color-primary-50)]/30 hover:shadow-2xl hover:shadow-[var(--color-primary-50)]/40 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Learn More About Us
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
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
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
