import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from 'next/image'

export function ProjectCard() {
  return (
    <div className="">
      <Card className="w-full max-w-[20rem] sm:m-5 shadow-lg">
        <CardHeader floated={false} color="blue-gray">
          <Image
            src="/images/event.jpg"
            alt="ui/ux review check"
            width={500}
            height={500}
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              Wooden House, Florida
            </Typography>
          </div>
          <Typography color="gray">
            Enter a freshly updated and thoughtfully furnished peaceful home
            surrounded by ancient trees, stone walls, and open meadows.
          </Typography>
          <div className="group mt-8 inline-flex flex-wrap items-center gap-3"></div>
        </CardBody>
        <CardFooter className="pt-3">
          <Button className="bgbrown" size="lg" fullWidth={true}>
            View more
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
