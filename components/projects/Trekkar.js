import React from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";

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

import bg2 from "../../bg/svg2.png";
import bg from "../../bg/svg.png";
import Skill from "../Skill";

import trekkar1 from "../../display/trekkar-1.jpg";
import trekkar2 from "../../display/trekkar-2.jpg";
import trekkar3 from "../../display/trekkar-3.jpg";
import trekkar4 from "../../display/trekkar-4.jpg";

const Trekkar = () => {
  return (
    <div class="bg-unfill">
      <Image
        src={bg2}
        width={1600}
        height={200}
        layout="responsive"
        className="image"
      />
      <h2 class="text-center mb-5 display-6">Trekkar</h2>
      <div class="row ">
        <div class=" col-md-6 mt-5 px-3 ">
          <div class="px-3">
            <Carousel variant="dark">
              <Carousel.Item>
                <Image src={trekkar1} class="d-block w-100" alt="..." />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={trekkar2} class="d-block w-100" alt="..." />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={trekkar3} class="d-block w-100" alt="..." />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={trekkar4} class="d-block w-100" alt="..." />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div class="col-md-6 mt-5 px-5">
          <div class="pl-5">
            A full <span class="blue">CRUD</span> web application where user can{" "}
            <span class="blue">add treks images</span> and description that they
            have been to. Users can <span class="blue">interact</span> with
            other posts and can <soan class="blue">rate</soan> them or{" "}
            <span class="blue">comment</span> on them. Each trek also have a{" "}
            <span class="blue">map</span> feature which is made using
            <span class="blue">mapbox</span> api. Authentication is done via{" "}
            <span class="blue">passport.js</span> . Frontend is designed using{" "}
            <span class="blue">ejs</span> and
            <span class="blue">bootstrap</span>. Backend is managed using{" "}
            <span class="blue">express</span> and{" "}
            <span class="blue">node.js</span> and data is stored in{" "}
            <span class="blue">Mongodb</span>.
            <h3 class="text-center mt-5">Tech used</h3>
            <div class="stacks row">
              <Skill name="Javascript" width=" 3rem" img={js} text="text" />
              <Skill name="Nodejs" width=" 3rem" img={nodejs} text="text" />
              <Skill name="EJS" width=" 3rem" img={ejs} text="text" />
              <Skill name="Express" width=" 3rem" img={express} text="text" />
              <Skill name="MongoDB" width=" 3rem" img={mongodb} text="text" />
              <Skill
                name="Passport.js"
                width=" 3rem"
                img={mongodb}
                text="text"
              />
              <Skill
                name="Bootstrap"
                width=" 3rem"
                img={bootstrap}
                text="text"
              />
              <Skill name="Mapbox" width="3rem" img={mongodb} text="text" />
            </div>
          </div>
          <a href="https://trekkar.herokuapp.com/" target="_blank">
            Live Project
          </a>
          <a href="https://trekkar.herokuapp.com/" target="_blank">
            Live Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Trekkar;
