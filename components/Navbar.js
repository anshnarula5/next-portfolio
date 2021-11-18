import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

const Navbar = ({ mode }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const [visible, setVisible] = useState(false);
  mode(isDarkMode);
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top"
      style={{ backgroundColor: "#002855" }}
    >
      <div class="container d-flex flex-row justify-content-around align-items-center">
          <div>
            <a class="navbar-brand mr-5">{" <Ansh Narula />"}</a>
          </div>
          <div class="navbar-toggler">
            <DarkModeToggle
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={40}
            />
          </div>
          <div
            class="collapse navbar-collapse mx-auto"
            id="navbarSupportedContent"
            
          >
            <ul class="navbar-nav  me-auto ">
              <li class="nav-item">
                <a href="#about" class="nav-link mx-5">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a href="#tech" class="nav-link mx-5">
                  Tech Stack
                </a>
              </li>
              <li class="nav-item">
                <a href="#projects" class="nav-link mx-5">
                  Projects
                </a>
              </li>

              <li class="nav-item">
                <a href="#connect" class="nav-link mx-5">
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
