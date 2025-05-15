import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
          setTimeout(() => setStatus("idle"), 3000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 3000);
        }
      );
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }}
      className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white font-sans transition-colors"
    >
      <section
        id="contact"
        className="px-6 md:px-10 py-20 bg-white dark:bg-gray-950 transition-colors"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-10">
            Have a project in mind or just want to connect? Send me a message — I’d love to hear from you.
          </p>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 space-y-6 border border-gray-200 dark:border-gray-700 transition-colors">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="peer w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-transparent rounded-md px-3 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Your name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 top-2 text-sm text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 dark:peer-focus:text-blue-400 transition-all"
                >
                  Your Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="peer w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-transparent rounded-md px-3 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Your email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-2 text-sm text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 dark:peer-focus:text-blue-400 transition-all"
                >
                  Your Email
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="peer w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-transparent rounded-md px-3 pt-5 pb-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Your message"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-3 top-2 text-sm text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 dark:peer-focus:text-blue-400 transition-all"
                >
                  Your Message
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <p className="text-green-600 dark:text-green-400 text-sm mt-2">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-600 dark:text-red-400 text-sm mt-2">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            Or reach me directly at{" "}
            <a
              href="mailto:dagmawizeleke1@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              dagmawizeleke1@gmail.com
            </a>
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
