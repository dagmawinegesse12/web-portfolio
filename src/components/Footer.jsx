import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-sm py-6 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-700 mt-10 transition-colors">
    <p className="text-gray-600 dark:text-gray-400">
      © {new Date().getFullYear()} Dagmawi Negesse · Built with React & Tailwind CSS · Deployed on Vercel
    </p>
  </footer>
  
  );
};

export default Footer;
