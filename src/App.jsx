import "./App.css";
import React, { useContext } from "react";
import { UserContext } from "./contexts/UserContext.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Profile from "./components/Profile.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  const { darkMode } = useContext(UserContext);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
