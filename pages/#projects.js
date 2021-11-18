import React from "react";
import Countries from "../components/projects/Countries";
import Instagram from "../components/projects/Instagram";
import Trekkar from "../components/projects/Trekkar";

const Projects = ({isDarkMode}) => {
  return (
    <div id="projects" class = "mt-5">
      <div className="empty">
      <div classname = "mt-5 ">emptu</div>
      <div classname = "mt-5 ">emptu</div>
      </div>
      <h1 class="text-center display-4 mt-5">Projects</h1>
      <Instagram  isDarkMode = {isDarkMode}/>
      <Trekkar isDarkMode = {isDarkMode} />
      <Countries isDarkMode = {isDarkMode} />
    </div>
  );
};

export default Projects;
