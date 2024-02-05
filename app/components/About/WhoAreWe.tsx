"use client"
import Image from "next/image";

export default function WhoAreWe() {
    return (
      <div className="flex flex-col-reverse md:flex-row  p-3">
        <div className="flex-1 bg-gray-100 p-6 md:p-12 z-10 rounded-e-3xl">
          <h1 className="text-lg md:text-4xl mb-4  font-semibold text-center">
            Who Are We
          </h1>
          <div>
            <p>
              4K Labs is a Research and development laboratory at Addis Ababa
              University (AAU) located in the College of Natural and
              Computational Science(CNCS), under the Computer Science
              department. where there are teams of curious innovators from
              different disciplines of study, working together in the focus area
              of AI, Robotics, embedded systems, tiny ML, and software
              development.
            </p>
          </div>
        </div>
        <div className="flex-1 -ml-4 transform transition duration-500 hover:scale-110 hover:z-20">
          <Image
            alt={"4klabs"}
            src={"/images/gathering.jpg"}
            width={600}
            height={500}
            className="rounded-2xl"
          />
        </div>
      </div>
    );
}