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

const Countries = () => {
  return (
    <>
      <Image
        src={bg}
        width={1600}
        height={200}
        layout="responsive"
        className="image"
      />
      <div class="bg-fill" style={{ backgroundColor: "#e3f2fd" }}>
        <div>
          <h2 class="text-center mb-5 display-6">Countries</h2>
          <div class="row ">
            <div class=" col-md-6 mt-5 px-5 ">
              <div class="pl-5">
                A <pan class="blue">React</pan> application in which user can
                interact with
                <span class="blue">maps</span> and country{" "}
                <span class="blue">flags</span>. User can get each country's{" "}
                <span class="blue">information </span>either by
                <span class="blue">searching</span>, by flags or by pointing a{" "}
                <span class="blue">country</span> in map
                <span class="blue">Openweathermap</span> API is used for
                providing weather information which is dispayed using{" "}
                <span class="blue">chart.js</span>.{" "}
                <span class="blue">AmCharts</span> is used for displaying maps
                and
                <span class="blue">bootstrap</span> is used for styling
                <h3 class=" text-center mt-5">Tech used</h3>
                <div class="stacks row">
                  <Skill name="Javascript" width=" 3rem" img={js} text="text" />
                  <Skill name="Redux" width=" 3rem" img={redux1} text="text" />
                  <Skill
                    name="Bootstrap"
                    width=" 3rem"
                    img={bootstrap}
                    text="text"
                  />
                  <Skill
                    name="Chart.js"
                    width=" 3rem"
                    img={chartjs}
                    text="text"
                  />
                  <Skill name="AmChart" width=" 3rem" img={js} text="text" />
                </div>
              </div>
              <a href="https://countries-app-a5.netlify.app/" target="_blank">
                Live Project
              </a>
              <a
                href="https://github.com/anshnarula5/countries1"
                target="_blank"
              >
                Source Code
              </a>
            </div>
            <div class="col-md-6 mt-5">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Countries;
