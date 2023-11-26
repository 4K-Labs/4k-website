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

const Testimony = ()=>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        initialSlide: 1,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        nextArrow: <NextArrow className={"h-12 w-12 bg-red"} style={undefined} onClick={undefined} />,
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
          <div className="flex justify-center p-4"><h1 className="text-4xl font-bold p-4">Testimonial</h1></div>
          <Slider {...settings} className="m-auto">
            {testimonials.map((testimony)=>(
                <div key={testimony.id} className=''>
                    <Card color="transparent" shadow={false} className="w-64 p-2 bg-white">
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

export default Testimony
  
function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}
   
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

