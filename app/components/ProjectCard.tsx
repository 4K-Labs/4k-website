"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

import { projectData, projectCard } from "../data/projectData";
import Image from "next/image";

interface ProjectCardProps {
  id: string;
}

export default function ProjectCard({ id }: ProjectCardProps) {
  const router = useRouter();

  function handleClick(id:string) {
    router.push(`/projects/${id}`);
  }

  return (
    <div className="bg-gray-100">
      <Typography className="text-center text-2xl p-7 font-bold">
        Projects
      </Typography>
      <div>
        {projectData.map((value: projectCard, index: number) => {
          if (index < 2) {
            return (
              <div key={value.id} className="py-2 m-auto">
                <Card className="flex md:flex-row flex-col sm:w-5/6  text-2xl m-auto">
                  <CardHeader
                    shadow={true}
                    floated={false}
                    className="md:w-2/5 md:h-full sm:3/5 sm:h-full shrink-0 rounded-r-r self-center"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                      alt="card-image"
                      className="h-full w-full object-cover"
                      width={500}
                      height={500}
                    />
                  </CardHeader>

                  <CardBody>
                    <Typography
                      variant="h6"
                      color="gray"
                      className="mb-4 uppercase"
                    >
                      {value.name}
                    </Typography>

                    <Typography
                      color="gray"
                      className="mb-8 font-normal"
                      style={{
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        display: "-webkit-box",
                      }}
                    >
                      {value.description}
                    </Typography>

                    <a href="#" className="inline-block">
                      <div className="pt-12">
                        <Button
                          variant="filled"
                          className="flex items-center gap-2"
                          onClick={() => handleClick(value.id)}
                        >
                          view more
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="null"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                          </svg>
                        </Button>
                      </div>
                    </a>
                  </CardBody>
                </Card>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
