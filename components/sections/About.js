import React from "react";
import Image from "next/image";
import code from "/display/code.svg";
import styled from "styled-components";
// import Particles from "react-tsparticles";

const About = () => {
  // const Contain = styled.div`
  //   background-image : url("${first}");
  //   background-position: bottom;
  //   background-repeat: no-repeat;
  //   background-size: cover;
  //   height: 100%;
  // `;
  return (
    <section id="about">
      <div className="row text-center about ">
        <div className="info col-md-6 col-12 my-auto">
          <h1 className="display-4 my-5">Hi, I am Ansh Narula</h1>
          <h4>I am a full stack devloper</h4>
          <p className="px-5">
            I am a learner. Like to build web apps using react and nodejs.
            Creative by nature, hard worker by attitude.
          </p>
        </div>
        <div className="col-md-6 my-auto image2" >
          <Image alt="coder" src={code} width="400" className="image1" />
        </div>
      </div>
    </section>
  );
};

export default About;

// <Particles
//         params={{
//           "particles": {
//             "number": {
//               "value": 80,
//               "density": {
//                 "enable": true,
//                 "value_area": 800
//               }
//             },
//             "color": {
//               "value": "#ffffff"
//             },
//             "shape": {
//               "type": "circle",
//               "stroke": {
//                 "width": 0,
//                 "color": "#000000"
//               },
//               "polygon": {
//                 "nb_sides": 5
//               },
//               "image": {
//                 "src": "img/github.svg",
//                 "width": 100,
//                 "height": 100
//               }
//             },
//             "opacity": {
//               "value": 0.1,
//               "random": false,
//               "anim": {
//                 "enable": false,
//                 "speed": 1,
//                 "opacity_min": 0.1,
//                 "sync": false
//               }
//             },
//             "size": {
//               "value": 3,
//               "random": true,
//               "anim": {
//                 "enable": false,
//                 "speed": 40,
//                 "size_min": 0.1,
//                 "sync": false
//               }
//             },
//             "line_linked": {
//               "enable": false,
//               "distance": 150,
//               "color": "#ffffff",
//               "opacity": 0.2,
//               "width": 1
//             },
//             "move": {
//               "enable": true,
//               "speed": 4,
//               "direction": "none",
//               "random": false,
//               "straight": false,
//               "out_mode": "out",
//               "bounce": false,
//               "attract": {
//                 "enable": false,
//                 "rotateX": 600,
//                 "rotateY": 1200
//               }
//             }
//           },
//           "interactivity": {
//             "detect_on": "canvas",
//             "events": {
//               "onhover": {
//                 "enable": true,
//                 "mode": "repulse"
//               },
//               "onclick": {
//                 "enable": false,
//                 "mode": "remove"
//               },
//               "resize": true
//             },
//             "modes": {
//               "grab": {
//                 "distance": 400,
//                 "line_linked": {
//                   "opacity": 1
//                 }
//               },
//               "bubble": {
//                 "distance": 400,
//                 "size": 40,
//                 "duration": 2,
//                 "opacity": 8,
//                 "speed": 3
//               },
//               "repulse": {
//                 "distance": 200,
//                 "duration": 0.4
//               },
//               "push": {
//                 "particles_nb": 4
//               },
//               "remove": {
//                 "particles_nb": 2
//               }
//             }
//           },
//           "retina_detect": true
//         }}
//       />
