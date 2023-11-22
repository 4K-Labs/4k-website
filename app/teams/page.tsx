'use client'
import React, { useState } from "react";
import TeamMemberCard from "../components/card";
import { TeamMember } from "../types/types";
import { teamData } from "../data/teamdata";
import { DefaultPagination } from "../components/pagination";

const Teams = () => {
  const itemsPerPage: number = 4; 
  const [currentPage, setCurrentPage] = useState<number>(1);

  const indexOfLastMember: number = currentPage * itemsPerPage;
  const indexOfFirstMember: number = indexOfLastMember - itemsPerPage;
  const currentMembers: TeamMember[] = teamData.slice(indexOfFirstMember, indexOfLastMember);
  const totalPages: number = Math.ceil(teamData.length / itemsPerPage);

  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };
    
   return (
     <div className="bg-secondary py-40">
      
       <div className=" m-auto w-4/5 text-center pt-16">
         <h1 className="font-medium leading-10 text-4xl font-custom">OUR TEAM</h1>
         <p className="text-gray-500 pt-5 text-center m-auto w-2/3">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
           vero iusto officiis deserunt sit ipsa neque illum ducimus! Ut, autem?
         </p>
        <div className=" flex-grow  justify-start flex-wrap flex flex-col md:flex md:flex-row items-center md:flex-wrap gap-6 md:gap-3 mt-10 pb-20">
            {currentMembers.map((member: TeamMember, index: number) => (
          <TeamMemberCard key={index} memberData={member} />
        ))}
            </div>


      <div className = 'flex justify-center items-center'>
        <DefaultPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}/>
      </div>

      
       </div>
       
       
     </div>
   );
 };
 
 export default Teams;
 