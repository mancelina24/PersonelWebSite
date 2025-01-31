import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";

const Header = () => {
  const { darkMode, setDarkMode, language, setLanguage } =
    useContext(UserContext);

  return <div>Header</div>;
};

export default Header;
