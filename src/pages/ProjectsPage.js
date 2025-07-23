import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Supportak from "../assets/images/Supportak.png";
import SecretCafe from "../assets/images/SecretCafe.png";
import SupportakBack from "../assets/images/Supportak-back.png";
import Porfilo from "../assets/images/About.png";
import Portfilo from "../assets/images/Portfoilo.png";
import { IoLogoGithub } from "react-icons/io";

const projects = [
  {
    id: 1,
    title: "Supportak",
    description:
      "A smart support platform empowering small businesses with tools for visibility, growth, and customer engagement. It offers features like customer support automation, analytics, and marketing tools tailored for small-scale enterprises.",
    image: Supportak,
    backgroundImage: SupportakBack,
    technologies: ["PHP", "JS", "MySQL", "CSS"],
    features: [
      "Automated customer support",
      "Real-time analytics dashboard",
      "Marketing campaign tools",
    ],
    liveLink: "#", // Replace with actual link
    githubLink: "https://github.com/yourusername/ecommerce-project", // Replace with actual link
  },
  {
    id: 2,
    title: "Secret Cafe",
    description:
      "A modern web application designed for cafe management, enabling seamless menu display, order processing, and customer interaction. Built with a focus on user-friendly interfaces and efficient workflows.",
    image: SecretCafe,
    backgroundImage: SecretCafe,
    technologies: ["React", "CSS"],
    features: [
      "Dynamic menu management",
      "Online ordering system",
      "Responsive design",
    ],
    liveLink: "#",
    githubLink: "https://github.com/linaeideh/Secrete-Cafe",
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "A sleek and responsive portfolio website showcasing personal projects, skills, and professional experience. Designed to provide a professional online presence with a modern aesthetic.",
    image: Porfilo,
    backgroundImage: Portfilo,
    technologies: ["React", "Tailwind CSS"],
    features: [
      "Responsive design",
      "Interactive project showcase",
      "Contact form integration",
    ],
    liveLink: "#",
    githubLink: "https://github.com/linaeideh/portfolio",
  },
];

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen py-12'>
      {/* Header */}
      <div className='text-center mb-16'>
        <h1 className='text-4xl sm:text-5xl font-extrabold text-gray-800'>
          Explore My Projects
        </h1>
        <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
          Dive into the details of my work, showcasing innovative solutions and
          modern technologies built with passion and precision.
        </p>
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden'
          >
            {/* Project Image */}
            <div
              className='h-48 bg-cover bg-center relative'
              style={{ backgroundImage: `url(${project.backgroundImage})` }}
            >
              <img
                src={project.image}
                alt={`${project.title} avatar`}
                className='absolute -bottom-8 left-4 z-10 w-16 h-16 rounded-full object-cover border-4 border-white shadow-md'
              />
            </div>

            {/* Project Content */}
            <div className='pt-12 px-6 pb-8'>
              <h2 className='text-2xl font-bold text-gray-900'>
                {project.title}
              </h2>
              <p className='mt-3 text-gray-600 text-sm leading-relaxed'>
                {project.description}
              </p>

              {/* Technologies */}
              <div className='mt-4'>
                <h4 className='text-sm font-semibold text-gray-800'>
                  Technologies Used
                </h4>
                <div className='flex flex-wrap gap-2 mt-2'>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className='px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className='mt-4'>
                <h4 className='text-sm font-semibold text-gray-800'>
                  Features
                </h4>
                <ul className='mt-2 text-gray-600 text-sm space-y-1'>
                  {project.features.map((feature, index) => (
                    <li key={index} className='flex items-center'>
                      <svg
                        className='w-4 h-4 text-green-500 mr-2'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}

              <button
                className='button-github flex gap-[10px] flex-row mt-6 justify-center hover:font-bold'
                onClick={() => window.open(project.githubLink, "_blank")}
              >
                <IoLogoGithub />
                <p className='text'>GitHub</p>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Back to Home */}
      <div className='text-center mt-12'>
        <Link
          to='/'
          className='inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300'
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ProjectsPage;
