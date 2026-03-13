"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Surv. Damilola Faleye",
      role: "Chief Executive Officer (CEO)",
      description:
        "Meticulous adherence to all government regulatory standards ensuring transparent and reliable processes.",
      image: "/images/SeyeWebsite.jpg",
      linkedin: "#",
      email: "damilola@faleyeinc.com",
      phone: "+234-XXX-XXXX-XXX",
      jobTitle: "Chief Executive Officer",
      sameAs: ["https://www.linkedin.com/in/damilola-faleye"], // Add actual LinkedIn URL
    },
    {
      name: "Surv. Oyebode Samuel Dolapo",
      role: "Surveying and Geoinformatics ",
      description:
        "(Cadastral Surveying, Engineering/Construction Surveying, Topographic & Detail Surveys, Mapping, GIS, and Geospatial Data Analysis).",
      image: "/images/faleyeSamuel.jpg",
      linkedin: "#",
      email: "damilola@faleyeinc.com",
      phone: "+234-XXX-XXXX-XXX",
      jobTitle: "Managing Director",
      sameAs: ["https://www.linkedin.com/in/damilola-faleye"],
    },
    {
      name: "Lucky Harmony Benjamin",
      role: "Media and Communications",
      description:
        "Dynamic media relations and digital communications professional, translating technical expertise into engaging stakeholder experiences.",
      image: "/images/LuckySeyeWebsite.jpg",
      linkedin: "#",
      email: "damilola@faleyeinc.com",
      phone: "+234-XXX-XXXX-XXX",
      jobTitle: "Media and Communications Manager",
      sameAs: ["https://www.linkedin.com/in/lucky-harmony-benjamin"],
    },
    {
      name: "Surv. Adigun Khadijat Adebukola (ANIS)",
      role: "Documentations and Construction",
      description:
        "Land surveying and documentation Real Estate Land construction and development",
      image: "/images/faleyeKHADIJAT.jpg",
      linkedin: "#",
      email: "damilola@faleyeinc.com",
      phone: "+234-XXX-XXXX-XXX",
      jobTitle: "Media and Communications Manager",
      sameAs: ["https://www.linkedin.com/in/lucky-harmony-benjamin"],
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

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Structured data for Team section
  const teamStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Faleye Surveys",
    url: "https://www.faleyesurveys.com",
    employee: teamMembers.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.jobTitle,
      description: member.description,
      email: member.email,
      telephone: member.phone,
      image: `https://www.faleyesurveys.com${member.image}`,
      sameAs: member.sameAs,
      worksFor: {
        "@type": "Organization",
        name: "Faleye Surveys",
      },
    })),
  };

  return (
    <section
      id="team"
      className="relative py-24 bg-gradient-to-b from-[var(--color-secondary-10)] via-[var(--color-primary-0)] to-[var(--color-primary-10)] overflow-hidden"
      aria-labelledby="team-heading"
    >
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(teamStructuredData),
        }}
      />

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-96 h-96 bg-[var(--color-secondary-50)]/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-80 h-80 bg-[var(--color-primary-50)]/5 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
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
              <span className="text-sm font-bold text-[var(--color-secondary-50)] uppercase tracking-wider px-4 py-2 bg-[var(--color-secondary-20)] rounded-full">
                Our Team
              </span>
            </motion.div>

            <motion.h2
              id="team-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-secondary-90)] mb-4"
            >
              Meet Our{" "}
              <span className="relative inline-block">
                Expert Team
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-secondary-50)] to-[var(--color-primary-50)]"
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
              Dedicated professionals committed to delivering excellence in
              every project
            </motion.p>
          </motion.div>
        </header>

        {/* Team Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          role="list"
          aria-label="Team members"
        >
          {teamMembers.map((member, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative"
              role="listitem"
              itemScope
              itemType="https://schema.org/Person"
            >
              <div className="relative bg-gradient-to-b from-[var(--color-secondary-50)] to-[var(--color-secondary-70)] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                {/* Decorative Top Corner */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--color-primary-50)]/30 to-transparent rounded-bl-full z-10"
                  aria-hidden="true"
                />

                {/* Image Container */}
                <div className="relative overflow-hidden bg-[var(--color-primary-10)] mx-6 mt-6 rounded-2xl">
                  <motion.div
                    variants={imageVariants}
                    whileHover="hover"
                    className="relative h-80 overflow-hidden"
                  >
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role} at Faleye Surveys`}
                      className="w-full h-full object-cover"
                      itemProp="image"
                      loading="lazy"
                    />

                    {/* Gradient Overlay on Hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary-90)]/80 via-[var(--color-secondary-70)]/40 to-transparent"
                      aria-hidden="true"
                    />

                    {/* Social Links on Image Hover */}
                    <motion.div
                      initial="hidden"
                      whileHover="visible"
                      className="absolute inset-0 flex items-center justify-center gap-4"
                      role="group"
                      aria-label={`Social media links for ${member.name}`}
                    >
                      <motion.a
                        variants={socialVariants}
                        href={member.linkedin}
                        className="w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-[var(--color-secondary-50)] hover:text-[var(--color-primary-50)] transition-colors duration-300 backdrop-blur-sm"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        aria-label={`${member.name}'s LinkedIn profile`}
                        itemProp="sameAs"
                      >
                        <Linkedin className="w-6 h-6" />
                      </motion.a>
                      <motion.a
                        variants={socialVariants}
                        href={`mailto:${member.email}`}
                        className="w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-[var(--color-secondary-50)] hover:text-[var(--color-primary-50)] transition-colors duration-300 backdrop-blur-sm"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-6 h-6" />
                      </motion.a>
                      <motion.a
                        variants={socialVariants}
                        href={`tel:${member.phone}`}
                        className="w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-[var(--color-secondary-50)] hover:text-[var(--color-primary-50)] transition-colors duration-300 backdrop-blur-sm"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        aria-label={`Call ${member.name}`}
                      >
                        <Phone className="w-6 h-6" />
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative p-8 text-center">
                  {/* Name */}
                  <motion.h3
                    className="text-2xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    itemProp="name"
                  >
                    {member.name}
                  </motion.h3>

                  {/* Role */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="inline-block mb-4"
                  >
                    <span
                      className="px-4 py-1.5 bg-[var(--color-primary-50)] text-white text-sm font-bold rounded-full"
                      itemProp="jobTitle"
                    >
                      {member.role}
                    </span>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    className="text-white/90 leading-relaxed text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    itemProp="description"
                  >
                    {member.description}
                  </motion.p>

                  {/* Hidden metadata for SEO */}
                  <meta itemProp="email" content={member.email} />
                  <meta itemProp="telephone" content={member.phone} />
                  <div
                    itemProp="worksFor"
                    itemScope
                    itemType="https://schema.org/Organization"
                  >
                    <meta itemProp="name" content="Faleye Surveys" />
                  </div>

                  {/* Bottom Accent */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-transparent via-[var(--color-primary-50)] to-transparent rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    aria-hidden="true"
                  />
                </div>

                {/* Card Border Glow Effect */}
                <div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[var(--color-primary-50)]/50 transition-all duration-500"
                  aria-hidden="true"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[var(--color-primary-40)] to-[var(--color-primary-60)] rounded-2xl flex items-center justify-center shadow-xl z-20"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6 }}
                aria-hidden="true"
              >
                <span className="text-white font-bold text-xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-20"
        >
          <motion.p
            className="text-lg text-[var(--color-secondary-70)] mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Want to join our team or collaborate with us?
          </motion.p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-block px-12 py-5 bg-gradient-to-r from-[var(--color-secondary-50)] to-[var(--color-secondary-60)] text-white font-bold text-lg rounded-full shadow-xl shadow-[var(--color-secondary-50)]/30 hover:shadow-2xl hover:shadow-[var(--color-secondary-50)]/40 transition-all duration-300 overflow-hidden"
            aria-label="Contact Faleye Surveys team"
          >
            <span className="relative z-10 flex items-center gap-3">
              Get In Touch
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
              className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--color-primary-60)]"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
            />
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full" aria-hidden="true">
        <svg
          className="w-full h-24"
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
          <motion.path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="var(--color-primary-10)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5 }}
          />
        </svg>
      </div>
    </section>
  );
};

export default Team;
