'use client'

import { Carousel, 
  Typography, 
  Button,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  IconButton } from "@material-tailwind/react";

import testimonials from '@/app/data/testimonydata';

export default function TestimonyMobile() {
  return (
    <Carousel
      className="rounded-xl"
      loop={true}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
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
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
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
    >
      {testimonials.map((testimony)=>(
        <div key={testimony.id} className='inset-0 grid h-full w-full place-items-center'>
            <Card color="transparent" shadow={false} className="w-4/5 m-6 p-2 shadow-xl h-72 bg-white">
                <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-4"
                >
                  <Avatar
                      size="lg"
                      variant="circular"
                      src={testimony.image}
                      alt={testimony.name}
                  />
                  <div className="flex w-full flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                      <Typography variant="h5" color="blue-gray">
                          {testimony.name}
                      </Typography>
                      </div>
                      <Typography color="blue-gray">{testimony.title}</Typography>
                  </div>
                </CardHeader>
                <CardBody className="mb-6 p-0">
                    <Typography>{testimony.content}</Typography>
                </CardBody>
            </Card>
        </div>
      ))}
    </Carousel>
  );
}

