'use client'

import { useState } from "react";
import {
    Popover,
    PopoverHandler,
    PopoverContent,
  } from "@material-tailwind/react";

import { testimonyData } from "@/app/types/types";
import PopContent from "./PopContent";

interface HoverComponentProps {
  onHoverChange: (isHovered: boolean) => void;
}

interface PopOverInterface extends HoverComponentProps, testimonyData {}

const PopOver: React.FC<PopOverInterface> = ({ onHoverChange , name, image, content,title}) => {

const [openPopover, setOpenPopover] = useState(false);
 
const triggers = {
  onMouseEnter: () => {
    setOpenPopover(true)
    onHoverChange(false)
  },
  onMouseLeave: () => {
    setOpenPopover(false)
    onHoverChange(true)},
};

  return (
  <div>
    <Popover open={openPopover} handler={setOpenPopover}>
      <PopoverHandler> 
        {/* if we want to make the popover occur on hover we will add {...triggers} as a prop to the PopoverHandler component*/}
        <button className="text-blue-900" >...more</button>
      </PopoverHandler>
      <PopoverContent {...triggers} className="z-[999] w-full md:w-3/4 mx-auto bg-transparent shadow-none border-none p-2"> 
        <PopContent name={name} image={image} content={content} title={title}/>
      </PopoverContent>
    </Popover>
  </div>

  
  );
}

export default PopOver;

// <div className="p-4">
//           <Typography color="blue-gray" className="mb-2 text-lg font-bold">
//             Material Tailwind
//           </Typography>
//           <Typography
//             variant="small"
//             color="gray"
//             className="mb-14 font-normal text-blue-gray-500"
//           >
//             Material Tailwind is an easy to use components library for Tailwind
//             CSS and Material Design. It features multiple React and HTML
//             components, all written with Tailwind CSS classes and Material
//             Design guidelines.
//           </Typography>
//           <a href="#" className="-ml-3 inline-block">
//             <Button
//               size="sm"
//               variant="text"
//               className="flex items-center gap-x-2 capitalize"
//             >
//               Read More
//               <svg
//                 width="7"
//                 height="12"
//                 viewBox="0 0 7 12"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M1.25 1.91669L5.33333 6.00002L1.25 10.0834"
//                   stroke="#212121"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//               </svg>
//             </Button>
//           </a>
//         </div>
  
//         <div className="min-h-full !w-full p-3">
//           <img
//             src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
//             alt="image"
//             className="h-full w-full rounded-lg object-cover"
//           />
//         </div>