import React from "react";
import { motion } from "framer-motion";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const skills = [
  { name: "React", level: 5, type: "Frontend" },
  { name: "Tailwind CSS", level: 5, type: "Frontend" },
  { name: "TypeScript", level: 4, type: "Frontend" },
  { name: "JavaScript", level: 5, type: "Frontend" },
  { name: "Python", level: 5, type: "Backend" },
  { name: "Django", level: 4, type: "Backend" },
  { name: "Node.js", level: 3, type: "Backend" },
  { name: "MongoDB", level: 4, type: "Tools" },
  { name: "Docker", level: 4, type: "Tools" },
  { name: "Git", level: 5, type: "Tools" },
  { name: "AWS", level: 3, type: "Tools" },
  { name: "SLURM", level: 4, type: "Tools" },
  { name: "Communication", level: 5, type: "Soft" },
  { name: "Team Leadership", level: 5, type: "Soft" },
  { name: "Project Management", level: 4, type: "Soft" },
  { name: "Problem Solving", level: 5, type: "Soft" },
];

const SkillCard = ({ name, level, type }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all mx-2 text-center">
    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{name}</h4>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{type}</p>
    <div className="flex justify-center gap-1">
      {[...Array(5)].map((_, i) => (
        <FiStar key={i} className={i < level ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"} />
      ))}
    </div>
  </div>
);

const SkillsCarousel = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false, // remove dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // remove default arrows
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <motion.section
      id="skills"
      className="px-6 md:px-10 py-20 bg-gray-50 dark:bg-gray-900 transition-colors"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">Skills & Expertise</h2>

        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </Slider>

          {/* Custom Navigation */}
          {/* Custom Navigation Buttons */}
<button
  className="absolute -left-6 top-1/2 transform -translate-y-1/2 
             bg-white dark:bg-gray-800 
             border border-gray-300 dark:border-gray-600 
             text-gray-700 dark:text-gray-300 
             p-3 rounded-full shadow-md 
             hover:bg-blue-100 dark:hover:bg-gray-700 
             transition"
  onClick={() => sliderRef.current?.slickPrev()}
  aria-label="Previous"
>
  <FiChevronLeft className="w-5 h-5" />
</button>

<button
  className="absolute -right-6 top-1/2 transform -translate-y-1/2 
             bg-white dark:bg-gray-800 
             border border-gray-300 dark:border-gray-600 
             text-gray-700 dark:text-gray-300 
             p-3 rounded-full shadow-md 
             hover:bg-blue-100 dark:hover:bg-gray-700 
             transition"
  onClick={() => sliderRef.current?.slickNext()}
  aria-label="Next"
>
  <FiChevronRight className="w-5 h-5" />
</button>
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsCarousel;
