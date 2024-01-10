"use client";
import React, { FC, useEffect, useState } from "react";
import { projectData } from "@/app/data/projectData";
import FeaturedImageGallery from "./imageGallery";
import { ProjectCard } from "../Projects";
import { Typography } from "@mui/material";
import { Button } from "@material-tailwind/react";
import type { ButtonProps } from "@material-tailwind/react";
import Image from "next/image";

interface ProjectProps {
  params: { id: string };
}

interface Project {
  id: string;
  name: string;
  description: string;
  button: string;
  techStack1: string;
  techStack2: string;
}

export function fetchDataById(id: string): Project | undefined {
  return projectData.find((project) => project.id === id);
}

const getRandomProjectIds = (currentId: string, n: number): string[] => {
  const availableIds = projectData.map((project) => project.id);
  const filteredIds = availableIds.filter((id) => id !== currentId);

  const randomIds = [];
  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * filteredIds.length);
    randomIds.push(filteredIds.splice(randomIndex, 1)[0]);
  }

  return randomIds;
};

// Main Function

const ProjectDetails: FC<ProjectProps> = ({ params }) => {
  const [selectedProjects, setSelectedProjects] = useState<Project[]>([]);

  useEffect(() => {
    const randomIds = getRandomProjectIds(params.id, 4);
    const projects = randomIds
      .map((id) => fetchDataById(id))
      .filter(Boolean) as Project[];
    setSelectedProjects(projects);
  }, [params.id]); 

  const project = fetchDataById(params.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="pt-36">
      <div className="py-8 px-4">
        <FeaturedImageGallery id={params.id} />

        <div className="py-4">
          <Typography variant="h4" className="mb-4">
            {project.name}
          </Typography>

          <div className="text-left text-pretty">{project.description}</div>
        </div>

        <div>
          <Typography variant="h5" className="py-10">
            Tech Stack
          </Typography>
          <p>
            Framework and Language: Next.js (React framework, server-side
            rendering, and static site generation)
            TypeScript (Typed superset of
            JavaScript for enhanced development)
            Styling: Tailwind CSS
            (Utility-first CSS framework)
            Development Tools: Visual Studio Code
            npm or Yarn
            Version Control: Git GitHub, GitLab, or Bitbucket Build
            Tools: Webpack.
          </p>
        </div>
        <div className="flex items-center justify-center pt-10">
          <Button size="lg">{project.button}</Button>
        </div>

        <div>
          <Typography variant="h4" className="py-10">
            Related Projects
          </Typography>
          <div className="flex flex-wrap gap-4  justify-evenly ">
            {selectedProjects.map((selectedProject) => (
              <ProjectCard
                key={selectedProject.id}
                id={selectedProject.id}
                name={selectedProject.name}
                description={selectedProject.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
