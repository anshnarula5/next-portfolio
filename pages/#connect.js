import React from "react";
import Image from "next/image";

import last from "../bg/last.svg";
import Email from "../components/Email";

const Connect = ({ isDarkMode }) => {
  return (
    <div id = "connect">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={isDarkMode ? "#04395e" : "#e3f2fd"}
          fill-opacity="1"
          d="M0,160L30,144C60,128,120,96,180,117.3C240,139,300,213,360,208C420,203,480,117,540,112C600,107,660,181,720,224C780,267,840,277,900,256C960,235,1020,181,1080,181.3C1140,181,1200,235,1260,240C1320,245,1380,203,1410,181.3L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
      <h1  className="text-center display-4 mt-5">Connect with ME!</h1>
      <Image src={last} layout="responsive" />
      <Email />
    </div>
  );
};

export default Connect;
