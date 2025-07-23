import React, { useEffect } from "react";
import Home from "../assets/images/Home.jpg";
import School from "../assets/images/School.webp";
import University from "../assets/images/University.webp";
import Udemy from "../assets/images/Udemy.webp";
import VolunteerIcon from "../assets/images/khccc.png"; // صورة رمزية للتطوع (يمكنك استبدالها)
const AboutPage = () => {



    const educationData = [
  {
    category: "School",
    logo: School,

    details: {
      name: "Sweileh Girls Secondary School",
      degree: "General Secondary Education – Scientific Stream",
      grade: "85.8%",
      years: "2019-2020",
    },
  },
  {
    category: "University",
    logo: University,
    details: {
      name: "Al-Balqa Applied University",
      degree: "Bachelor of Computer information Systems",
      grade: "3.30 / 4",
      years: "2020-2024",
    },
  },
  {
    category: "Courses",
    logo: Udemy,
    details: {
      name: "Udemy - Coursera",
      degree: "Courses in React, js",
      grade: "Completed",
      years: "2024",
      description:
        "Learned foundational and advanced concepts in frontend and backend development.",
    },

  }

  
];
const volunteerData = {
    category: "Community Service",
    logo: VolunteerIcon,
    details: {
      name: "King Hussein Cancer Center (KHCC)",
      role: "Volunteer Coordinator",
      description:
        "Organized community events and workshops to promote education and social engagement.",
      years: "2024-2025",
    },
  };
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
 useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0");
            entry.target.classList.remove("opacity-0", "translate-x-10", "-translate-x-10");
          } else {
            entry.target.classList.remove("opacity-100", "translate-x-0");
            // إعادة الحالة الابتدائية حسب جهة الحركة
            if (entry.target.classList.contains("left")) {
              entry.target.classList.add("opacity-0", "translate-x-10");
              entry.target.classList.remove("-translate-x-10");
            } else {
              entry.target.classList.add("opacity-0", "-translate-x-10");
              entry.target.classList.remove("translate-x-10");
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <>
      {/* Profile Card */}
      <div className="h-[800px] bg-gray-200 flex flex-wrap items-center justify-center rounded-lg">
        <div className="container lg:w-3/6 bg-white shadow-lg rounded-lg">
          <div className="h-52 overflow-hidden">
            <img
              className="w-full object-cover"
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=2000&q=80"
              alt="Cover"
            />
          </div>
          <div className="flex justify-center -mt-12">
            <img
              className="h-40 w-40 bg-white p-2 rounded-full"
              src={Home}
              alt="Profile"
            />
          </div>
          <div className="text-center px-14 mt-4">
            <h2 className="text-gray-800 text-3xl font-bold">Lina Eideh</h2>
            <a
              className="text-gray-400 hover:text-gray-600"
              href="https://www.linkedin.com/in/lina-eideh-3970442a6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @LinaEideh
            </a>
            <p className="mt-2 text-gray-500 text-sm">
              I'm a passionate front-end developer who enjoys turning ideas into
              interactive and visually appealing websites. I love learning,
              building, and improving every step of the way.
            </p>
          </div>
          <hr className="mt-6" />
          <div className="flex bg-gray-50">
            <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
              <p>
                <span className="font-semibold">2.5k</span> Followers
              </p>
            </div>
            <div className="border"></div>
            <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
              <p>
                <span className="font-semibold">10+</span> Support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
           <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Education</h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>

      {educationData.map((item, index) => {
        const isLeft = index % 2 === 0;
        return (
            <div
                  key={index}
                  className={`timeline-item ${isLeft ? "left" : "right"} opacity-0 ${
                    isLeft
                      ? "translate-x-10 ml-8 sm:ml-0 sm:w-1/2 pr-8 sm:pr-4"
                      : "-translate-x-10 mr-8 sm:mr-0 sm:w-1/2 sm:ml-auto pl-8 sm:pl-4"
                  } transition-all duration-700 ease-out mb-10`}
                >
            <div className="bg-white shadow-md rounded-lg p-6 relative">
              <div
                className={`absolute top-1/2 ${
                  isLeft ? "-left-8" : "-right-8"
                } w-4 h-4 bg-gray-500 rounded-full transform -translate-y-1/2`}
              ></div>

              <h3 className="flex gap-[20px] flex-nowrap justify-between  text-xl font-semibold text-gray-800 mb-2">
                {item.category}
                <img src={item.logo} alt={item.category} className="inline-block w-11 h-11" />
              </h3>

              <p className="text-lg font-medium text-gray-700">{item.details.name}</p>
              <p className="text-gray-600">{item.details.degree}</p>
              <p className="text-gray-600">Grade: {item.details.grade}</p>
              <p className="text-gray-600">Years: {item.details.years}</p>
              {item.details.description && (
                <p className="text-gray-600 mt-2">{item.details.description}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>
{/* Divider */}
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <hr className="my-8 border-t-2 border-gray-300" />
    </div>
{/* Volunteering Section */}
<section className="bg-gray-100 py-10 mb-11">
        <div className="max-w-2xl mx-auto px-4 sm:px-5 lg:px-7">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Volunteering</h2>
          <div className="timeline-item opacity-0 translate-y-10 transition-all duration-700 ease-out">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="flex gap-[20px] flex-nowrap justify-between text-xl font-semibold text-gray-800 mb-2">
                {volunteerData.category}
                <img src={volunteerData.logo} alt={volunteerData.category} className="inline-block w-24 h-11" />
              </h3>
              <p className="text-lg font-medium text-gray-700">{volunteerData.details.name}</p>
              <p className="text-gray-600">Role: {volunteerData.details.role}</p>
              <p className="text-gray-600">Years: {volunteerData.details.years}</p>
              {volunteerData.details.description && (
                <p className="text-gray-600 mt-2">{volunteerData.details.description}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
