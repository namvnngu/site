import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import ProjectGrid from "../components/ProjectGrid";

const Projects = () => {
  return (
    <>
      <div className="projects">
        <NavBar />
        <ProjectGrid />
      </div>
      <Footer />
    </>
  );
};

export default Projects;
