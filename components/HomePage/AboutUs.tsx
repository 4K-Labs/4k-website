'use client'

import Image from 'next/image'
import { Carousel, IconButton } from "@material-tailwind/react";
import members from '@/public/images/Members.jpg'
import presentation from '@/public/images/Presenting.jpg'
import focused from '@/public/images/focused.jpg'
import havingfun from '@/public/images/havingFun.jpg'

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
    image: '4KBots.svg',
    description: " In this focus area members of 4K Labs work on projects such as; controlling robots for playing football, programming robots to complete autonomous tasks, and Autonomous cars.",
},
{
    title: 'Things',
    image: '4Kthings.svg',
    description: "4K Things is a specialization of 4K Labs that focuses on embedded systems, IoT, and Tiny Machine Learning. Some of the projects done in this focus area are Smart mirrors, home automation, smart power meter and hardware-based games.",
},
{
    title: 'Dev',
    image: '4Kdevs.svg',
    description: "4K Dev specialization was able to develop software and websites such as the 4K Labs website, class scheduling app, and agile working platform for the team.    ",
},
];
const AboutUs = ()=> {
    return (
    <div className="flex flex-col items-center w-full md:w-3/4">

        <div className="text-left py-6 bg-gray-100">
            <div className={`m-auto mt-10 border-gray-200 overflow-hidden`}>
                <div className="flex flex-col  lg:flex-row-reverse">
                <div className="flex w-full h-[400px] lg:h-[430px]  items-center justify-around lg:w-1/2">
                <Carousel
                navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                    <span
                        key={i}
                        className={`hidden h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                    />
                    ))}
                </div>
                )}
                prevArrow={({ handlePrev }) => (
                <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handlePrev}
                    className="hidden top-2/4 left-4 -translate-y-2/4"
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
                    className="hidden top-2/4 !right-4 -translate-y-2/4"
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
                transition={{ type: "tween", duration: 2 }}
                loop={true}
                autoplay={true}
                autoplayDelay={6000}
                className="rounded-2xl"
            >
                <div className="relative w-full h-full overflow-hidden">
                <Image className="w-full h-full object-cover" src={members} alt="" />
                </div>
                <div className="relative w-full h-full overflow-hidden">
                <Image className="w-full h-full object-cover" src={presentation} alt="" />
                </div>
                <div className="relative w-full h-full overflow-hidden">
                <Image className="w-full h-full object-cover" src={focused} alt="" />
                </div>
                <div className="relative w-full h-full overflow-hidden">
                <Image className="w-full h-full object-cover" src={havingfun} alt="" />
                </div>
                </Carousel>
                </div>
                <div className="p-6 lg:w-1/2 ">
                    <p className="text-gray-600 mb-8">4K Labs is a Research and development laboratory at Addis Ababa University (AAU)
                        located in the College of Natural and Computational Science(CNCS), under the Computer Science department. </p>
                    <ul className="list-disc text-gray-600 mb-8 ml-6">
                        <li><strong>4k-Bots</strong>: Is the division of 4K Labs, focusing on robotics and Artificial Intelligence. </li>
                        <li><strong>4k-Thing</strong>: In this age of technology, embedded systems are everywhere in our daily life starting from smart watches to the smart cars we drive. </li>
                        <li><strong>4k-Dev</strong>: 4K Dev is a specialization of 4K Labs that focuses on developing software solutions to existing problems that have been identified.</li>
                    </ul>
                    
                    <a href="/about" className="inline-block">
                        <button className="flex items-center gap-2 bg-transparent border border-grey-800 text-grey-500 font-semibold px-4 py-2 rounded-md transition duration-300 hover:bg-primary hover:text-white">
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
        <div className="flex flex-wrap justify-center bg-transparent">
            {cardData.map((data, index) => (
                <div key={index} className="py-2 w-full md:w-1/3">
                    <Card className="mt-6 text-center shadow-none bg-opacity-0 ">
                        <CardBody className='p-2'>
                            <div className="flex justify-center rounded-full p-1 m-1 h-44 w-44 mx-auto">
                                <Image src={data.image} className='mb-4 fill-black' alt={data.title} width={200} height={200} />
                            </div>
                            
                            <Typography className="text-left m-0">
                                {data.description}
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <a href={"/about"+"#"+data.title} className="inline-block">
                                <Button size="sm" variant="text" className="flex items-center gap-2 border border-grey-900 text-grey-500 font-semibold px-4 py-2 rounded-md transition duration-300 hover:bg-primary hover:text-white">
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