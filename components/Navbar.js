import React from "react";

const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top"
      style={{backgroundColor : "#002855"}}
    >
      <div class="container d-flex flex-row justify-content-around align-items-center">
        <div>
          <a class="navbar-brand">
            {" <Ansh Narula />"}
          </a>
        </div>
        <div>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="#about" class="nav-link mx-2">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a href="#tech" class="nav-link mx-2">
                  Tech Stack
                </a>
              </li>
              <li class="nav-item">
                <a href="#projects" class="nav-link mx-2">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a href="#current" class="nav-link mx-2">
                  Current
                </a>
              </li>
              <li class="nav-item">
                <a href="#connect" class="nav-link mx-2">
                  Connect
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
