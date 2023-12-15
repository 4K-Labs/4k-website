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
      id: 1,
      name: "about",
      Link: "/about",
    },
    {
      id: 2,
      name: "projects",
      Link: "/projects",
    },
    {
      id: 3,
      name: "Trainings",
      Link: "/trainings",
    },
    {
      id: 4,
      name: "Team members",
      Link: "/team",
    },
    {
      id: 5,
      name:"Events",
      Link:"/events"
    }
  ];

  const Contact = [
    {
      id: 1,
      icon: <LocationOnOutlinedIcon />,
      name: "AAU . 4 kilo",
    },
    {
      id: 2,
      icon: <MailOutlineOutlinedIcon />,
      name: "4klabs@aau.edu.et",
    },
    {
      id: 3,
      icon: <PhoneIcon />,
      name: "0909090909",
    },
  ];
  const SocialMedia = [
    {
      id: 1,
      icon: <FacebookOutlinedIcon />,
      address: "https://www.facebook.com/4klabs",
    },
    {
      id: 2,
      icon: <LinkedInIcon />,
      address: "https://www.linkedin.com/company/4klabs",
    },
    {
      id: 3,
      icon: <InstagramIcon />,
      address: "https://www.instagram.com/4klabs",
    },
    {
      id: 4,
      icon: <TwitterIcon />,
      address: "https://www.twitter.com/4klabs",
    },
    {
      id: 5,
      icon: <TelegramIcon />,
      address: "https://www.telegram.com/4klabs",
    },
  ];
  return (
    <div className="bg-footer text-white-300 flex  w-full gap-15  p-24 justify-around md:gap-10">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col text-white ">
          <h1 className="text-xl font-semibold mb-4">4K Labs</h1>
          <p className="inline-block px-2">
            Some thing about 4K labs can be written here Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Beatae excepturi accusantium
            Lorem ipsum
          </p>
          <p className="hidden md:inline-block px-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas nihil
            adipisci quia saepe odio numquam, ex quasi recusandae eum error
            harum ea et non, aut impedit ducimus fugit dolorum? Id.
          </p>
        </div>
        <div className="flex flex-col text-white">
          <h1 className="text-xl font-semibold mb-4">Contact</h1>
          <div className="flex flex-col">
            {Contact?.map((address) => (
              <div className="flex flex-row m-2" key={address.id}>
                {address.icon}
                <p>{address.name}</p>
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
          <div className="flex flex-col hover:">
            {QuickLinks.map((link) => (
              <a key={link.id} href={link.Link} className="text-white m-1 hover:text-black whitespace-nowrap hover:underline underline-white">
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col text-white">
          <h1 className="text-xl font-semibold mb-4  ">Follow Us</h1>
          <div className="flex gap-3 flex-row m-3 ">
            {SocialMedia.map((icon) => (
              <Link key={icon.id} className=" hover:scale-123 hover:bg-black hover:text-white rounded-full md:p-1" href={icon.address}>{icon.icon}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
