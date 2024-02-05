"use client";
import Image from "next/image";
import Link from "next/link";


function SectionWithImage({ title, description, imageSrc, imageAlt, reverse }) {
  return (
    <div
      className={`flex ${
        reverse ? "flex-col-reverse" : "flex-col"
      } md:flex-row md:px-12 p-3 items-center`}
    >
      <div className="flex-1 md:p-12 z-10 rounded-e-3xl">
        <h1 className="text-lg mt-4 md:text-4xl mb-4 font-semibold">{title}</h1>
        <div>
          <p className="text-sm">{description}</p>
        </div>
      </div>
      <div className="flex-1 rounded-2xl border-2 border-red-500 -ml-1 transform transition duration-500 ease-in-out hover:scale-110 hover:z-20">
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
        <div className="flex flex-col md:flex-row md:px-12 p-3 md:-mb-20 items-center">
          <div className="flex-1 rounded-2xl border-2 border-red-500 -ml-1 transform transition duration-500 ease-in-out hover:scale-110 hover:z-20">
            <Image
              alt={"4klabs"}
              src={"/images/4klabs.png"}
              width={300}
              height={400}
              className=" m-auto"
            />
          </div>
          <div className="flex-1 md:p-12 md:pb-20 z-10 rounded-e-3xl">
            <h1 className="text-lg mt-4 md:text-4xl mb-4 font-semibold">
              4K Bots
            </h1>
            <div>
              <p className="text-sm">
                Is the division of 4K Labs, focusing on robotics and Artificial
                Intelligence. In this focus area members of 4K Labs work on
                projects such as; controlling robots for playing football,
                programming robots to complete autonomous tasks, and Autonomous
                cars.
              </p>
            </div>
          </div>
        </div>
        <SectionWithImage
          title="4K Things"
          description="In this age of technology, embedded systems are everywhere in our daily life starting from smart watches to the smart cars we drive. 4K Labs is interested in researching and developing solutions to existing problems that seek hardware solutions. 4K Things is a specialization of 4K Labs that focuses on embedded systems, IoT, and Tiny Machine Learning. Some of the projects done in this specialization are Smart mirrors, home automation, smart power meter and hardware-based games."
          imageSrc="/images/4klabs.png"
          imageAlt="4klabs"
          reverse
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
