'use client'

import React, { Component } from "react";
import testimonials from '@/app/data/testimonydata';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
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
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        cssEase: 'linear',
        variableWidth: true,
        variableHeight: true,
        nextArrow: <NextArrow className={undefined} style={undefined} onClick={undefined} />,
        prevArrow: <PrevArrow className={undefined} style={undefined} onClick={undefined} />,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
        };  
      
    return (
    <div className='w-4/5 m-auto my-8 py-12'>
        <div className='m-4'>
          <Slider {...settings} className="mx-auto px-10">
            {testimonials.map((testimony)=>(
                <div key={testimony.id} className=''>
                    <Card color="transparent" shadow={false} className="w-64 m-6 p-2 shadow-xl h-72 bg-white">
                        <CardHeader
                        color="transparent"
                        floated={false}
                        shadow={false}
                        className="mx-0 flex items-center gap-4 pt-0 pb-4"
                        >
                          <Avatar
                              size="lg"
                              variant="circular"
                              src={testimony.image}
                              alt={testimony.name}
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
                            <Typography>{testimony.content}</Typography>
                        </CardBody>
                    </Card>
                </div>
            ))}
          </Slider>
        </div>

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

