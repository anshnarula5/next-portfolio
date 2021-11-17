import React from "react";
import Image from "next/image";


const Skill = ({ name, img }) => {
  return (
    <span
      class="col-md-2 col-3 mt-3 d-flex flex-column align-items-center d-inline stack"
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(1000px)",
      }}
      data-tilt
      data-tilt-scale="1.1"
    >
      <span class="texta">{name}</span>{" "}
      <Image
        src={img}
        style={{width: "3rem", transform: "translateZ(20px)"}}
        alt=""
      />
    </span>
  );
};

export default Skill;
