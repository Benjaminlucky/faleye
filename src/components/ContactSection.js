"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

const ContactSection = () => {
  // Animation variants mirroring the Testimonials style
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const infoItems = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Address",
      content:
        "NO 2B Ibrahim Babatunde Close Olive Park Estate, Sangotedo Lagos, Nigeria",
      color: "var(--color-primary-50)",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@faleyesurveys.com",
      color: "var(--color-secondary-50)",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+234 (0)807 300 4434, +234 (0)708 558 9502",
      color: "var(--color-primary-50)",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      content: "Monday - Friday: 8:00AM - 5:00 PM",
      color: "var(--color-secondary-50)",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-white via-[var(--color-primary-10)] to-white overflow-hidden"
    >
      {/* Background Animated Blobs */}
      <motion.div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[var(--color-primary-20)]/30 rounded-full blur-[100px] -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[var(--color-secondary-20)]/30 rounded-full blur-[100px] -z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left Side: Info */}
          <div className="space-y-12">
            <motion.div variants={itemVariants}>
              <span className="text-sm font-bold text-[var(--color-primary-50)] uppercase tracking-widest px-4 py-2 bg-[var(--color-primary-20)] rounded-full inline-block mb-6">
                Get In Touch
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-[var(--color-secondary-90)] leading-tight">
                Let’s Discuss Your <br />
                <span className="relative inline-block">
                  Next Project
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-2 bg-[var(--color-primary-40)] -z-10"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {infoItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group flex items-start gap-4 p-4 rounded-2xl transition-colors hover:bg-white hover:shadow-xl hover:shadow-[var(--color-primary-50)]/5"
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-secondary-90)] mb-1 uppercase text-xs tracking-wider">
                      {item.title}
                    </h4>
                    <p className="text-[var(--color-secondary-70)] font-medium">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social / Trust Badge */}
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-3xl bg-[var(--color-secondary-90)] text-white flex items-center justify-between overflow-hidden relative"
            >
              <div className="relative z-10">
                <p className="text-sm opacity-70 mb-1">Quick Response</p>
                <h5 className="text-xl font-bold">
                  Typically replies in 2 hours
                </h5>
              </div>
              <MessageSquare className="w-12 h-12 opacity-20 absolute right-6 top-1/2 -translate-y-1/2 rotate-12" />
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div variants={itemVariants} className="relative">
            {/* Form Decorative Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--color-secondary-50)] rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-[var(--color-secondary-10)]">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[var(--color-secondary-80)] ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-xl bg-[var(--color-secondary-10)]/50 border-2 border-transparent focus:border-[var(--color-primary-50)] focus:bg-white outline-none transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[var(--color-secondary-80)] ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-xl bg-[var(--color-secondary-10)]/50 border-2 border-transparent focus:border-[var(--color-primary-50)] focus:bg-white outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[var(--color-secondary-80)] ml-1">
                    Service Interested In
                  </label>
                  <select className="w-full px-6 py-4 rounded-xl bg-[var(--color-secondary-10)]/50 border-2 border-transparent focus:border-[var(--color-primary-50)] focus:bg-white outline-none transition-all duration-300 appearance-none">
                    <option>Land Surveying</option>
                    <option>Topographic Mapping</option>
                    <option>Property Documentation</option>
                    <option>Engineering Survey</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[var(--color-secondary-80)] ml-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your project..."
                    className="w-full px-6 py-4 rounded-xl bg-[var(--color-secondary-10)]/50 border-2 border-transparent focus:border-[var(--color-primary-50)] focus:bg-white outline-none transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full group relative py-5 bg-[var(--color-secondary-50)] text-white font-bold text-lg rounded-xl shadow-xl shadow-[var(--color-secondary-50)]/20 overflow-hidden transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--color-primary-60)]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
