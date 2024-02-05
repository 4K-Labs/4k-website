// TeamMemberCard.tsx
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { TeamMember } from "../../app/types/types";

interface TeamMemberCardProps {
  memberData: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ memberData }) => {
  const { name, position, description, image, socialLinks } = memberData;

  return (
    <div className="card w-60  bg-white-500  max-w-xs   border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform hover:scale-105">
      <div className="flex flex-col items-start pb-10">
        <Image
          src={image}
          width={150}
          height={150}
          className="w-full h-48 mb-3 mt-4 border-b-2 p-2"
          alt={`${name} image`}
        />
        <h5 className="mb-1 pl-5 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-sm pl-5 text-gray-500 dark:text-gray-400">
          {position}
        </span>
        <span className="text-sm pl-5 text-start text-gray-500 dark:text-gray-400">
          {description}
        </span>
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
