import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import  herobg3 from '../assets/herobg3.png';
import herobg3dark from '../assets/herobg3dark.png';

const Hero = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      className="relative py-24 px-6 md:px-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Light mode background image with animation */}
      <motion.div
        className="absolute inset-0 z-0 block dark:hidden"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <img
          src={herobg3}
          alt="Light hero background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark mode background image with animation */}
      <motion.div
        className="absolute inset-0 z-0 hidden dark:block"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <img
          src={herobg3dark}
          alt="Dark hero background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-5xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Dagmawi
            </span>
          </h1>
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-cyan-400">
            Software Engineer & Project Manager
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I build intelligent, user-centric web applications for healthcare, research, and impactful digital products.
          </p>

          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
          >
            Let’s Connect <FiArrowRight />
          </button>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/3 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-600 dark:border-cyan-500 shadow-lg"
          >
            <img
              src="https://media.licdn.com/dms/image/v2/C4E03AQE5GYyfRf9Ajw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1645902913450?e=1752710400&v=beta&t=2oyjWtRRiT7TyH_zoFmQF_5ap7ARFBCH_9NeeLdr8M4"
              alt="Dagmawi Negesse"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900 z-10 pointer-events-none" />
    </motion.section>
  );
};

export default Hero;
