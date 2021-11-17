import React from "react";
import Image from "next/image";

const Skill = ({ name, img, width, mt = 2 }) => {
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
      <span style={{ width: width, transform: "translateZ(20px)" }} className = {`mt-${mt}`}>
        <Image
          src={img}
          alt=""
          layout = "responsive"
        />
      </span>
    </span>
  );
};

export default Skill;
