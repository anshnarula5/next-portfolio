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

import bg2 from "/bg/svg2.svg";
import bg from "/bg/svg.svg";
import light2 from "/bg/light2.svg";
import light from "/bg/light1.svg";
import Skill from "../Skill";

import CButton from "../Button";

import easy1 from "/display/easy-1.jpg";
import easy2 from "/display/easy-2.jpg";
import easy3 from "/display/easy-3.jpg";
import easy4 from "/display/easy-4.jpg";

const Easy = ({ isDarkMode }) => {
  const Blue = styled.span`
    color: ${isDarkMode ? "yellow" : "#023e8a"};
    font-weight: 900;
  `;
  return (
    <div className="bg-unfill" >
      <Image src={isDarkMode ? bg : light} layout="responsive" />
      <div style={{ backgroundColor: isDarkMode ? "#04395e" : "#e3f2fd" }}>
      <h2 className="text-center mb-5 display-6">Easy-Buy</h2>
      <div className="row " >
        <div className=" col-md-6 my-5 px-3 ">
          <div className="px-3">
            <Carousel variant="dark">
              <Carousel.Item>
                <Image src={easy1} className="d-block w-100" alt="..." />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={easy2} className="d-block w-100" alt="..." />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={easy3} className="d-block w-100" alt="..." />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={easy4} className="d-block w-100" alt="..." />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="col-md-6 mt-5 px-5">
          <div className="pl-5">
            Easy-buy is an <Blue> e-commerce</Blue> website. Here users can browse for
            different product or <Blue> sort</Blue> them by their <Blue>price</Blue> or <Blue>rating</Blue>. Users can
            also <Blue>filter</Blue> them based on <Blue>categories</Blue> of their preference or on the
            basis of price. This website also has <Blue>admin</Blue> functionality which has
            abilities to <Blue>create</Blue> a new product, <Blue>delete</Blue> a product, and also mark a
            product as <Blue>delivered</Blue>. User can <Blue>pay</Blue> through <Blue>PayPal</Blue> gateway. 
            <h3 className="text-center mt-5">Tech used</h3>
            <div className="stacks row">
              <Skill name="Javascript" width=" 4rem" img={js} text="text" />
              <Skill
                name="React"
                width=" 5rem"
                text="text"
                img={react}
                cName="react-logo"
              />
              <Skill name="Nodejs" width=" 4rem" img={nodejs} text="text" />
              <Skill name="Express" width=" 4rem" img={express} text="text" />
              <Skill name="MongoDB" width=" 4rem" img={mongodb} text="text" />
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
          <div className="my-5 d-flex align-right">

            <CButton
              link="https://easy-buy123.herokuapp.com/"
              text="Live "
            />
            <CButton
              link="https://github.com/anshnarula5/ecommerce"
              text="Source "
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Easy;
