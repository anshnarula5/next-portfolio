import React, {useEffect} from "react";
import Image from "next/image";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import Skill from "../Skill";
import react from "/img/react.svg"
import js from "/img/javascript.svg";
import  nodejs  from "/img/nodejs.svg";
import  express  from "/img/express.svg";
import  mongodb  from "/img/mongodb.svg";
import  next  from "/img/nextjs.svg";
import  firebase  from "/img/firebase.svg";
import  html5  from "/img/html5.png";
import  css3  from "/img/css-3.png";
import  sass  from "/img/sass.svg";
import  materialui  from "/img/materialui.svg";
import  redux1  from "/img/redux1.svg";
import  bootstrap  from "/img/bootstrap.svg";
import  tailwindcss  from "/img/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg";
import  ejs  from "/img/ejs.svg";
import  git  from "/img/git.svg";
import  github  from "/img/github.svg";
import  socketio  from "/img/socketio.svg";
import  vercel  from "/img/vercel.svg";
import  net  from "/img/net.svg";
import  json  from "/img/Papirus-Team-Papirus-Mimetypes-App-json.svg";
import  axios  from "/img/axios.svg";
import  jwt  from "/img/jwt-3.svg";
import  chartjs  from "/img/chartjs.svg";
import  postman  from "/img/postman.png";

import code from "/display/2.svg";

const Tech = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id="tech">
      <div className="row text-center ">
        <div className="col-md-7 order-md-1 px-3 mt-5">
          <h1 className="text-center display-4 my-5 ">My Tech Stack</h1>
          <div className="stacks row "  > 
            <Skill name="Javascript" width = " 4rem" img={js} />
            <Skill name="Express" width = " 4rem" img={express} />
            <Skill name="React" width = " 6rem" img={react} cName="react-logo"/>
            <Skill name="Node.js" width = " 5rem" img={nodejs} />
            <Skill name="MongoDB" width = " 4rem" img={mongodb} />
            <Skill name="Nextjs" width = " 5rem" img={next} />
            <Skill name="Firebase" width = " 3rem" img={firebase} />
            <Skill name="Socket.io" width = " 4rem" img={socketio} />
            <Skill name="HTML5" width = " 4rem" img={html5} />
            <Skill name="CSS#" width = " 4rem" img={css3} />
            <Skill name="SCSS" width = " 4rem" img={sass} />
            <Skill name="MaterialUI" width = " 4rem" img={materialui} />
            <Skill name="Redux" width = " 4rem" img={redux1} />
            <Skill name="Bootstrap" width = " 4rem" img={bootstrap} />
            <Skill name="Tailwind" width = " 5rem" img={tailwindcss} />
            <Skill name="Ejs" width = " 4rem" img={ejs} />
            <Skill name="Git" width = " 4rem" img={git} />
            <Skill name="Github" width = " 4rem" img={github} />
            <Skill name="Vercel" width = " 4rem" img={vercel} />
            <Skill name="Axios" width = " 6rem" mt = {3}img={axios} />
            <Skill name="JWT" width = " 4rem" img={jwt} />
            <Skill name="Postman" width = " 4rem" img={postman} />
          </div>
        </div>
        <div className="col-md-5 order-md-12 mt-auto image2" >
          <Image src={code} alt="" layout="responsive" />
        </div>
      </div>
    </section>
  );
};

export default Tech;

{/* <Skill name="Javascript" width = " 3rem" img={js}  delay = {100}/>
<Skill name="Express" width = " 3rem" img={express} delay = {150} />
<Skill name="Node.js" width = " 4rem" img={nodejs}  delay = {200}/>
<Skill name="MongoDB" width = " 3rem" img={mongodb} delay = {350} />
<Skill name="HTML5" width = " 3rem" img={html5} delay = {300} />
<Skill name="CSS#" width = " 3rem" img={css3} delay = {350} />
<Skill name="SCSS" width = " 3rem" img={sass} delay = {400} />
<Skill name="MaterialUI" width = " 3rem" img={materialui} delay = {450} />
<Skill name="Redux" width = " 3rem" img={redux1} delay = {500} />
<Skill name="Bootstrap" width = " 3rem" img={bootstrap} delay = {550} />
<Skill name="Tailwind" width = " 4rem" img={tailwindcss}  delay = {600}/>
<Skill name="Ejs" width = " 3rem" img={ejs} delay = {650} />
<Skill name="Git" width = " 3rem" img={git}  delay = {700}/>
<Skill name="Github" width = " 3rem" img={github} delay = {750} />
<Skill name="Heroku" width = " 3rem" img={heroku}  delay = {800}/>
<Skill name="Netlify" width = " 3rem" img={net}  delay = {850} />
<Skill name="JSON" width = " 3rem" img={json}  delay = {900}/>
<Skill name="Axios" width = " 5rem" mt = {3}img={axios}  delay = {950}/>
<Skill name="JWT" width = " 3rem" img={jwt} delay = {1000} />
<Skill name="Chartjs" width = " 3rem" img={chartjs} delay = {1050} />
<Skill name="Postman" width = " 3rem" img={postman} delay = {1100} /> */}