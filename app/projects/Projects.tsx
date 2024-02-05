"use Client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";

import { useRouter } from "next/navigation";

interface ProjectCardProps {
  name: string;
  description: string;
  id: string;
}

export function ProjectCard({ id, name, description }: ProjectCardProps) {
  const router = useRouter();

  function handleClick() {
    router.push(`/projects/${id}`);
  }

  return (
    <div>
      <Card className="w-full max-w-[20rem] sm:m-5 shadow-lg">
        <CardHeader floated={false} color="blue-gray">
          <Image
            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="ui/ux review check"
            width={500}
            height={500}
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              {name}
            </Typography>
          </div>
          <Typography
            color="gray"
            style={{
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              display: "-webkit-box",
            }}
          >
            {description}
          </Typography>
          <div className="group mt-8 inline-flex flex-wrap items-center gap-3"></div>
        </CardBody>
        <CardFooter className="pt-3">
          <Button size="lg" fullWidth={true} onClick={handleClick}>
            View more
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
