import { IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactSection = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for individual contact items
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="flex flex-col items-center max-w-screen-xl mx-auto my-12 lg:px-24"
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-10">
        Contact Me
      </h1>

      {/* Contact Info Card */}
      <motion.div
        className="w-full max-w-md bg-gray-100 shadow-lg rounded-2xl p-8 md:p-12 mt-6 transition-all duration-300 hover:shadow-xl"
        variants={itemVariants}
      >
        <div className="flex flex-col space-y-6">
          {/* Github */}
          <motion.div
            className="flex items-start gap-3"
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <IoLogoGithub className="h-6 w-6 mt-1 text-gray-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Github</h2>
              <a
                className="text-gray-500 hover:text-gray-800 transition-colors duration-200"
                href="https://github.com/LinaEideh"
                target="_blank"
                rel="noopener noreferrer"
              >
                @LinaEideh
              </a>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            className="flex items-start gap-3"
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <MdEmail className="h-6 w-6 mt-1 text-gray-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Email</h2>
              <p className="text-gray-500 whitespace-nowrap">Linaeideh02@gmail.com</p>
            </div>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            className="flex items-start gap-3"
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <FaLinkedin className="h-6 w-6 mt-1 text-gray-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">LinkedIn</h2>
              <a
                href="https://www.linkedin.com/in/lina-eideh-3970442a6/"
                className="text-gray-500 hover:text-gray-800 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                @lina-eideh
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;