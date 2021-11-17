import React from "react";
import Image from "next/image";
import Skill from "../Skill";
const Carousel = require("react-responsive-carousel").Carousel;

import js from "../../img/javascript.svg";
import nodejs from "../../img/nodejs.svg";
import express from "../../img/express.svg";
import mongodb from "../../img/mongodb.svg";
import html5 from "../../img/html5.png";
import css3 from "../../img/css-3.png";
import sass from "../../img/sass.svg";
import materialui from "../../img/materialui.svg";
import redux1 from "../../img/redux1.svg";
import bootstrap from "../../img/bootstrap.svg";
import tailwindcss from "../../img/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg";
import bulma from "../../img/bulma-seeklogo.com.svg";
import ejs from "../../img/ejs.svg";
import git from "../../img/git.svg";
import github from "../../img/github.svg";
import heroku from "../../img/heroku.png";
import net from "../../img/net.svg";
import json from "../../img/Papirus-Team-Papirus-Mimetypes-App-json.svg";
import axios from "../../img/axios.svg";
import jwt from "../../img/jwt-3.svg";
import chartjs from "../../img/chartjs.svg";
import postman from "../../img/postman.png";

import bg from "../../bg/svg.png";

import insta1 from "../../display/insta-1.jpg";
import insta2 from "../../display/insta-2.jpg";
import insta3 from "../../display/insta-3.jpg";
import insta4 from "../../display/insta-4.jpg";

const Instagram = () => {
  console.log(bootstrap.src);
  return (
    <div class="bg-fill">
      <Image src={bg} height="200rem" width="100%" alt="" />
      <div style={{ backgroundColor: "#e3f2fd" }}>
        <h2 class="text-center mb-5 display-6">Instagram Clone</h2>
        <div class="row ">
          <div class=" col-md-6 mt-5 px-5 ">
            <div class="pl-5">
              A <span class="blue">Mern</span> application where you can{" "}
              <span class="blue">add</span> posts,{" "}
              <span class="blue">like</span> posts,{" "}
              <span class="blue">comment</span> on a post, like a comment, and
              other <span class="blue">CRUD</span> functionalities. User can
              also <span class="blue">follow</span>/unfollow each other and can{" "}
              <span class="blue">interact</span>
              with their posts This web application is fully{" "}
              <span class="blue">authenticated</span> with the use of{" "}
              <span class="blue">JWT</span>. Front end is made with{" "}
              <span class="blue">react</span> where state management is done
              using <span class="blue">redux</span>.{" "}
              <span class="blue">Bootstrap</span>
              is used for app design. Backend is managed using{" "}
              <span class="blue">express</span> and{" "}
              <span class="blue">node.js</span> and data is stored in{" "}
              <span class="blue">Mongodb</span>.
              <h3 class="mt-5 text-center display-8">Tech used</h3>
              <div class="stacks row">
                <Skill name="Javascript" img={js} />
                <Skill name="Nodejs" img={nodejs} />
                <Skill name="React" img={js} />
                <Skill name="Express" img={express} />
                <Skill name="MongoDB" img={mongodb} />
                <Skill name="Redux" img={redux1} />
                <Skill name="Bootstrap" img={bootstrap} />
                <Skill name="Axios" img={axios} />
                <Skill name="JWT" img={jwt} />
              </div>
            </div>
            <a href="https://instagram-a5.netlify.app/" target="_blank">
              Live Project
            </a>
            <a href="https://github.com/anshnarula5/instagram" target="_blank">
              Source Code
            </a>
          </div>
          <div class="col-md-6 mt-5">
            <div class="px-3">
              <Carousel
                showArrows={true}
                
              >
                <div>
                  <Image src={insta1} class="d-block w-100" alt="..." />
                </div>
                <div>
                  <Image src={insta1} class="d-block w-100" alt="..." />
                </div>
                <div>
                  <Image src={insta1} class="d-block w-100" alt="..." />
                </div>
                <div>
                  <Image src={insta1} class="d-block w-100" alt="..." />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
