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
    description: " In this focus area members of 4K Labs work on projects such as; controlling robots for playing football, programming robots to complete autonomous tasks, and Autonomous cars.",
},
{
    title: 'Things',
    image: 'things.svg',
    description: "4K Things is a specialization of 4K Labs that focuses on embedded systems, IoT, and Tiny Machine Learning. Some of the projects done in this specialization are Smart mirrors, home automation, smart power meter and hardware-based games.  ",
},
{
    title: 'Dev',
    image: 'dev.svg',
    description: "The teams in 4K dev are the contact point when there is interest in bringing a hardware solution to the cloud. 4K Dev specialization was able to develop software and websites such as the 4K Labs website, class scheduling app, and agile working platform for the team.    ",
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
                        <p className="text-gray-600 mb-8">4K Labs is a Research and development laboratory at Addis Ababa University (AAU)
                         located in the College of Natural and Computational Science(CNCS), under the Computer Science department. </p>
                        <ul className="list-disc text-gray-600 mb-8 ml-10">
                            <li><strong>4k-Bots</strong>: Is the division of 4K Labs, focusing on robotics and Artificial Intelligence. </li>
                            <li><strong>4k-Dev</strong>: In this age of technology, embedded systems are everywhere in our daily life starting from smart watches to the smart cars we drive. </li>
                            <li><strong>4k-Thing</strong>: 4K Dev is a specialization of 4K Labs that focuses on developing software solutions to existing problems that have been identified.</li>
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
                        <div className="flex justify-center rounded-full p-1 m-1 h-36 w-36 mx-auto">
                            <Image src={data.image} className='mb-4 fill-black' alt={data.title} width={200} height={200} />
                        </div>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            {data.title}
                        </Typography>
                        <Typography className="text-left">
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