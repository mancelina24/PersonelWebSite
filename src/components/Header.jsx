import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import { ENGLISH, languageEng } from "../api/dataEng.js";
import { TURKCE, languageTr } from "../api/dataTr.js";

const Header = () => {
  const { languageChange, toggleTheme, darkMode, language, themeName } =
    useContext(UserContext);
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Header</h1>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleTheme}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
      >
        {themeName} {/* Burada themeName'i göstereceğiz */}
      </button>

      {/* Language Toggle */}
      <button
        onClick={languageChange}
        className="mt-2 ml-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition"
      >
        {language === TURKCE
          ? languageEng.tr + languageEng.ekTr
          : languageTr.ekEng + languageTr.eng}
      </button>
    </div>
  );
};

export default Header;
