import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";

const Projects = () => {
  const { darkMode, language } = useContext(UserContext);
  return <div>Projects</div>;
};

export default Projects;
