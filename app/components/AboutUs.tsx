'use client'
import Image from 'next/image'
import person from '@/public/images/people.avif'

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter
  } from "@material-tailwind/react";
   
const cardData = [
{
    title: 'Bots',
    image: 'bots.svg',
    description: "Because it's about motivating the doers.",
},
{
    title: 'Things',
    image: 'things.svg',
    description: "Because it's about motivating the doers.",
},
{
    title: 'Dev',
    image: 'dev.svg',
    description: "Because it's about motivating the doers.",
},
];
const AboutUs = ()=> {
    return (
    <div className="flex flex-col items-center bg-gray-100">

        <div className="text-left py-12">
            <h1 className="font-medium leading-10 text-4xl flex justify-center"> About Us </h1>
            <div className={`w-3/4 m-auto mt-10 border-gray-200 rounded-lg overflow-hidden`}>
                <div className="flex flex-col  lg:flex-row-reverse">
                    <div className="lg:w-1/2">
                        <Image src={person} alt="card-image" className="h-full w-full object-cover" />
                    </div>
                    <div className="p-6 lg:w-1/2">
                        <h4 className="text-blue-gray-700 text-2xl font-bold mb-2">Explore About 4k-Labs</h4>
                        <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor 
                    incididunt ut labore et dolore magna aliqua.</p>
                        <ul className="list-disc text-gray-600 mb-8 ml-10">
                            <li>4k-Bots: Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li>4k-Dev: Duis aute irure dolor in reprehenderit in voluptate.</li>
                            <li>4k-Thing: Ulin reprehenderit in voluptate trideta storacalaperda.</li>
                        </ul>
                        
                        <a href="/about" className="inline-block">
                            <button className="flex items-center gap-2 bg-transparent border border-grey-800 text-grey-500 font-semibold px-4 py-2 rounded-md transition duration-300 hover:bg-orange-500 hover:text-white">
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                            </button>
                        </a>
                    </div>
                </div>
            
            </div>
      
        </div>

        {/* the three cards */}
        <div className="flex flex-wrap p-2 md:w-2/3 justify-center">
            {cardData.map((data, index) => (
                <div key={index} className="py-2 w-64 md:w-1/3">
                    <Card className="mt-6 text-center shadow-none bg-opacity-0">
                        <CardBody>
                        <div className="flex bg-brown-600  justify-center rounded-full p-1 m-1 h-36 w-36 mx-auto">
                            <Image src={data.image} className='brightness-90 shadow-md mb-4' alt={data.title} width={200} height={200} />
                        </div>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            {data.title}
                        </Typography>
                        <Typography>
                            {data.description}
                        </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                        <a href="/about" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2 border border-grey-900 text-grey-500 font-semibold px-4 py-2 rounded-md transition duration-300 hover:bg-black hover:text-white">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4" >
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
            ))}
        </div>

    </div>
    );
  }

export default AboutUs