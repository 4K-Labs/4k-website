"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Cards } from "./Card";
import { values } from "./Data";

export default function HorizontalCard() {
  return (
    <>
      <Typography className="text-center text-2xl p-7 font-bold">
        Projects
      </Typography>
      {values.map((value) => (
        <div className=" " key={value.id}>
          <Card className=" justify-center items-center md:mx-24 lg:w-4/5  md:w-screen  md:flex md:flex-row sm:w-5/6  text-2xl m-3">
            <CardHeader
              // style={{
              //   order: value.id == 2 ? -1 : 1,
              // }}
              shadow={true}
              floated={false}
              className=" md:w-2/5 md:h-full sm:3/5 sm:h-full shrink-0 rounded-r-r self-center "
            >
              {" "}
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="card-image"
                className="h-full w-full object-cover "
              />
            </CardHeader>

            <CardBody>
              <Typography variant="h6" color="gray" className="mb-4 uppercase">
                {value.title}
              </Typography>

              <Typography color="gray" className="mb-8 font-normal">
                {value.body}
              </Typography>
              <a href="#" className="inline-block">
                <div className="pt-12">
                  <Button
                    variant="filled"
                    className="flex items-center gap-2   "
                  >
                    {value.button}

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
      ))}

      {/* ````````````````The event cards */}
      <div>
        <Cards />
      </div>
    </>
  );
}
