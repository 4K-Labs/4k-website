"use client";
import cardData from "../../app/data/eventdata";
import { CardData } from "../../app/types/types";
import React from "react";

import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

export default function EventCard() {
  return (
    <>
      <div className=" bg-gray-100">
        <Typography className=" text-center p-8 text-2xl">Events</Typography>

        <div
          className="flex flex-col
          md:flex-row   gap-8 pb-5 m-2"
        >
          {cardData.map((event: CardData, index: number) => {
            if (index < 3) {
              return (
                <div
                  key={index}
                  className="m-auto lg:max-w-[500px] sm:w-full  "
                >
                  <Card>
                    <CardHeader color="blue-gray" className="h-56 ">
                      <Image
                        src={event.imageUrl[0]}
                        alt="card-image"
                        fill={true}
                      />
                    </CardHeader>
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="m-2 text-center"
                    >
                      {event.title}
                    </Typography>

                    <CardBody>
                      <Typography
                        style={{
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          display: "-webkit-box",
                        }}
                      >
                        {event.content}
                      </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 ">
                      <Link href={`/events/`} scroll={true}>
                        <Button variant="filled" className="bg-primary">
                          View more
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
