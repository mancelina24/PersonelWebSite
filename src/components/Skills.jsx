import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";

const Skills = () => {
  const { darkMode, language } = useContext(UserContext);

  return <div>Skills</div>;
};

export default Skills;
