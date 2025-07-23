import { IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center justify-center px-4 py-8">
      <div className="flex justify-center mb-10">
        <IoPerson className="text-7xl text-gray-800 transition-transform duration-300 ease-in-out hover:scale-110 hover:text-gray-600" />
      </div>

      <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 text-center mb-10 animate-fade-in">
        Hi, I’m Lina.
      </h2>

      <div className="flex flex-col items-center justify-center max-w-4xl">
        <p className="text-xl md:text-3xl text-gray-600 text-center leading-relaxed animate-fade-in delay-200">
          I'm a front-end developer<br /> passionate about creating beautiful and
          responsive web interfaces. <br />Over the past few years, <br />I’ve worked on
          various personal and academic projects that helped me grow technically
          and creatively.<br /> I'm detail-oriented, always learning,<br /> and love turning
          ideas into interactive websites.
        </p>
        <Link to="/about" className="flex justify-center mt-10">
          <button className="group flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-lg md:text-2xl font-medium rounded-3xl hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gray-400">
            <span>Learn More</span>
            <FaLongArrowAltRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;