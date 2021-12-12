import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

const Navbar = ({ mode }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => true);
  const [visible, setVisible] = useState(false);
  mode(isDarkMode);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top"
      style={{ backgroundColor: "#002855" }}
    >
      <div className="container d-flex flex-row justify-content-around align-items-center">
          <div>
            <a className="navbar-brand mr-5">{" <Ansh Narula />"}</a>
          </div>
        <div className="navHide">
        <DarkModeToggle
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={40}
            />
           </div>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mx-auto ">
              <li className="nav-item">
                <a href="#about" className="nav-link mx-5">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#tech" className="nav-link mx-5">
                  Tech Stack
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link mx-5">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a href="#connect" className="nav-link mx-5">
                  Connect
                </a>
              </li>
            </ul>
            <DarkModeToggle
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={60}
            />
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
