'use client'
import React, { useState, useEffect } from "react";
import { projectData, ProjectCardKey } from "@/app/data/projectData";
import Image from "next/image";

interface FeaturedImageGalleryProps {
  id: string;
}


const FeaturedImageGallery: React.FC<FeaturedImageGalleryProps> = ({ id }) => {
  const [imagesOrder, setImagesOrder] = useState<ProjectCardKey[]>([
    "image1",
    "image2",
    "image3",
  ]);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    setActive(
      projectData.find((project) => project.id === id)?.[imagesOrder[0]] || null
    );
  }, [id, imagesOrder]);

  const handleClickThumbnail = (clickedImage: ProjectCardKey) => {
    setImagesOrder((prevOrder) => {
      const newOrder = prevOrder.slice(); 
      const index = newOrder.indexOf(clickedImage);

      if (index !== -1) {

        newOrder.splice(index, 1);
        
        newOrder.unshift(clickedImage);
      }

      return newOrder;
    });
  };

  // Main Project

  const currentProject = projectData.find((project) => project.id === id);

  return (
    <div className=" flex flex-col sm:flex-row gap-5 p-4 px-2 justify-center">
      <div className="">
        <Image
          className="max-w-full rounded-md object-cover object-center md:h-[480px]"
          src={active || ""}
          alt=""
          width={1000}
          height={500}
        />
      </div>
      {currentProject && (
        <div className="flex-col gap-4 cursor-pointer">
          {currentProject && (
            <div className="flex md:flex-col sm:flex-col ">
              {imagesOrder.map((imageKey, index) => (
                <React.Fragment key={index}>
                  {currentProject[imageKey] && (
                    <Image
                      src={currentProject[imageKey]}
                      alt={`thumbnail-${index + 1}`}
                      className="h-20 w-full max-w-full  sm:justify-around  rounded-md object-cover object-center p-2"
                      width={400}
                      height={500}
                      onClick={() => handleClickThumbnail(imageKey)}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FeaturedImageGallery;




