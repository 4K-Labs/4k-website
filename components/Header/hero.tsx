import React from "react";
import robot from "../../public/images/robot.png";
import Image from "next/image";
import Button from "../button";
// import 4krobot from '@/public/4krobot.gif'
import Video from "next/image";
import Link from "next/link";

const Hero = () => {

  
  return (
    <div className="w-full bg-[#FBFCF8] h-screen pl-6 sm:pl-16 pt-44 pb-20 m-auto flex flex-col md:flex-row justify-around  items-center self-center">
      <div className="flex-col justify-start self-center pl-5 md:pl-20">
        <div className="font-medium leading-10 text-3xl md:text-4xl pr-10">
        Welcome to 4K Labs <br /> A place where curiosity <br/> drives  innovation 

        </div>
        <p className="py-3 md:py-6 font-light text-lg md:text-lg leading-10">
          {" "}
          In 4K Labs KNOWLEDGE meets INNOVATION for CHANGE

        </p>
        <Link href="/about">
          <Button> More About 4K Labs</Button>
        </Link>
      </div>
      <div className = "md:mt-[-40] hidden md:block">
        {/* <video className="" width={500} height={500}  autoPlay loop playsInline>
          <source src="images/4krobot.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <Image className="object-cover" src="/4klabrobot.gif" alt={""} width={500} height={480}/>
        {/* <video src='/4krobot.gif' autoPlay loop playsInline/> */}
      </div>
    </div>
  );
};

export default Hero;
