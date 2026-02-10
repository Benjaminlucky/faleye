"use client";
import React from "react";
import { motion } from "framer-motion";
import { Handshake, Award, TrendingUp, Users } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "MOD INFINITY LIMITED",
      tagline: "Excellence in Service",
      logo: "/images/mod.jpeg", // Replace with actual VOPNUCITY logo
      description: "Leading urban development partner",
    },
    {
      name: "KHL",
      tagline: "KEMCHUTA HOMES LIMITED",
      logo: "/images/khlLogoKemchuta.png", // Replace with actual KHL logo
      description: "Premium real estate solutions",
    },
    {
      name: "VOPNUCITY LIMITED",
      tagline: "Setting Standards",
      logo: "/images/vopnucity.jpg", // Replace with actual partner logo
      description: "Innovative property development",
    },
  ];

  const stats = [
    {
      icon: Handshake,
      number: "50+",
      label: "Strategic Partners",
      color: "from-[var(--color-primary-50)] to-[var(--color-primary-60)]",
    },
    {
      icon: Award,
      number: "100+",
      label: "Joint Projects",
      color: "from-[var(--color-secondary-50)] to-[var(--color-secondary-60)]",
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Success Rate",
      color: "from-[var(--color-primary-50)] to-[var(--color-primary-60)]",
    },
    {
      icon: Users,
      number: "1000+",
      label: "Satisfied Clients",
      color: "from-[var(--color-secondary-50)] to-[var(--color-secondary-60)]",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="partners"
      className="relative py-24 bg-gradient-to-b from-white via-[var(--color-primary-10)] to-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Vertical Stripes Pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 bottom-0 bg-gradient-to-b from-[var(--color-primary-50)]/20 to-transparent"
              style={{
                left: `${i * 6.67}%`,
                width: "3.33%",
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 border-4 border-[var(--color-secondary-50)]/20 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-[var(--color-primary-50)]/10 to-transparent rounded-lg"
        animate={{
          rotate: [0, -360],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-bold text-[var(--color-secondary-50)] uppercase tracking-wider px-4 py-2 bg-[var(--color-secondary-20)] rounded-full">
              Trusted Partnerships
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-secondary-90)] mb-4"
          >
            Our{" "}
            <span className="relative inline-block">
              Partners
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-secondary-50)] to-[var(--color-primary-50)]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
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
            Collaborating with industry leaders to deliver exceptional results
          </motion.p>
        </motion.div>

        {/* Partners Logos Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={logoVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-50)]/20 via-transparent to-[var(--color-secondary-50)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[var(--color-primary-50)]/10 to-transparent rounded-bl-full" />

                {/* Content */}
                <div className="relative p-10">
                  {/* Logo Container */}
                  <motion.div
                    className="relative h-32 flex items-center justify-center mb-6 bg-gradient-to-br from-[var(--color-primary-10)] to-[var(--color-secondary-10)] rounded-2xl p-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />

                    {/* Animated Glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-50)]/0 via-[var(--color-primary-50)]/20 to-[var(--color-primary-50)]/0 rounded-2xl"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 2,
                      }}
                    />
                  </motion.div>

                  {/* Partner Name */}
                  <h3 className="text-xl font-bold text-[var(--color-secondary-90)] text-center mb-2">
                    {partner.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm text-[var(--color-primary-50)] font-semibold text-center mb-3">
                    {partner.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[var(--color-secondary-70)] text-center">
                    {partner.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary-50)] to-transparent rounded-full"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "80%" }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  />
                </div>

                {/* Hover Border Glow */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[var(--color-primary-50)]/30 transition-all duration-500" />
              </div>

              {/* Floating Number Badge */}
              <motion.div
                className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-[var(--color-secondary-50)] to-[var(--color-secondary-60)] rounded-2xl flex items-center justify-center shadow-xl z-10"
                initial={{ rotate: 0, scale: 0 }}
                whileInView={{ rotate: 360, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ rotate: 180, scale: 1.1 }}
              >
                <span className="text-white font-bold text-lg">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-[var(--color-secondary-50)] to-[var(--color-secondary-70)] rounded-3xl shadow-2xl overflow-hidden p-12 md:p-16"
        >
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
          </div>

          {/* Animated Orbs */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary-50)]/20 rounded-full blur-3xl"
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
            className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Stats Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="relative grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center mb-4"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Number */}
                <motion.h3
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {stat.number}
                </motion.h3>

                {/* Label */}
                <p className="text-white/90 font-semibold">{stat.label}</p>

                {/* Decorative Line */}
                <motion.div
                  className="mt-4 mx-auto w-12 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                />
              </motion.div>
            ))}
          </motion.div>
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
            Interested in becoming a partner?
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--color-primary-60)] text-white font-bold text-lg rounded-full shadow-xl shadow-[var(--color-primary-50)]/30 hover:shadow-2xl hover:shadow-[var(--color-primary-50)]/40 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Partner With Us
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

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="var(--color-primary-10)"
            opacity="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
        </svg>
      </div>
    </section>
  );
};

export default Partners;
