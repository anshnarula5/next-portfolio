import React from "react";
import Image from "next/image";
import Skill from "../Skill";
import { Carousel } from "react-bootstrap";

import styled from "styled-components";

import js from "/img/javascript.svg";
import nodejs from "/img/nodejs.svg";
import express from "/img/express.svg";
import mongodb from "/img/mongodb.svg";
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

import react from "/img/react.svg";

import bg from "/bg/svg.svg";
import bg2 from "/bg/svg2.svg";
import light2 from "/bg/light2.svg";

import insta1 from "/display/instagram-1.jpg";
import insta2 from "/display/instagram-2.jpg";
import insta3 from "/display/instagram-3.jpg";
import insta4 from "/display/instagram-4.jpg";
import CButton from "../Button";

const Instagram = ({ isDarkMode }) => {
  const Blue = styled.span`
    color: ${isDarkMode ? "yellow" : "#023e8a"};
    font-weight: 900;
  `;
  return (
    
    <>
      <Image src = {isDarkMode ? bg2 : light2} layout = "responsive" />
      <div className="bg-fill">
        <div >
          <h2 className="text-center mb-5 display-6">Instagram Clone</h2>
          <div className="row ">
            <div className=" col-md-6 mt-5 px-5 ">
              <div className="pl-5">
                A<Blue> Mern</Blue> application where you can <Blue> add</Blue>
                posts, <Blue> like</Blue> posts, <Blue> comment</Blue> on a post,
                like a comment, and other<Blue>CRUD</Blue> functionalities. User
                can also<Blue> follow</Blue> /unfollow each other and can
                <Blue> interact</Blue>
                with their posts This web application is fully
                <Blue> authenticated</Blue> with the use of <Blue> JWT</Blue>.
                Front end is made with <Blue>react</Blue> where state management
                is done using<Blue> redux</Blue>. <Blue> Bootstrap</Blue>
                is used for app design. Backend is managed using
                <Blue> express</Blue> and <Blue> node.js</Blue> and data is stored
                in <Blue> Mongodb</Blue>.
                <h3 className="mt-5 text-center display-8">Tech used</h3>
                <div className="stacks row ">
                  <Skill name="Javascript" width=" 4rem" img={js} text="text" />
                  <Skill
                    name="React"
                    width=" 5rem"
                    text="text"
                    img={react}
                    cName="react-logo"
                  />
                  <Skill name="Nodejs" width=" 4rem" img={nodejs} text="text" />
                  <Skill
                    name="Express"
                    width=" 4rem"
                    img={express}
                    text="text"
                  />
                  <Skill
                    name="MongoDB"
                    width=" 4rem"
                    img={mongodb}
                    text="text"
                  />
                  <Skill name="Redux" width=" 4rem" img={redux1} text="text" />
                  <Skill
                    name="Bootstrap"
                    width=" 4rem"
                    img={bootstrap}
                    text="text"
                  />
                  <Skill name="JWT" width=" 4rem" img={jwt} text="text" />
                </div>
              </div>
              <div className="my-5 d-flex ">
              <CButton  link = "https://instagam.herokuapp.com/" text = "Live "/>
              <CButton link = "https://github.com/anshnarula5/instagram" text = " Code"/>
              </div>
              
            </div>
            <div className="col-md-6 my-5">
              <div className="px-3">
                <Carousel variant="dark">
                  <Carousel.Item>
                    <Image src={insta1} className="d-block w-100" alt="..." />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image src={insta2} className="d-block w-100" alt="..." />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image src={insta3} className="d-block w-100" alt="..." />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image src={insta4} className="d-block w-100" alt="..." />
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

export default Instagram;
