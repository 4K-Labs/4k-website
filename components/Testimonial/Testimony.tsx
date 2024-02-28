'use client'

import React from "react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import testimonials from '@/app/data/testimonydata';
import PopOver from "./PopOver";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  CardFooter,
} from "@material-tailwind/react";



const Testimony = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const handleHoverChange = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying)
  };

  return (    
    <div className="w-full py-8  sm:px-20 md:px-32 mx-auto bg-transparent">
      <Marquee className="p-2" speed={70} pauseOnHover={true} play={isPlaying}>
        
        {testimonials.map((testimony) => (
          <div key={testimony.id} className="m-4 ">
            <Card  shadow={false} className="w-full w-[22rem] h-[17rem] px-4 bg-secondary-bg">
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-8"
              >
                <Avatar
                  size="xl"
                  variant="circular"
                  src={testimony.image}
                  alt="image"
                />
                <div className="flex w-full flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                      {testimony.name}
                    </Typography>
                  </div>
                  <Typography color="blue-gray">{testimony.title}</Typography>
                </div>
              </CardHeader>
              <CardBody className="mb-6 p-0">
                <Typography>
                  {testimony.small_content}
                  <PopOver onHoverChange={handleHoverChange}  name={testimony.name} image={testimony.image} content={testimony.content} title={testimony.title}/>
                </Typography>
              </CardBody>
            </Card>
          </div>
        ))}
      </Marquee>
    </div>

  )
  
};

export default Testimony;