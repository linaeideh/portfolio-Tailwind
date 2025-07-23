import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion"; // For animations

const SkillsSection = () => {
  const skills = [
    {
      name: "React Development",
      icon: <FaReact className="h-8 w-8" />,
      color: "bg-blue-600",
      team: "Intership",
      duration: "2 Month",
      proficiency: 90,
      description: "Building dynamic and responsive web applications with React.",
    },
    {
      name: "Git & GitHub",
      icon: <FaGithub className="h-8 w-8" />,
      color: "bg-green-600",
      team: "Youtube",
      duration: "1 Week Left",
      proficiency: 85,
      description: "Version control and collaborative development with Git and GitHub.",
    },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill className="h-8 w-8" />,
      color: "bg-purple-600",
      team: "Design Team",
      duration: "3 Days Left",
      proficiency: 60,
      description: "Crafting modern and responsive UI with Tailwind CSS.",
    },
    {
      name: "HTML, CSS, JS",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "bg-yellow-600",
      team: "Udemy",
      duration: "1 Month Left",
      proficiency: 95,
      description: "Core web technologies for building robust websites.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
        My Skills
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative bg-white py-8 px-6 rounded-2xl w-80 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div
                className={`text-white flex items-center justify-center absolute rounded-full p-4 shadow-xl ${skill.color} -top-8 left-6`}
              >
                {skill.icon}
              </div>
              <div className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {skill.name}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{skill.description}</p>
                <div className="flex items-center space-x-2 text-gray-500 text-sm mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p>{skill.team}</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 text-sm mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p>{skill.duration}</p>
                </div>
                <div className="border-t-2 border-gray-200 pt-4">
                  <p className="text-sm text-gray-600 mb-2">Proficiency</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${skill.color}`}
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
             
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;