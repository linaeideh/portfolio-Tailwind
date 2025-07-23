import React from "react";
import Supportak from "../../assets/images/Supportak.png";
import SecretCafe from "../../assets/images/SecretCafe.png";
import SupportakBack from "../../assets/images/Supportak-back.png";
import Porfilo from "../../assets/images/About.png";
import Portfilo from "../../assets/images/Portfoilo.png";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  return (
    <div className='px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen py-7'>
      <h1 className='text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-14 mt-24'>
        My Projects
      </h1>

      <div className='flex flex-wrap justify-center gap-8'>
        <div className='w-full sm:w-[22rem] md:w-[24rem] flex flex-col bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300'>
          <div
            className='h-24 relative rounded-t-2xl bg-cover bg-center'
            style={{ backgroundImage: `url(${SupportakBack})` }}
          >
            <img
              src={Supportak}
              alt='Supportak avatar'
              className='absolute -bottom-8 left-4 z-10 w-16 h-16 rounded-full object-cover border-2 border-gray-100'
            />
          </div>
          <div className='mt-12 px-6 pb-6 flex flex-col'>
            <h4 className='text-lg font-semibold text-gray-900'>Supportak</h4>

            <p className='text-sm text-gray-600 mt-2'>
              A smart support platform empowering small businesses with tools
              for visibility, growth, and customer engagement.
            </p>

            <hr className='border w-16 mt-4 mb-4 border-gray-200 rounded' />
            <Link
              to='/projects'
              className='text-sm text-gray-600 hover:underline hover:font-bold'
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className='w-full sm:w-[22rem] md:w-[24rem] flex flex-col bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300'>
          <div
            className='h-24 rounded-t-2xl bg-cover bg-center'
            style={{ backgroundImage: `url(${SecretCafe})` }}
          />
          <div className='mt-12 px-6 pb-6 flex flex-col'>
            <h4 className='text-lg font-semibold text-gray-900'>Secret Cafe</h4>
            <p className='text-sm text-gray-600 mt-2'>
              A modern web application for managing cafe operations, menu
              display, and customer interactions seamlessly.
            </p>

            <hr className='border w-16 mt-4 mb-4 border-gray-200 rounded' />
            <Link
              to='/projects'
              className='text-sm text-gray-600 hover:underline hover:font-bold'
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className='w-full sm:w-[22rem] md:w-[24rem] flex flex-col bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300'>
          <div
            className='h-24 relative rounded-t-2xl bg-cover bg-center'
            style={{ backgroundImage: `url(${Portfilo})` }}
          >
            <img
              src={Porfilo}
              alt='Portfolio avatar'
              className='absolute -bottom-8 left-4 z-10 w-16 h-16 rounded-full object-cover border-2 border-gray-100'
            />
          </div>
          <div className='mt-12 px-6 pb-6 flex flex-col'>
            <h4 className='text-lg font-semibold text-gray-900'>Portfilo</h4>
            <p className='text-sm text-gray-600 mt-2'>
              A sleek and responsive portfolio website to present personal
              projects, skills, and experience in a professional way.
            </p>

            <hr className='border w-16 mt-4 mb-4 border-gray-200 rounded' />
            <Link
              to='/projects'
              className='text-sm text-gray-600 hover:underline hover:font-bold'
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
