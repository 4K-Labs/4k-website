"use client"
import React, { useState } from 'react';
import { CardData } from '../app/types/types';
import Image, { StaticImageData } from 'next/image';

import { Carousel } from "@material-tailwind/react";

import { ChevronRightIcon } from '@heroicons/react/24/outline';
import CircularCarousel from './circularcarousal';
interface HorizontalCardProps {
  eventData: CardData;
  index: number;
}


const HorizontalCard: React.FC<HorizontalCardProps> = ({ eventData, index }) => {
  const {  title, content, imageUrl } = eventData;

  

  return (
    <>
    <div className={`w-3/4  m-auto border mt-10 border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl`}>
      <div className={`flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
      <div className="lg:w-1/2 h-96 ">
            {imageUrl.length > 0 ? (
              <Carousel loop autoplay autoplayDelay={4000} transition={{ duration: 2 }} className="rounded-xl">
                {imageUrl.map((url: StaticImageData, index: number) => (
                  <Image
                    key={index}
                    width = {700}
                    height={400}
                    src={url.src}
                    alt={`image-${index}`}
                    className="w-full h-full object-contain"
                  />
                ))}
              </Carousel>
            ) : (
              <p>No images available</p>
            )}
          </div>
        <div className="p-6 lg:w-1/2 pt-10 text-start">
          {/* <h6 className="text-gray-500 mb-4 uppercase">{category}</h6> */}
          <h4 className="text-blue-gray-700 text-2xl font-bold mb-2">{title}</h4>
          <p className="text-gray-600 text-justify pr-5 pt-3 mb-8">{content}</p>
          <a href="#" className="inline-block">
            
          </a>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default HorizontalCard;
