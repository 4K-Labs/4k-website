'use client'

import React, { Component } from "react";
import testimonials from '@/app/data/testimonydata';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    CardFooter,
  } from "@material-tailwind/react";

const TestimonyDesktop = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        centerPadding: "0",
        speed: 500,
        draggable: true,
        initialSlide: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        className:"slides",
        cssEase: 'linear',
        // variableWidth: true,
        // variableHeight: true,
        nextArrow: <NextArrow className={"w-6"} style={undefined} onClick={undefined} />,
        prevArrow: <PrevArrow className={"w-12"} style={undefined} onClick={undefined}  />,
        };  
      
    return (
      <div className='w-full px-6 md:px-28 lg:px-40 m-auto py-40'>
        
          <Slider {...settings} className="mx-auto h-full">
            {testimonials.map((testimony)=>(
                <div key={testimony.id} className=''>
                    <Card color="transparent" shadow={false} className="w-full p-6 shadow-xl h-full bg-white">
                        <CardHeader
                        color="transparent"
                        floated={false}
                        shadow={false}
                        className="mx-0 flex flex-col items-center gap-4 pt-0 pb-1"
                        >
                          <Image className="w-36 h-36 rounded-full" width={500} height={500} src={testimony.image} alt={testimony.name}/>      
                        </CardHeader>
                        <CardBody className="pb-1 text-center">
                            <Typography>{testimony.content}</Typography>
                        </CardBody>
                        <CardFooter>
                          <div className="flex w-full flex-col items-center">
                            <Avatar
                                size="lg"
                                variant="circular"
                                src={"/images/quote-svgrepo-com.svg"}
                                alt={""}
                            />
                              <div className="flex items-center justify-between">
                              <Typography variant="h5" color="blue-gray">
                                  {testimony.name}
                              </Typography>
                              </div>
                              <Typography color="blue-gray">{testimony.title}</Typography>
                          </div>
                        </CardFooter>
                    </Card>
                </div>
            ))}
          </Slider>
        </div>

  
    )
}

export default TestimonyDesktop
   
function NextArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray",}}
      onClick={onClick}
    />
  );
}



function PrevArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

