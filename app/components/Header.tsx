"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../../public/images/4klogo.png";
import Image from "next/image";
import Button from "./button";

const Header = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "EVENTS", link: "/events" },
    { name: "PROJECTS", link: "/projects" },
    { name: "TEAMS", link: "/teams" },
    // { name: "INTERNSHIP", link: "/internship" },
    { name: "FAQ", link: "/faqs" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="bg-primary fixed top-0 left-0 w-full shadow-sm z-50">
      <div className="w-3/4 mx-auto pt-5 flex  pr-9 md:pr-0 justify-between items-center font-sans ">
        <div className="cursor-pointer">
          <Image src={logo} width={80} height={60}  alt="logo"/>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-12 top-14 cursor-pointer lg:hidden"
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} />
        </div>

        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:bg-primary lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-20 md:pl-28 rounded- xl   transition-all duration-500 ease-in ${
            open ? "top-32 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-6 text-lg md:my-4 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-orange-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          
        </ul>
        <Button>Donate</Button>

        
      </div>
      
    </div>
  );
};

export default Header;
