import { IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactPage = () => {
  const contactInfo = [
    {
      type: "Email",
      value: "Linaeideh02@gmail.com",
      link: "mailto:Linaeideh02@gmail.com",
      icon: <MdEmail className="h-6 w-6 text-gray-600" />,
    },
    {
      type: "LinkedIn",
      value: "Lina Eideh",
      link: "https://www.linkedin.com/in/lina-eideh-3970442a6/",
      icon: <FaLinkedin className="h-6 w-6 text-gray-600" />,
    },
    {
      type: "GitHub",
      value: "LinaEideh",
      link: "https://github.com/LinaEideh",
      icon: <IoLogoGithub className="h-6 w-6 text-gray-600" />,
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center p-6'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='bg-white rounded-2xl shadow-2xl p-10 max-w-lg w-full text-center transform hover:shadow-3xl transition-shadow duration-300'
      >
        <h1 className='text-4xl font-extrabold text-gray-900 mb-6 tracking-tight'>
          Get in Touch
        </h1>
        <p className='text-gray-500 mb-10 text-lg leading-relaxed'>
          Connect with me through your preferred platform below!
        </p>
        <div className='space-y-6'>
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.type}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className='flex items-center justify-between border-b border-gray-200 pb-3 hover:bg-gray-50 rounded-lg transition duration-200'
            >
              <div className='flex items-center space-x-3'>
                {info.icon}
                <span className='text-base font-semibold text-gray-700'>
                  {info.type}
                </span>
              </div>
              <a
                href={info.link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-500 hover:text-gray-700 font-medium transition duration-300'
              >
                {info.value}
              </a>
            </motion.div>
          ))}
        </div>
        <motion.a
          href='mailto:Linaeideh02@gmail.com'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='mt-10 inline-block bg-indigo-600 text-white py-3 px-6 rounded-full font-semibold text-lg hover:bg-indigo-700 transition duration-300 shadow-md'
        >
          Send an Email
        </motion.a>
      </motion.div>
    </div>
  );
};

export default ContactPage;
