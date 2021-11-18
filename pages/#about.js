import React from "react";
import Image from "next/image";
import code from "../display/code.svg";

const About = () => {
  return (
    <section id="about">
      <div className="row text-center about ">
        <div className="info col-md-6 col-12 my-auto">
          <h1 className="display-4 mb-4">Hi, I am Ansh Narula</h1>
          <h4>I am a full stack devloper</h4>
          <p className="px-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia,
            repellendus ab. Laborum quod quo possimus. Vero cumque error dolorem
            laboriosam porro mollitia animi alias, eum officiis, cum amet magni
            in!
          </p>
        </div>
        <div className="col-md-6 my-auto">
          <Image src={code} width="500" />
        </div>
      </div>
    </section>
  );
};

export default About;
