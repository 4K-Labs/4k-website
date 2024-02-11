"use client";

import Image from "next/image";

interface AboutCardProps {
  imageSrc: string;
  blackTitle: string;
  orangeTitle: string;
  description: string;
  row?: string;
}

const AboutCard: React.FC<AboutCardProps> = ({
  imageSrc,
  blackTitle,
  orangeTitle,
  description,
  row,
}) => (
  <div
    className={`mt-8 bg-gray-200 rounded-md flex flex-wrap items-center justify-between ${row}`}
  >
    <div className="flex w-full items-center justify-around lg:w-1/2">
      <Image
        alt="Feature illustration"
        className="max-w-md"
        src={imageSrc}
        width={500}
        height={450}
      />
    </div>
    <div className="mt-8 w-full lg:mt-0 lg:w-1/2 px-4  border-l-2 border-l-primary">
      <h3 className="mb-2 inline-block text-4xl font-bold  text-primary  font-heading">
        <span className="border-b-4 border-primary  text-gray-700 ">
          {blackTitle}
        </span>{" "}
        {orangeTitle}
      </h3>
      <p className="mt-4 text-gray-800 text-lg text-justify">
        {description}
      </p>
    </div>
  </div>
);

export default AboutCard;