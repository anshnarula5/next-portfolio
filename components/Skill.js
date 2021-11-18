import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Tilt from "./Tilt";
import styled from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Skill = ({name, img, width, mt = 2, text = "texta", delay = 50, cName = ""}) => {
  // const Sk = styled.div`
  //   transform: translateZ(30px);
  //   width: ${width};
  //   @media (max-width: 768px) {
  //   width: 3rem;
  // }
  // `
  const options = {
    scale: 1.2,
    speed: 600,
    max: 15,
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <span className="col-md-2 col-3 mt-3 d-flex flex-column align-items-center d-inline stack hide ">
      <span className={text}>{name}</span>
      <Tilt style={{ transformStyle: "preserve-3d" }} options={options}>
          <div className = "skill mt-1">
          <Image src={img}  alt="" layout="responsive" className ={cName}/>
          </div>

      </Tilt>
    </span>
  );
};

export default Skill;
