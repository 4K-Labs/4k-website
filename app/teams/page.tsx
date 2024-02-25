"use client";
import React, { useState } from "react";
import TeamMemberCard from "../../components/Teams/teammember";
import { TeamMember } from "../types/types";
import { teamData } from "../data/teamdata";
import { DefaultPagination } from "../../components/pagination";

const Teams = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter team members based on search query
  const filteredMembers = teamData.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

 
  const itemsPerPage: number = 8;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const indexOfLastMember: number = currentPage * itemsPerPage;
  const indexOfFirstMember: number = indexOfLastMember - itemsPerPage;
  const currentMembers: TeamMember[] = filteredMembers.slice(
    indexOfFirstMember,
    indexOfLastMember
  );
  const totalPages: number = Math.ceil(filteredMembers.length / itemsPerPage);

  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };
  

  const teamMembers = currentMembers.filter(
    (member) => member.type === "member"
  );
  
  const alumniMembers = currentMembers.filter((member) => member.type === "alumni");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset pagination when search query changes
  };

  
  return (
    <div className="bg-secondary py-40">
      <div className=" m-auto w-4/5 text-center pt-16">
        <h1 className="font-medium leading-10 text-4xl font-custom">
          OUR TEAM
        </h1>
        <p className="text-gray-500 px-5 pt-5 text-justify m-auto">
        The team of 4K Labs are from a wide variety of disciplines and talent, with the aim to create an Interdisciplinary research environment. These have helped us complete projects in a defined manner. Our team is a combination of Electrical engineers, software engineers, Mechanical engineers, Artists, Graphics designers, video editors, social media enthusiasts and product designers. 4K Labs-team members are really humble and fun. 
        </p>

        <div className = "flex justify-center items-end pt-10">
          <form className="relative w-96">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                value={searchQuery}
                onChange={handleSearchChange}
                required
              />
              
            </div>
          </form>
        </div>

        <div className="pt-10">
          <h1 className="font-medium leading-10 text-4xl font-custom">
            Alumni Members
          </h1>
          <div className="flex-grow w-full justify-between flex-wrap flex flex-col  md:flex-row items-center md:flex-wrap gap-6 md:gap-5 mt-5 pb-20">
            {alumniMembers.map((member: TeamMember, index: number) => (
              <TeamMemberCard key={index} memberData={member} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-medium leading-10 text-4xl font-custom">
            Team Members
          </h1>
          <div className=" flex-grow w-full justify-start flex-wrap flex flex-col md:flex md:flex-row items-center md:flex-wrap gap-6 md:gap-5 mt-10 pb-20">
            {teamMembers.map((member: TeamMember, index: number) => (
              <TeamMemberCard key={index} memberData={member} />
            ))}
          </div>

          <div className="flex justify-center items-center">
            <DefaultPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
