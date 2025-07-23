import React from "react";
import HomeSection from "../components/sections/HomeSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContantSection from "../components/sections/ContantSection";

const HomePage = () => {
  return (
    <div>
      <HomeSection />
      <AboutSection />
      <SkillsSection/>
      <ProjectsSection/>
      <ContantSection/>
    </div>
  );
};

export default HomePage;
