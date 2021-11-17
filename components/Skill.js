import React from "react";
import Image from "next/image";
import Tilty from "react-tilty";

const Skill = ({ name, img, width, mt = 2, text = "texta" }) => {
  return (
    <span class="col-md-2 col-3 mt-3 d-flex flex-column align-items-center d-inline stack hide">
      <span class={text}>{name}</span>{" "}
      <Tilty style={{ transformStyle: "preserve-3d" }}  max = {20} scale = {1.2}>
        <div style={{ transform: "translateZ(30px)", width: width }} className = {`mt-${mt}`}>
          <Image src={img} alt="" layout="responsive" />
        </div>
      </Tilty>
    </span>
  );
};

export default Skill;
