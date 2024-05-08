// TeamMemberCard.tsx
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TeamMember } from "../../app/types/types";

interface TeamMemberCardProps {
  memberData: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ memberData }) => {
  const { name, position, description, image, socialLinks } = memberData;

  return (
    <div className="card w-60 rounded-lg bg-white-500  max-w-xs   border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform hover:scale-105">
      <div className="flex flex-col items-start pb-10">
        <Image
          src={image}
          width={150}
          height={150}
          className="w-full h-48 mb-3 mt-4 border-b-2 p-2 rounded-3xl"
          alt={`${name} image`}
        />
        <h5 className="mb-1 pl-5 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <h6 className=" pl-5 text-base text-start text-gray-800 dark:text-gray-400">
          {position}
        </h6>
        <div className = "h-40 text-start p-5 pt-3 scrollbar">
          <div className="text-justify">
        <span className=" text-xs text-gray-500 dark:text-gray-400">
          {description}
        </span>
        </div>
        </div>
        <div className="pl-5 mt-5 flex row gap-4">
          {socialLinks.map((socialLink, index) => (
            <a key={index} href={socialLink.url}>
              <FontAwesomeIcon
                icon={socialLink.icon}
                className={socialLink.iconClass}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
