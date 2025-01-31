import "./App.css";
import React, { useContext } from "react";
import { UserContext } from "./contexts/UserContext.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Profile from "./components/Profile.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
function App() {
  const { darkMode, language } = useContext(UserContext);

  const languageClass =
    language === "turkish" ? "lang-turkish" : "lang-english";
  const darkModeClass = darkMode ? "dark" : "";

  return (
    <>
      <div className={`${darkModeClass} ${languageClass}`}>
        <div
          className={`min-h-screen bg-white ${
            darkMode
              ? "dark:bg-gray-900 dark:text-white"
              : "bg-white text-black"
          }`}
        >
          <Header />
          <Hero />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
