"use client";
import Image from "next/image";
import Link from "next/link";

interface SectionWithImageProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

function SectionWithImage({ title, description, imageSrc, imageAlt, reverse }: SectionWithImageProps) {
  return (
    <div
      className={`flex flex-col ${
        reverse
          ? " md:flex-row-reverse"
          : "flex-col md:flex-row"
      }  md:px-12 p-3 items-center`}
    >
      <div className="flex-1 md:p-12 z-10 rounded-e-3xl">
        <h1 className="text-lg mt-4 md:text-3xl mb-4 font-semibold">{title}</h1>
        <div>
          <p className="text-lg">{description}</p>
        </div>
      </div>
      <div className="flex-1 rounded-2xl  -ml-1 transform transition duration-500 ease-in-out hover:scale-110 hover:z-20">
        <Image
          alt={imageAlt}
          src={imageSrc}
          width={300}
          height={300}
          className=" m-auto"
        />
      </div>
    </div>
  );
}



export default function Mission() {

    return (
      <div className="">
        <SectionWithImage
          title="4K Bots"
          description="Is the division of 4K Labs, focusing on robotics and Artificial Intelligence. In this focus area members of 4K Labs work on projects such as; controlling robots for playing football, programming robots to complete autonomous tasks, and Autonomous cars."
          imageSrc="/images/4klabs.png"
          imageAlt="4klabs"
        />
        <SectionWithImage
          title="4K Things"
          description="In this age of technology, embedded systems are everywhere in our daily life starting from smart watches to the smart cars we drive. 4K Labs is interested in researching and developing solutions to existing problems that seek hardware solutions. 4K Things is a specialization of 4K Labs that focuses on embedded systems, IoT, and Tiny Machine Learning. Some of the projects done in this specialization are Smart mirrors, home automation, smart power meter and hardware-based games."
          imageSrc="/images/4klabs.png"
          imageAlt="4klabs"
          reverse
        />

        <SectionWithImage
          title="4K Dev"
          description="4K Dev is a specialization of 4K Labs that focuses on developing software solutions to existing problems that have been identified. The teams in 4K dev are the contact point when there is interest in bringing a hardware solution to the cloud. 4K Dev specialization was able to develop software and websites such as the 4K Labs website, class scheduling app, and agile working platform for the team."
          imageSrc="/images/4klabs.png"
          imageAlt="4klabs"
        />

        <div className="text-center m-20">
          <Link href="/contactus">
            <button
              onClick={() => (window.location.href = "/contactus")}
              className="bg-orange-400 p-3 font-semibold px-10 md:px-20 rounded-full transform hover:scale-110 duration-300"
            >
              Contact us
            </button>
          </Link>
        </div>
      </div>
    );
}
