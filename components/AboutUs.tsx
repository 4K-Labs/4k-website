'use client'
import Image from 'next/image'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter
  } from "@material-tailwind/react";
   
const AboutUs = ()=> {
    return (
    <div className="flex flex-col items-center bg-white">
        {/* Title */}
        <div className="text-4xl text-center p-6" >About Us
        </div>
        {/* The About us section */}
        <div>
            <Card className="w-full p-4 flex-col md:flex-row shadow-none">
                
                <CardBody>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Explore About 4k-Labs
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor 
                        incididunt ut labore et dolore magna aliqua.
                        
                    </Typography>
                    <ul className="list-disc">
                        <li>4k-Bots: Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li>4k-Dev: Duis aute irure dolor in reprehenderit in voluptate.</li>
                        <li>4k-Thing: Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                    </ul>
                    <a href="#" className="inline-block">
                        <Button variant="text" className="flex items-center gap-2">
                        Learn More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
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
                    </a>
                </CardBody>
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 md:w-2/5 w-full shrink-0 rounded-r-none hidden md:block"
                >
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
                </CardHeader>
            </Card>
        </div>
        {/* the three cards */}
        <div className="flex flex-wrap p-2 md:w-2/3 justify-center">
            <div className="py-2 w-64 md:w-1/3">
                <Card className="mt-6 text-center shadow-none">
                    <CardBody>
                        <div className="flex bg-brown-700 justify-center rounded-full p-1 m-1">
                            <Image
                            src="bots.svg"
                            alt="bots"
                            width={300}
                            height={300}

                            />
                        </div>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Bots
                        </Typography>
                        <Typography>
                            Because it&apos;s about motivating the doers.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                    <a href="#" className="inline-block">
                        <Button size="sm" variant="text" className="flex items-center gap-2">
                        Learn More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                        </Button>
                    </a>
                    </CardFooter>
                </Card>
            </div>
            <div className="py-2 w-64 md:w-1/3 ">
                <Card className="mt-6 text-center shadow-none">
                    <CardBody>
                        <div className="flex bg-brown-700 justify-center rounded-full p-1 m-1">
                            <Image
                            src="things.svg"
                            alt="things"
                            width={300}
                            height={300}
                            />
                        </div>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Things
                        </Typography>
                        <Typography>
                            Because it&apos;s about motivating the doers. 
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                    <a href="#" className="inline-block">
                        <Button size="sm" variant="text" className="flex items-center gap-2">
                        Learn More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                        </Button>
                    </a>
                    </CardFooter>
                </Card>
            </div>
            <div className="py-2 w-64 md:w-1/3">
                <Card className="mt-6 text-center shadow-none">
                    <CardBody>
                        <div className="flex bg-brown-700 justify-center rounded-full p-1 m-1">
                            <Image
                            src="dev.svg"
                            alt="dev"
                            width={300}
                            height={300}

                            />
                        </div>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Dev
                        </Typography>
                        <Typography>
                            Because it&apos;s about motivating the doers.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                    <a href="#" className="inline-block">
                        <Button size="sm" variant="text" className="flex items-center gap-2">
                        Learn More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                        </Button>
                    </a>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </div>
    );
  }

export default AboutUs