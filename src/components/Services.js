"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Route, Leaf, Users, Layers, Globe, Ruler } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "Surveying & Mapping",
      description:
        "Comprehensive land surveying and detailed mapping solutions using state-of-the-art technology for precise measurements and documentation.",
      gradient: "from-[var(--color-primary-40)] to-[var(--color-primary-60)]",
      delay: 0.1,
    },
    {
      icon: <Route className="w-10 h-10" />,
      title: "Route Survey",
      description:
        "Professional route planning and surveying for infrastructure projects, ensuring optimal path selection and terrain analysis.",
      gradient: "from-[var(--color-primary-50)] to-[var(--color-primary-70)]",
      delay: 0.2,
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "Environmental Impact Assessment",
      description:
        "Thorough environmental studies to assess potential impacts of development projects on ecosystems and communities.",
      gradient: "from-[var(--color-primary-40)] to-[var(--color-primary-70)]",
      delay: 0.3,
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Social Economic Surveys",
      description:
        "In-depth socio-economic research and data collection to inform policy decisions and development strategies.",
      gradient: "from-[var(--color-primary-50)] to-[var(--color-primary-70)]",
      delay: 0.4,
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: "GeoTechnical Surveys",
      description:
        "Detailed subsurface investigations and soil analysis for construction and engineering projects.",
      gradient: "from-[var(--color-primary-40)] to-[var(--color-primary-60)]",
      delay: 0.5,
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Geo-Informatics Infrastructure",
      description:
        "Advanced GIS solutions and spatial data management systems for efficient information handling.",
      gradient: "from-[var(--color-primary-50)] to-[var(--color-primary-80)]",
      delay: 0.6,
    },
    {
      icon: <Ruler className="w-10 h-10" />,
      title: "Geomatics",
      description:
        "Cutting-edge geomatics services including GPS surveying, remote sensing, and digital mapping technologies.",
      gradient: "from-[var(--color-primary-50)] to-[var(--color-primary-70)]",
      delay: 0.7,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, -10, 0],
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const shimmerVariants = {
    animate: {
      x: ["-100%", "100%"],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-b from-[var(--color-primary-10)] via-[var(--color-primary-0)] to-[var(--color-secondary-10)] overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(var(--color-primary-20) 1px, transparent 1px),
                           linear-gradient(90deg, var(--color-primary-20) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-40 right-20 w-64 h-64 bg-[var(--color-primary-50)]/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-80 h-80 bg-[var(--color-secondary-50)]/10 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
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
            <span className="text-sm font-bold text-[var(--color-primary-50)] uppercase tracking-wider px-4 py-2 bg-[var(--color-primary-20)] rounded-full">
              What We Offer
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
              Services
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--color-secondary-50)]"
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
            Comprehensive solutions tailored to meet your surveying and mapping
            needs
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -15,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-2xl overflow-hidden border border-[var(--color-primary-20)] shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    variants={shimmerVariants}
                    animate="animate"
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    style={{ width: "50%" }}
                  />
                </div>

                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Card Content */}
                <div className="relative z-10 p-8">
                  {/* Icon Container */}
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[var(--color-secondary-90)] group-hover:text-white mb-4 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--color-secondary-70)] group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="mt-6 flex items-center gap-2 text-[var(--color-primary-50)] group-hover:text-white font-semibold transition-colors duration-300"
                  >
                    <span>Learn More</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[var(--color-primary-50)]/10 to-transparent rounded-bl-full group-hover:from-white/20 transition-all duration-300" />

                {/* Bottom Glow */}
                <motion.div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: service.delay, duration: 0.8 }}
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
          <motion.p
            className="text-lg text-[var(--color-secondary-70)] mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Ready to start your next project?
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--color-primary-60)] text-white font-bold text-lg rounded-full shadow-xl shadow-[var(--color-primary-50)]/30 hover:shadow-2xl hover:shadow-[var(--color-primary-50)]/40 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Request a Quote
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

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="var(--color-secondary-10)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
        </svg>
      </div>
    </section>
  );
};

export default Services;
