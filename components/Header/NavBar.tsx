"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../../public/images/4klogo.png";
import Image from "next/image";
import Button from "../button";
import Link from "next/link";

const NavBar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "EVENTS", link: "/events" },
    
    { name: "TEAMS", link: "/teams" },
    // { name: "INTERNSHIP", link: "/internship" },
    { name: "FAQ", link: "/faqs" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="bg-primary-bg  fixed top-0 left-0 w-full shadow-md z-50">
      <div className="w-3/4 mx-auto  flex  pr-9 md:pr-0 justify-between items-center font-sans ">
        <div className="cursor-pointer m-0 p-0 object-cover">
          <Image
            src={logo}
            width={90}
            height={90}
            alt="logo"
            className="m-0 transform scale-125 p-0"
          />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-12 top-6 cursor-pointer lg:hidden"
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} />
        </div>

        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:bg-primary-bg lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-20 md:pl-28 rounded- xl   transition-all duration-500 ease-in ${
            open ? " top-20" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-6 text-lg md:my-4 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-primary duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <Link href="/contactus">
          <Button className=" font-bold">Subscribe</Button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
