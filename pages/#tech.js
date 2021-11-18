import React, {useEffect} from "react";
import Image from "next/image";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import Skill from "../components/Skill";
import js from "../img/javascript.svg";
import  nodejs  from "../img/nodejs.svg";
import  express  from "../img/express.svg";
import  mongodb  from "../img/mongodb.svg";
import  html5  from "../img/html5.png";
import  css3  from "../img/css-3.png";
import  sass  from "../img/sass.svg";
import  materialui  from "../img/materialui.svg";
import  redux1  from "../img/redux1.svg";
import  bootstrap  from "../img/bootstrap.svg";
import  tailwindcss  from "../img/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg";
import  bulma  from "../img/bulma-seeklogo.com.svg";
import  ejs  from "../img/ejs.svg";
import  git  from "../img/git.svg";
import  github  from "../img/github.svg";
import  heroku  from "../img/heroku.png";
import  net  from "../img/net.svg";
import  json  from "../img/Papirus-Team-Papirus-Mimetypes-App-json.svg";
import  axios  from "../img/axios.svg";
import  jwt  from "../img/jwt-3.svg";
import  chartjs  from "../img/chartjs.svg";
import  postman  from "../img/postman.png";

import code from "../display/2.svg";

const Tech = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id="tech" >
      <div class="row text-center ">
        <div class="col-md-7 order-md-1 px-3" data-aos="fade-left">
          <h1 class="text-center display-4 my-5">My Tech Stack</h1>
          <div class="stacks row " >
            <Skill name="Javascript" width = " 3rem" img={js} />
            <Skill name="Express" width = " 3rem" img={express} />
            <Skill name="Node.js" width = " 4rem" img={nodejs} />
            <Skill name="MongoDB" width = " 3rem" img={mongodb} />
            <Skill name="HTML5" width = " 3rem" img={html5} />
            <Skill name="CSS#" width = " 3rem" img={css3} />
            <Skill name="SCSS" width = " 3rem" img={sass} />
            <Skill name="MaterialUI" width = " 3rem" img={materialui} />
            <Skill name="Redux" width = " 3rem" img={redux1} />
            <Skill name="Bootstrap" width = " 3rem" img={bootstrap} />
            <Skill name="Tailwind" width = " 4rem" img={tailwindcss} />
            <Skill name="Ejs" width = " 3rem" img={ejs} />
            <Skill name="Git" width = " 3rem" img={git} />
            <Skill name="Github" width = " 3rem" img={github} />
            <Skill name="Heroku" width = " 3rem" img={heroku} />
            <Skill name="Netlify" width = " 3rem" img={net} />
            <Skill name="JSON" width = " 3rem" img={json} />
            <Skill name="Axios" width = " 5rem" mt = {3}img={axios} />
            <Skill name="JWT" width = " 3rem" img={jwt} />
            <Skill name="Chartjs" width = " 3rem" img={chartjs} />
            <Skill name="Postman" width = " 3rem" img={postman} />
          </div>
        </div>
        <div class="col-md-5 order-md-12 mt-auto"  data-aos="fade-right">
          <Image src={code} alt="" layout="responsive" />
        </div>
      </div>
    </section>
  );
};

export default Tech;
