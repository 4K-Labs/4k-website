"use client";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import Link from "next/link";

export default function Home() {
  const QuickLinks = [
    {
      name: "About",
      Link: "/about",
    },
    {
      name: "Projects",
      Link: "/projects",
    },
    {
      name: "Trainings",
      Link: "/trainings",
    },
    {
      name: "Team members",
      Link: "/team",
    },
    {
      name:"Events",
      Link:"/events"
    }
  ];

  const Contact = [
    {
      icon: <LocationOnOutlinedIcon />,
      name: "AAU, CNCS Campus, 4 Kilo",
    },
    {
      icon: <MailOutlineOutlinedIcon />,
      name: "4klabs@aau.edu.et",
    },
    {
      icon: <PhoneIcon />,
      name: " +251921307934",
    },
  ];
  const SocialMedia = [
    {
      icon: <FacebookOutlinedIcon />,
      address: "https://www.facebook.com/4klabs",
    },
    {
      icon: <LinkedInIcon />,
      address: "https://www.linkedin.com/company/4klabs",
    },
    {
      icon: <InstagramIcon />,
      address: "https://www.instagram.com/4klabs",
    },
    {
      icon: <TwitterIcon />,
      address: "https://www.twitter.com/4klabs",
    },
    {
      icon: <TelegramIcon />,
      address: "https://www.telegram.com/4klabs",
    },
    {
      icon: <WhatsAppIcon />,
      address:"https://www.whatsapp.com/4klabs"
    }
  ];
  return (
    <div className="bg-primary text-white-300 flex  w-full gap-15  p-24 justify-around md:gap-10">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col text-white ">
          <h1 className="text-xl font-semibold mb-4">4K Labs</h1>
          <p className="inline-block px-2">
            4K Labs is R & D laboratory in Addis Ababa University located in the
            College of Natural and Computational Science(CNCS) under the
            computer science department. Focusing in the area of AI, Robotics,
            and embedded systems
          </p>
        </div>
        <div className="flex flex-col text-white">
          <h1 className="text-xl font-semibold mb-4">Contact</h1>
          <div className="flex flex-col">
            {Contact?.map((address) => (
              <div className="flex flex-row m-2">
                {address.icon}
                <p className="whitespace-nowrap">{address.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col text-white justify-start">
          <h1 className="text-xl font-semibold mb-4 whitespace-nowrap">
            Quick Links
          </h1>
          <div className="flex flex-col ">
            {QuickLinks.map((link) => (
              <a
                href={link.Link}
                className="text-white m-1 hover:text-black whitespace-nowrap hover:underline  transition-transform duration-500 "
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col text-white">
          <h1 className="text-xl font-semibold mb-4  ">Follow Us</h1>
          <div className="flex gap-3 flex-row m-3 flex-wrap md:flex-nowrap">
            {SocialMedia.map((icon) => (
              <Link
                className="bg-white shadow-lg text-blue-500 hover:scale-125   transition-transform duration-500  rounded-full md:p-1"
                href={icon.address}
              >
                {icon.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
