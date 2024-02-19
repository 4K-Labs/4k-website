import React from "react";
import robot from "../../public/images/robot.png";
import Image from "next/image";
import Button from "../button";

import Video from "next/image";

const Hero = () => {
  return (
    <div className="w-3/4 pl-16 py-60 m-auto flex justify-around  items-center self-center">
      <div className="flex-col justify-start self-center">
        <div className="font-medium leading-10 text-3xl md:text-4xl pr-10">
        Welcome to 4K Labs <br /> A place where curiosity <br/> drives  innovation 

        </div>
        <p className="py-3 md:py-6 font-light text-lg md:text-lg leading-10">
          {" "}
          In 4K Labs KNOWLEDGE meets INNOVATION for CHANGE

        </p>
        <Button> More About 4K Labs</Button>
      </div>
      <div className = "mt-[-40] bg-red-500">
        <video className="hidden md:block" width={500} height={500}  autoPlay loop playsInline>
          <source src="images/4krobot.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
