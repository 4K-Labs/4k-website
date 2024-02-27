"use client";

import Image from "next/image";
import { Carousel, IconButton } from "@material-tailwind/react";

interface AboutCardProps {
  imageSrc1: string;
  imageSrc2: string;
  blackTitle: string;
  orangeTitle: string;
  description: string;
  row?: string;
}

const AboutCard: React.FC<AboutCardProps> = ({
  imageSrc1,
  imageSrc2,
  blackTitle,
  orangeTitle,
  description,
  row,
}) => (
  <div
    className={`mt-8 bg-gray-200 rounded-md flex flex-wrap items-center justify-between ${row}`}
  >
    <div className="flex w-full h-[400px] lg:h-[410px]  items-center justify-around lg:w-1/2  transform transition duration-500 hover:scale-105 hover:z-20">
      <Carousel
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`hidden h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="hidden top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="hidden top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
        transition={{ type: "tween", duration: 2 }}
        loop={true}
        autoplay={true}
        autoplayDelay={6000}
      >
        <div className="relative w-full h-full m-0 rounded-lg">
          <Image alt={orangeTitle} src={imageSrc1} fill />
        </div>
        <div className="relative w-full min-h-full m-0 rounded-lg">
          <Image alt={orangeTitle} src={imageSrc2} fill />
        </div>
      </Carousel>
    </div>
    <div className="mt-8 p-4 w-full lg:mt-0 lg:w-1/2  border-l-2 border-l-primary">
      <h3 className="mb-2 inline-block text-4xl font-bold  text-primary  font-heading">
        <span className="border-b-4 border-primary  text-gray-700 ">
          {blackTitle}
        </span>{" "}
        {orangeTitle}
      </h3>
      <p className="mt-4 text-gray-800 text-lg text-justify ">{description}</p>
    </div>
  </div>
);

export default AboutCard;
