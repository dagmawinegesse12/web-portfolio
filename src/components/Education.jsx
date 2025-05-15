import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

const educationData = [
  {
    school: "Eastern Kentucky University",
    degree: "Master’s in Technology Management",
    date: "2020 – 2022",
    highlights: [
      "Graduated with a 4.0 GPA",
      "Capstone: Built a security camera system using Python, OpenCV, and Raspberry Pi",
      "Focus: Project management and applied innovation",
    ],
  },
  {
    school: "Eastern Kentucky University",
    degree: "Bachelor’s in Computer Science",
    date: "2016 – 2020",
    highlights: [
      "Graduated with Honors Distinction",
      "Capstone: Developed a website for an Ethiopian hotel to boost engagement & overseas booking",
    ],
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="px-6 md:px-10 py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Education</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Like flipping through a journal of growth
        </p>
      </div>

      <div className="space-y-12 max-w-6xl mx-auto">
        {educationData.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative flex flex-col md:flex-row rounded-2xl shadow-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-transform hover:scale-[1.01]"
          >
            {/* Optional center crease (hidden on small) */}
            <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-[2px] bg-gradient-to-b from-gray-300 dark:from-gray-600 to-transparent z-10" />

            {/* Left side */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-700 bg-[#fdfdfc] dark:bg-gray-800">
              <FaGraduationCap className="text-4xl text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
              <p className="text-gray-700 dark:text-gray-300">{edu.school}</p>
              <p className="text-sm text-gray-400 mt-1">{edu.date}</p>
            </div>

            {/* Right side */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-[#fefefe] dark:bg-gray-800 z-0">
              <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Highlights
              </h4>
              <ul className="space-y-3 text-sm">
                {edu.highlights.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <FiCheckCircle className="text-indigo-500 mt-1 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
