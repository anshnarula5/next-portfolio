import React from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";

import styled from "styled-components";

import js from "/img/javascript.svg";
import nodejs from "/img/nodejs.svg";
import express from "/img/express.svg";
import mongodb from "/img/mongodb.svg";
import mapbox from "/img/mapbox-2.svg";
import html5 from "/img/html5.png";
import css3 from "/img/css-3.png";
import sass from "/img/sass.svg";
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

import bg2 from "/bg/svg2.svg";
import light2 from "/bg/light2.svg";
import light from "/bg/light1.svg";
import bg from "/bg/svg.svg";
import Skill from "../Skill";

import CButton from "../Button";

import trekkar1 from "/display/trekkar-1.jpg";
import trekkar2 from "/display/trekkar-2.jpg";
import trekkar3 from "/display/trekkar-3.jpg";
import trekkar4 from "/display/trekkar-4.jpg";

const Trekkar = ({ isDarkMode }) => {
  const Blue = styled.span`
    color: ${isDarkMode ? "yellow" : "#023e8a"};
    font-weight: 900;
  `;
  return (
    <div className="bg-unfill">
           <Image src = {isDarkMode ? bg : light} layout = "responsive" />
      <div style={{ backgroundColor: isDarkMode ? "#04395e" : "#e3f2fd" }}>
      <h2 className="text-center mb-5 display-6">Trekkar</h2>
      <div className="row ">
        <div className=" col-md-6 my-5 px-3 ">
          <div className="px-3">
            <Carousel variant="dark">
              <Carousel.Item>
                <Image src={trekkar1} className="d-block w-100" alt="..." />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={trekkar2} className="d-block w-100" alt="..." />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={trekkar3} className="d-block w-100" alt="..." />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={trekkar4} className="d-block w-100" alt="..." />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="col-md-6 mt-5 px-5">
          <div className="pl-5">
            A full<Blue>CRUD</Blue> web application where user can
            <Blue>add treks images</Blue> and description that they have been
            to. Users can<Blue>interact</Blue> with other posts and can{" "}
            <soan className="blue">rate</soan> them or
            <Blue>comment</Blue> on them. Each trek also have a<Blue>map</Blue>{" "}
            feature which is made using
            <Blue>mapbox</Blue> api. Authentication is done via
            <Blue>passport.js</Blue> . Frontend is designed using
            <Blue>ejs</Blue> and
            <Blue>bootstrap</Blue>. Backend is managed using
            <Blue>express</Blue> and
            <Blue>node.js</Blue> and data is stored in
            <Blue>Mongodb</Blue>.<h3 className="text-center mt-5">Tech used</h3>
            <div className="stacks row">
              <Skill name="Javascript" width=" 4rem" img={js} text="text" />
              <Skill name="Nodejs" width=" 4rem" img={nodejs} text="text" />
              <Skill name="EJS" width=" 4rem" img={ejs} text="text" />
              <Skill name="Express" width=" 4rem" img={express} text="text" />
              <Skill name="MongoDB" width=" 4rem" img={mongodb} text="text" />
              <Skill
                name="Bootstrap"
                width=" 4rem"
                img={bootstrap}
                text="text"
              />
              <Skill name="Mapbox" width="4rem" img={mapbox} text="text" />
            </div>
          </div>
          <div className="my-5 align-right">
            <CButton
              link="https://trekkar.herokuapp.com/"
              text="Live Project"
            />
            <CButton link="https://trekkar.herokuapp.com/" text="Source Code" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Trekkar;
