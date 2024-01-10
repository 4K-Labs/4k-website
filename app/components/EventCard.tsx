"use client";
import cardData from "../data/eventdata";
import { CardData } from "../types/types";
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

export default function EventCard() {
  return (
    <>
      <div className=" bg-gray-100">
        <Typography className=" text-center p-8 text-2xl">Events</Typography>

        <div
          className="flex flex-col  justify-center items-center
          md:flex-row sm:flex-col m-auto "
        >
          {cardData.map((event: CardData, index: number) => {
            if (index < 3) {
              return (
                <div key={index} className="p-5 sm:m-auto">
                  <Card>
                    <CardHeader color="blue-gray" className="h-56">
                      <Image
                        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                        alt="card-image"
                        width={500}
                        height={500}
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
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          display: "-webkit-box",
                        }}
                      >
                        {event.content}
                      </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 ">
                      <Button variant="filled">View more</Button>
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
