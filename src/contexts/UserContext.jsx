import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [language, setLanguage] = useLocalStorage("lang", "turkish");

  return (
    <UserContext.Provider
      value={{ darkMode, setDarkMode, language, setLanguage }}
    >
      {children}
    </UserContext.Provider>
  );
}
