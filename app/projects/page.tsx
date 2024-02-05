"use client";

import { Typography } from "@material-tailwind/react";
import { ProjectCard } from "./Projects";
import { CircularPagination } from "./Pagination";
import { projectCard, projectData } from "../data/projectData";

import Image from "next/image";

const Project = () => {
  return (
    <main className="mt-24">
      <div className="flex text-3xl ">
        <div className="flex-1 w-screen lg:flex-auto lg:w-7/12 lg:h-7/12 md:h-7/12 md:7/12 sm:7/12  py-56 px-16 justify-start items-center ">
          <div>
            <Typography variant="h4" className="text-4xl  ">
              Discover The Projects We Are Proud Of
            </Typography>
          </div>
          <br />
          <Typography>
            {" "}
            Lorem ipsum dolor sit consectetur adipisicing elit. Sequi, dolores
            repellendus voluptas consequuntur accusamus cupiditate! Asperiores
            iusto rerum quae, magnam itaque voluptas facilis totam aliquid quasi
            nobis quos. Explicabo, m ipsum dolor sit amet consectetu
          </Typography>
        </div>

        <div className="flex-1 lg:flex-auto lg:w-5/12 md:w-screen sm:hidden lg:block  py-20 px-10  ">
          <Image
            src={"/Images/4klogo.png"}
            alt="4K logo"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="flex flex-row flex-wrap  md:gap-12 items-center justify-center  ">
        {projectData.map((project: projectCard) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
          />
        ))}
      </div>
      <div className="">
        <CircularPagination />
      </div>
    </main>
  );
};

export default Project;
