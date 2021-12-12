import { useState } from "react";
import Navbar from "../components/Navbar";
import About from "../components/sections/About";
import Connect from "../components/sections/connect";
import Projects from "../components/sections/projects";
import Tech from "../components/sections/tech";


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = (mode) => {
    setIsDarkMode(mode);
  };

  return (
    <>
      <Navbar mode={toggleMode} />
      <div
        className="main"
        style={{
          backgroundColor: isDarkMode ? "#022b3a" : "#f8f7ff",
          color: isDarkMode ? "white" : "inherit",
        }}
      >
        <About isDarkMode={isDarkMode} />
        <Tech />
        <Projects isDarkMode={isDarkMode} />
        <Connect  isDarkMode={isDarkMode} />
      </div>
    </>
  );
}
