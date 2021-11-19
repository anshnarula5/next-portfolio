import React from "react";
import Image from "next/image";
import bg2 from "../bg/svg2.svg"
import light2 from "../bg/light2.svg"
import last from "../bg/last.svg";
import Email from "../components/Email";

const Connect = ({ isDarkMode }) => {
  return (
    <div id = "connect">
      <Image alt = "svg" src={isDarkMode ? bg2 : light2} layout="responsive" />
      <h1  className="text-center display-4 mt-5">Connect with ME!</h1>
      <Image alt = "svg" src={last} layout="responsive" />
      <Email />
    </div>
  );
};

export default Connect;
