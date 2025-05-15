import React from "react";
import { motion } from "framer-motion";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import FreelanceServices from "./components/FreelanceServices";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Skills from "./components/Skills";

const App = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.5 } },
    }}
    className="bg-white text-gray-900 font-sans"
  >
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
  <NavBar />
  <main>
    <Hero />
    <Projects />
    <FreelanceServices />
    <Education />
    <Skills />
    <Contact />

  </main>
  <Footer />
</div>

    </motion.div>
  );
};

export default App;
