import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Tilt from "./Tilt";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Skill = ({ name, img, width, mt = 2, text = "texta", delay = 50 }) => {
  const options = {
    scale: 1.2,
    speed: 600,
    max: 15,
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <span class="col-md-2 col-3 mt-3 d-flex flex-column align-items-center d-inline stack hide">
      <span class={text}>{name}</span>{" "}
      <Tilt style={{ transformStyle: "preserve-3d" }} options={options}>
        <div
          style={{ transform: "translateZ(30px)", width: width }}
          className={`mt-${mt}`}
        >
          <Image src={img} alt="" layout="responsive" />
        </div>
      </Tilt>
    </span>
  );
};

export default Skill;
