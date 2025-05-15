import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaCloud, FaMagic, FaRobot } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={28} className="text-blue-600 dark:text-blue-400" />,
    title: "Custom Website Design",
    desc: "Modern, mobile-friendly designs tailored to your brand and goals.",
  },
  {
    icon: <FaMagic size={28} className="text-purple-600 dark:text-purple-400" />,
    title: "React & Tailwind Development",
    desc: "High-performance front-end apps built with the latest stack.",
  },
  {
    icon: <FaServer size={28} className="text-green-600 dark:text-green-400" />,
    title: "Backend Integration",
    desc: "Robust API and database setups using Django, Node.js, or Firebase.",
  },
  {
    icon: <FaCloud size={28} className="text-indigo-600 dark:text-indigo-400" />,
    title: "Cloud Deployment",
    desc: "Deploy to AWS, Render, or Vercel with CI/CD and monitoring setup.",
  },
  {
    icon: <FaRobot size={28} className="text-rose-600 dark:text-rose-400" />,
    title: "NLP & Research Tools",
    desc: "Custom NLP pipelines and dashboards for healthcare and research.",
  },
];

const FreelanceServices = () => {
  return (
    <motion.section
      id="services"
      className="px-6 md:px-10 py-20 bg-white dark:bg-gray-900 transition-colors"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Freelance Services
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          I help individuals and small teams transform ideas into scalable digital products.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FreelanceServices;
