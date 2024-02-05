'use client'
import React from "react";
import { Button } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export const DefaultPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {

  const pageNumbers: number[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const [active, setActive] = React.useState(1);
 
 
  const getItemProps = (index:number) =>
    ({
      onClick: () => setActive(index),
      className: `px-3 py-1 rounded-full cursor-pointer ${
        active === index ? "bg-black text-white" : "bg-white text-black"
      }`,
    } as any);
 
  const next = () => {
    if (active === totalPages) return;
    
    onPageChange(active + 1)
    setActive(active + 1);
    
  };
 
  const prev = () => {
    if (active === 1) return;
    
    onPageChange(active - 1)
    setActive(active - 1);
    
  };
 
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        
        {
          pageNumbers.map((num) => (
            <span key={num} {...getItemProps(num)} onClick={() => {setActive(num) 
            onPageChange(num)}} >
              {num}
            </span>
          ) )
        }
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === totalPages}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default DefaultPagination;

