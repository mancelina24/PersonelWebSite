import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { ENGLISH, toggleLanguageEng } from "../api/dataEng";
import { TURKCE, toggleLanguageTr } from "../api/dataTr";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage("theme", false);
  const [language, setLanguage] = useLocalStorage("lang", TURKCE);

  const [themeName, setThemeName] = useState(
    language === TURKCE ? toggleLanguageTr.trLight : toggleLanguageEng.engLight
  );

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    setThemeName(
      language === TURKCE
        ? newDarkMode
          ? toggleLanguageTr.trDark
          : toggleLanguageTr.trLight
        : newDarkMode
        ? toggleLanguageEng.engDark
        : toggleLanguageEng.engLight
    );
  };

  const languageChange = () => {
    const newLanguage = language === TURKCE ? ENGLISH : TURKCE;
    setLanguage(newLanguage);
    setThemeName(
      newLanguage === TURKCE
        ? darkMode
          ? toggleLanguageTr.trDark
          : toggleLanguageTr.trLight
        : darkMode
        ? toggleLanguageEng.engDark
        : toggleLanguageEng.engLight
    );
  };

  return (
    <UserContext.Provider
      value={{
        languageChange,
        toggleTheme,
        darkMode,
        language,
        themeName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
