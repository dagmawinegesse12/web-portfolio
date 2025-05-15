import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiSmartphone } from "react-icons/fi";

const projects = [
  {
    title: "Zemen Bar Website",
    icon: <FiCode size={20} />,
    description:
      "Modern Ethiopian restaurant site built with React, Tailwind, and Vercel.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    live: "https://zemenrestaurant.vercel.app",
  },
  {
    title: "Car Detailing Website: Splash Xperts",
    icon: <FiCode size={20} />,
    description:
      "Single-page React site for a car detailing business using Tailwind.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    live: "https://splash-xperts.vercel.app/",
  },
  {
    title: "SPECTACULAR Platform",
    icon: <FiSmartphone size={20} />,
    description:
      "Clinical decision-support tool for nurses with layout customization and Bayesian adaptation.",
    tech: ["React", "Django", "Bayesian"],
    live: null,
  },
  {
    title: "SUD Phenotyping Pipeline",
    icon: <FiDatabase size={20} />,
    description:
      "NLP pipeline for substance use disorder using OMOP and MedSpaCy.",
    tech: ["Python", "SpaCy", "MongoDB"],
    live: null,
  },
  
  {
    title: "Entity Extraction Pipeline",
    icon: <FiDatabase size={20} />,
    description:
      "High-throughput clinical NLP pipeline using spaCy, MongoDB, and SLURM.",
    tech: ["Python", "spaCy", "MongoDB", "SLURM"],
    live: null,
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="px-6 md:px-10 py-20 bg-gray-50 dark:bg-gray-900 transition-colors"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Featured Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
           <motion.div
           key={index}
           className="relative flex flex-col justify-between h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all p-6"
           whileHover={{ scale: 1.02 }}
         >
           {/* Header (icon + title) */}
           <div className="flex items-center gap-3 mb-3">
             <div className="p-2 bg-gradient-to-tr from-blue-100 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl text-blue-700 dark:text-white shadow-sm">
               {project.icon}
             </div>
             <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
               {project.title}
             </h3>
           </div>
         
           {/* Public/Private badge — BELOW title */}
           <div
             className={`self-start text-xs font-semibold px-2 py-0.5 rounded-full mb-4 border ${
               project.live
                 ? "bg-green-100 text-green-700 border-green-300 dark:bg-green-800 dark:text-green-200 dark:border-green-700"
                 : "bg-red-100 text-red-700 border-red-300 dark:bg-red-800 dark:text-red-200 dark:border-red-700"
             }`}
           >
             {project.live ? "Public" : "Private"}
           </div>
         
           {/* Description */}
           <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
             {project.description}
           </p>
         
           {/* Tags */}
           <div className="flex flex-wrap gap-2 mb-4">
             {project.tech.map((tech, i) => (
               <span
                 key={i}
                 className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs px-2 py-0.5 rounded-full font-medium"
               >
                 {tech}
               </span>
             ))}
           </div>
         
           {/* Live link */}
           {project.live && (
             <a
               href={project.live}
               target="_blank"
               rel="noopener noreferrer"
               className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline mt-auto"
             >
               🔗 View Live
             </a>
           )}
         </motion.div>
         
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
