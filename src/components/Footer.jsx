import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";

const Footer = () => {
  const { darkMode, language } = useContext(UserContext);
  return <div>Footer</div>;
};

export default Footer;
