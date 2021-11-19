import React from "react";

import Image from "next/image";
import { Carousel } from "react-bootstrap";

import styled from "styled-components";


import js from "/img/javascript.svg";
import nodejs from "/img/nodejs.svg";
import express from "/img/express.svg";
import mongodb from "/img/mongodb.svg";
import html5 from "/img/html5.png";
import css3 from "/img/css-3.png";    
import materialui from "/img/materialui.svg";
import redux1 from "/img/redux1.svg";
import bootstrap from "/img/bootstrap.svg";
import tailwindcss from "/img/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg";
import bulma from "/img/bulma-seeklogo.com.svg";
import ejs from "/img/ejs.svg";
import git from "/img/git.svg";
import github from "/img/github.svg";
import heroku from "/img/heroku.png";
import net from "/img/net.svg";
import json from "/img/Papirus-Team-Papirus-Mimetypes-App-json.svg";
import axios from "/img/axios.svg";
import jwt from "/img/jwt-3.svg";
import chartjs from "/img/chartjs.svg";
import postman from "/img/postman.png";
import react from "/img/react.svg"


import bg2 from "/bg/svg2.png";
import bg from "/bg/svg.svg";
import light1 from "/bg/light1.svg";
import Skill from "../Skill";

import c1 from "/display/c-1.jpg";
import c2 from "/display/c-2.jpg";
import c3 from "/display/c-3.jpg";
import c4 from "/display/c-4.jpg";
import CButton from "../Button";

const Countries = ({isDarkMode}) => {
  const Blue = styled.span`
    color: ${isDarkMode ? "yellow" :"#023e8a"};
    font-weight: 900;
  `;
  return (
    <>
      <Image src={isDarkMode ? bg : light1} layout = "responsive"/>
      <div className="bg-fill" style={{ backgroundColor: isDarkMode ? "#04395e" : "#e3f2fd"  }}>
        <div>
          <h2 className="text-center mb-5 display-6">Countries</h2>
          <div className="row ">
            <div className=" col-md-6 mt-5 px-5 ">
              <div className="pl-5">
                A <pan className="blue">React</pan> application in which user can
                interact with
               <Blue>maps</Blue> and country
               <Blue>flags</Blue>. User can get each country`&apos;`s
               <Blue>information </Blue>either by
               <Blue>searching</Blue>, by flags or by pointing a
               <Blue>country</Blue> in map
               <Blue>Openweathermap</Blue> API is used for
                providing weather information which is dispayed using
               <Blue>chart.js</Blue>.
               <Blue>AmCharts</Blue> is used for displaying maps
                and
               <Blue>bootstrap</Blue> is used for styling
                <h3 className=" text-center mt-5">Tech used</h3>
                <div className="stacks row">
                  <Skill name="Javascript" width=" 4rem" img={js} text="text" />
                  <Skill name="React" width = " 5rem" text="text" img={react} cName="react-logo"/>
                  <Skill name="Redux" width=" 4rem" img={redux1} text="text" />
                  <Skill
                    name="Bootstrap"
                    width=" 4rem"
                    img={bootstrap}
                    text="text"
                  />
                  <Skill
                    name="Chart.js"
                    width=" 4rem"
                    img={chartjs}
                    text="text"
                  />
                </div>
              </div>
              <div className="my-5 ">
                <CButton  link = "https://countries-app-a5.netlify.app/" text = "Live Project"/>
                <CButton link = "https://github.com/anshnarula5/countries1" text = "Source Code"/>
              </div>
            </div>
            <div className="col-md-6 my-5">
              <div className="px-3">
                <Carousel variant="dark">
                  <Carousel.Item>
                    <Image src={c1} className="d-block w-100" alt="..." />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image src={c2} className="d-block w-100" alt="..." />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image src={c3} className="d-block w-100" alt="..." />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image src={c4} className="d-block w-100" alt="..." />
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
