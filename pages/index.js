import { useState } from "react";
import Navbar from "../components/Navbar";
import About from "./#about";
import Connect from "./#connect";
import Projects from "./#projects";
import Tech from "./#tech";

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
        <About />
        <Tech />
        <Projects isDarkMode={isDarkMode} />
        <Connect />
      </div>
    </>
  );
}
