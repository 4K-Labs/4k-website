"use client";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import Link from "next/link";

export default function Home() {
  const QuickLinks = [
    {
      name: "about",
      Link: "/about",
    },
    {
      name: "projects",
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
  ];

  const Contact = [
    {
      icon: <LocationOnOutlinedIcon />,
      name: "AAU . 4 kilo",
    },
    {
      icon: <MailOutlineOutlinedIcon />,
      name: "4klabs@aau.edu.et",
    },
    {
      icon: <PhoneIcon />,
      name: "0909090909",
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
  ];
  return (
    <div className="bg-footer text-white-300  flex w-full h-[418px] p-24 justify-around">
      <div className="flex flex-col text-white ">
        <h1 className="text-xl font-semibold mb-4">4K Labs</h1>
        <p>Some thing about 4K labs can be written here</p>
      </div>

      <div className="flex flex-col text-white">
        <h1 className="text-xl font-semibold mb-4">Quick Links</h1>
        <div className="flex flex-col">
          {QuickLinks.map((link) => (
            <a href={link.Link} className="text-white m-1 hover:underline">
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col text-white">
        <h1 className="text-xl font-semibold mb-4">Contact</h1>
        <div className="flex flex-col">
          {Contact?.map((address) => (
            <div className="flex flex-row m-2">
              {address.icon}
              <p>{address.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col text-white">
        <h1 className="text-xl font-semibold mb-4  ">Follow Us</h1>
        <div className="flex gap-3 flex-row m-3 ">
          {SocialMedia.map((icon) => (
            <Link href={icon.address}>{icon.icon}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
