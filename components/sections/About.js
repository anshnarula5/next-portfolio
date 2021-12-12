import React from "react";
import Image from "next/image";
import code from "/display/code.svg";
import styled from "styled-components";
import { TextLoop } from "react-text-loop-next";
import CButton from "../Button";
// import Particles from "react-tsparticles";

const About = ({ isDarkMode }) => {
  // const Contain = styled.div`
  //   background-image : url("${first}");
  //   background-position: bottom;
  //   background-repeat: no-repeat;
  //   background-size: cover;
  //   height: 100%;
  // `;
  const Blue = styled.span`
    color: ${isDarkMode ? "yellow" : "#023e8a"};
    font-weight: 600;
  `;
  return (
    <section id="about">
      <div className="row text-center about ">
        <div className="info col-md-6 col-12 my-auto">
          <h1 className="display-3 my-5">Hey, this is Ansh Narula</h1>
          <h4 className="display-6  my-5">
            I am a {"  "}
            <TextLoop>
              <Blue> self taught developer</Blue>
              <Blue> full stack engineer</Blue>
              <Blue> philomath</Blue>
            </TextLoop>{" "}
          </h4>
          <h6 className="px-5">
            I am a pre final year student pursuing electronics and communication
            engineering at PDPM IIITDM Jabalpur, India. I am actively looking
            for internships/ jobs in web dev/ software engineering fields. If
            you have anything to share you are free to{" "}
            <a href="#connect" className="link">
              <Blue>contact</Blue>{" "}
            </a>
            me anytime
            <div></div>
          </h6>
        </div>
        <div className="col-md-6 my-auto image2">
          <Image
            alt="coder"
            src={code}
            width="400"
            className="image1"
            priority={true}
          />
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
