import { TeamMember } from "../types/types";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import people from '../../public/images/people.avif'

export const teamData: TeamMember[] = [
  {
    name: "Bonnie Green",
    position: "Software Engineer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quidem!",
    image: people,
    socialLinks: [
      { url: "your-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
      { url: "your-twitter-url", icon: faTwitter, iconClass: "w-6 h-6 text-blue-400 dark:text-blue-300" },
      { url: "your-instagram-url", icon: faInstagram, iconClass: "w-6 h-6 text-pink-600 dark:text-pink-400" },
      { url: "your-linkedin-url", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  },
  {
    name: "John Doe",
    position: "Frontend Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dolor et justo eleifend.",
    image: people,
    socialLinks: [
      { url: "john-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
      { url: "john-twitter-url", icon: faTwitter, iconClass: "w-6 h-6 text-blue-400 dark:text-blue-300" },
      { url: "john-instagram-url", icon: faInstagram, iconClass: "w-6 h-6 text-pink-600 dark:text-pink-400" },
      { url: "john-linkedin-url", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  },
  {
    name: "Alice Smith",
    position: "Backend Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dolor et justo eleifend.",
    image: people,
    socialLinks: [
      { url: "alice-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
      { url: "alice-twitter-url", icon: faTwitter, iconClass: "w-6 h-6 text-blue-400 dark:text-blue-300" },
      { url: "alice-instagram-url", icon: faInstagram, iconClass: "w-6 h-6 text-pink-600 dark:text-pink-400" },
      { url: "alice-linkedin-url", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  },
  {
    name: "David Brown",
    position: "UI/UX Designer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dolor et justo eleifend.",
    image: people,
    socialLinks: [
      { url: "david-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
      { url: "david-twitter-url", icon: faTwitter, iconClass: "w-6 h-6 text-blue-400 dark:text-blue-300" },
      { url: "david-instagram-url", icon: faInstagram, iconClass: "w-6 h-6 text-pink-600 dark:text-pink-400" },
      { url: "david-linkedin-url", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  },
  {
    name: "Sarah Johnson",
    position: "Marketing Manager",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dolor et justo eleifend.",
    image: people,
    socialLinks: [
      { url: "sarah-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
      { url: "sarah-twitter-url", icon: faTwitter, iconClass: "w-6 h-6 text-blue-400 dark:text-blue-300" },
      { url: "sarah-instagram-url", icon: faInstagram, iconClass: "w-6 h-6 text-pink-600 dark:text-pink-400" },
      { url: "sarah-linkedin-url", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  },
  {
    name: "Michael Wilson",
    position: "Product Manager",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dolor et justo eleifend.",
    image: people,
    socialLinks: [
      { url: "michael-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
      { url: "michael-twitter-url", icon: faTwitter, iconClass: "w-6 h-6 text-blue-400 dark:text-blue-300" },
      { url: "michael-instagram-url", icon: faInstagram, iconClass: "w-6 h-6 text-pink-600 dark:text-pink-400" },
      { url: "michael-linkedin-url", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  },
  {
    name: "Emma White",
    position: "Graphic Designer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dolor et justo eleifend.",
    image: people,
    socialLinks: [
      { url: "emma-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
      { url: "emma-twitter-url", icon: faTwitter, iconClass: "w-6 h-6 text-blue-400 dark:text-blue-300" },
      { url: "emma-instagram-url", icon: faInstagram, iconClass: "w-6 h-6 text-pink-600 dark:text-pink-400" },
      { url: "emma-linkedin-url", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  }
];
