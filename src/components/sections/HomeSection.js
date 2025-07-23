import React, { useEffect } from "react";
import { PiReadCvLogo } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from'../../assets/images/Home.jpg'
import CV from '../../assets/docs/Lina_Eideh CV.pdf'
const HomeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="flex flex-col md:flex-row justify-around items-center  px-6 sm:px-12 lg:px-24 py-16 bg-gradient-to-b from-gray-300 to-white">
      {/* Image Section */}
      <div
        className="w-full md:w-[450px] h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl relative"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <img
          src={Home}
          alt="Professional headshot"
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div
        className="relative max-w-[500px] mt-10 md:mt-0 md:ml-12 z-10"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        {/* Decorative Circles */}
        <div className="absolute top-[-40px] left-[-40px] w-32 h-32 bg-gray-300 opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-40px] right-[-40px] w-24 h-24 bg-gray-600 opacity-20 rounded-full animate-pulse"></div>

        {/* Text Content */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black tracking-tight">
          Front End Developer
        </h1>
        <p className="mt-4 text-lg text-gray-400 leading-relaxed">
          Crafting responsive, high-performance web interfaces with React, Tailwind CSS, and modern web technologies to deliver seamless user experiences.
        </p>
      <a
      href={CV} // <-- المسار للملف في مجلد public
      download="Lina_Eideh CV.pdf" // <-- الاسم اللي رح يظهر للمستخدم لما ينزل الملف
      className="mt-8 inline-flex items-center px-6 py-3 bg-gray-800 text-white text-base font-medium rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg transition-all duration-300"
    >
        <PiReadCvLogo className="mr-2 text-xl" />
      Download CV
      {/* <PiReadCvLogo className="ml-2 text-xl" /> */}
      {/* شيل التعليق عن السطر اللي فوق لو بتستخدم الأيقونة */}
    </a>
      </div>
    </section>
  );
};

export default HomeSection;