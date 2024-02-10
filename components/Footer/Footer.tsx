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
      name: "Team members",
      Link: "/teams",
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
<footer className="bg-primary text-white-300 py-12">
  <div className="container mx-auto px-4 md:px-6 text-white">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      <div className="md:col-span-2">
        <h1 className="text-xl font-semibold mb-4">4K Labs</h1>
        <p>
          4K Labs is R & D laboratory in Addis Ababa University located in the
          College of Natural and Computational Science(CNCS) under the
          computer science department. Focusing in the area of AI, Robotics,
          and embedded systems
        </p>
      </div>
      <div>
        <h1 className="text-xl font-semibold mb-4">Quick Links</h1>
        <nav className="space-y-2 flex flex-col">
          {QuickLinks.map((link) => (
            <Link
              key={link.name}
              href={link.Link}
              className="text-white hover:text-black whitespace-nowrap hover:underline transition-transform duration-500"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <div>
        <h1 className="text-xl font-semibold mb-4">Contact</h1>
        {Contact?.map((address) => (
          <div key={address.name} className="flex flex-row m-2">
            {address.icon}
            <p className="whitespace-nowrap">{address.name}</p>
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-xl font-semibold mb-4">Follow Us</h1>
        <div className="flex gap-3 m-3 flex-wrap">
          {SocialMedia.map((icon) => (
            <Link
              key={icon.address}
              className="hover:scale-125 shadow-lg transition-transform duration-500"
              href={icon.address}
            >
              {icon.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}
