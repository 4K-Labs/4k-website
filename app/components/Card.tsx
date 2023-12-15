import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { texts } from "./Data";

export function Cards() {
  return (
    <>
      <Typography className=" text-center p-8 text-2xl">
        Events
      </Typography>
      <div className="grid  place-content-evenly  lg:flex lg:flex-row  lg:gap-4 md:flex md:flex-row md:flex-wrap  sm:p-4     ">
        {texts.map((text) => (
          <div className="p-3 " key={text.id}>
            <Card className=" mt-6 lg:w-96 md:w-60 md: sm:w-42">
              <CardHeader color="blue-gray" className="h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <Typography
                variant="h5"
                color="blue-gray"
                className="m-2 text-center "
              >
                {text.title}
              </Typography>
              <CardBody>
                <Typography>{text.body}</Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button variant="filled" className="">
                  {text.button}
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
