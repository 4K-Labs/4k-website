"use client"
import Image from "next/image";
import { Carousel ,IconButton  } from "@material-tailwind/react";
 

export default function WhoAreWe() {

  return (
    <div className="flex flex-col-reverse md:flex-row  p-3 gap-3">
      <div className="flex-1 bg-gray-200 p-6 md:p-12  rounded-e-3xl">
        <h1 className="text-lg md:text-4xl mb-4  font-semibold text-center">
          Who we are
        </h1>
        <div>
          <p className="md:text-lg">
            4K Labs is a Research and development laboratory at Addis Ababa
            University (AAU) located in the College of Natural and Computational
            Science(CNCS), under the Computer Science department. where there
            are teams of curious innovators from different disciplines of study,
            working together in the focus area of AI, Robotics, embedded
            systems, tiny ML, and software development.
          </p>
        </div>
      </div>
      <div className="flex-1  transform transition duration-500 hover:scale-110 hover:z-20">
      <Carousel       navigation={({ setActiveIndex, activeIndex, length }) => (
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
      transition={{ duration: 2 }} loop={true} autoplay={true} autoplayDelay={5000} className="rounded-xl">
        
      <Image
        alt={"4klabs"}
        src={"/images/gathering.jpg"}
        layout="fill"
        objectFit="cover"
      />
      <Image
        alt={"4klabs"}
        src={"/images/focused.jpg"}
        layout="fill"
        objectFit="cover"
      />
      <Image
        alt={"4klabs"}
        src={"/images/Presenting.jpg"}
        layout="fill"
        objectFit="cover"
      />
      <Image
        alt={"4klabs"}
        src={"/images/Members.jpg"}
        layout="fill"
        objectFit="cover"
      />
      <Image
        alt={"4klabs"}
        src={"/images/Having-fun.JPG"}
        layout="fill"
        objectFit="cover"
      />

    </Carousel>
      
      </div>
    </div>
  );
}