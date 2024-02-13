import { TeamMember } from "../types/types";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import people from '../../public/images/4klogo.jpg'
import hopealemayehu from '../../public/images/teams/hopealemayehu.jpg'
import meiraf from '../../public/images/teams/mieraf.jpg'
import dagmawi from '../../public/images/teams/dagmawimuluwerk.jpg'
import emran from '../../public/images/teams/emran.jpg'
import abenezer from '../../public/images/teams/abenezerkebede.jpg'
import hayat from '../../public/images/teams/hayatali.jpg'
import kidusweg from '../../public/images/teams/kiduswegayehu.jpg'
import kirusentayehu from '../../public/images/teams/kirubelsintayehu.jpg'
import nati from '../../public/images/teams/natinael.jpg'
import robera from '../../public/images/teams/roberaworkenh.jpg'
import sisay from '../../public/images/teams/sisaykasahun.jpg'
import surafelwond from '../../public/images/teams/surafelwondemagenge.jpg'
import surafelsentayehu from '../../public/images/teams/surafelsentayehu.jpg'
import tamiru from '../../public/images/teams/tamirualemnew.jpg'
import lidya from '../../public/images/teams/lidiyaadmasu.jpg'
import zelalem from '../../public/images/teams/zelalem.jpg'
import lidetu from '../../public/images/teams/lidetu.jpg'
export const teamData: TeamMember[] = [
  {
    name: "Lidetu Tekuma",
    position: "Graphic Designer",
    description: "I am a 4K Labs alumni. I worked as a full stack developer\
    My name is Robera Workneh. Currently,  I am working as a full-stack developer at a software company. During my membership in  4K Labs, I worked as a full-stack developer. I participated in creating a smart mirror that displays important events and information about the lab. I also took part in making a website for scheduling university classes.",
    image: lidetu,
    type: "alumni",
    socialLinks: [
      { url: "emma-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
      
      { url: "https://www.linkedin.com/in/roberawork/", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  },
  {
    name: "Kirubel Sentayehu",
    position: "Graphic Designer",
    description: "I am a 4K Labs alumni. I worked as a software engineer\
    Hello there! I am a graduate of computer science. I have a profound interest in AI technologies, particularly reinforcement learning and generative AI. Proficient in Python, Node.js, Next.js, TypeScript, and React.js.",
    image: kirusentayehu,
    type: "alumni",
    socialLinks: [
      { url: "emma-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
      
      { url: "https://www.linkedin.com/in/kirubel-sentayehu-2ab782170/", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  },
  {
    name: "Robera Workneh",
    position: "Graphic Designer",
    description: "I am a 4K Labs alumni. I worked as a full stack developer\
    My name is Robera Workneh. Currently,  I am working as a full-stack developer at a software company. During my membership in  4K Labs, I worked as a full-stack developer. I participated in creating a smart mirror that displays important events and information about the lab. I also took part in making a website for scheduling university classes.",
    image: robera,
    type: "alumni",
    socialLinks: [
      { url: "emma-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
      
      { url: "https://www.linkedin.com/in/roberawork/", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  },
  {
    name: "Dagmawi Muluwork",
    position: "Graphic Designer",
    description: "I am a 4K Labs alumni. I worked as a software engineer\
    I am a Computer Science graduate from Addis Ababa University with an interest in robotics and artificial intelligence.",
    image: dagmawi,
    type: "alumni",
    socialLinks: [
      { url: "emma-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
     
      { url: "https://www.linkedin.com/in/dagmawi-muluwork-55a764227", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  },
  {
    name: "Hope Alemayehu",
    position: "Software Engineer",
    description: "I am an active member of 4K Labs working as a designer and software engineer\
    Currently: I'm designing and making illustrations for 4KLabs upcoming book\
    ",
    image: hopealemayehu,
    type: "member",
    socialLinks: [
      { url: "your-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
      
      { url: "https://www.linkedin.com/in/hope-alemayehu-4ba3b0190/", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  },
  {
    name: "Emran Kamil",
    position: "Frontend Developer",
    description: "I am an active member of 4K Labs working as a full stack developer.\
    Seasoned MERN stack developer with a robust foundation in data structures and algorithms, utilizing a deep understanding to optimize performance and efficiently solve complex problems 🚀. Proficient in Python with a strong grasp of JavaScript and Java. my role at 4k-Labs involves utilizing the MERN stack, Next.js, Nest.js, Tailwind CSS, Django, PostgreSQL and other technologies to address community challenges and construct robust web applications. My passion lies in creating innovative, user-friendly, and efficient websites 💻✨\
    ",
    image: emran,
    type: "member",
    socialLinks: [
      { url: "john-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
     
      { url: "https://www.linkedin.com/in/emran-husen", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  },
  {
    name: "Fikreselassie Solomon",
    position: "Backend Developer",
    description: "I am an active member of 4K Labs working as an embedded systems engineer ",
    image: people,
    type: "member",
    socialLinks: [
      { url: "alice-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
      
      { url: "https://www.linkedin.com/in/fekreselassie-solomon-880ab2226/", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  },
  {
    name: "Lidya Admasu",
    position: "UI/UX Designer",
    description: "I am an active member of 4K Labs working as social media content creator\
    I am a computer science student at Addis Ababa University. I am currently involved in creating social media content for 4k Labs social media pages. Additionally, I am learning Adobe Photoshop to design posts for 4k Lab.\
    ",
    image: lidya,
    type: "member",
    socialLinks: [
      { url: "david-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
      
      { url: "https://et.linkedin.com/in/people-admasu-8b3048299", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  },
  {
    name: "Surafel Wondmagegn",
    position: "Marketing Manager",
    description: "I am an active member of 4K Labs working as an embedded systems engineer\
    My role involves designing and developing hardware solutions for various projects. I also assist in testing and troubleshooting hardware components. Additionally, I provide technical support  to team members . Overall, my contributions to 4K Labs have helped to ensure successful completion of  hardware projects.\
    ",
    image: surafelwond,
    type: "member",
    socialLinks: [
      { url: "sarah-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
      
      { url: "sarah-linkedin-url", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  },
  {
    name: "Tamiru Alemnew",
    position: "Product Manager",
    description: "I am an active member of 4K Labs working as a full stack developer.\
    I am a Developer with a strong skill set in both front-end and back-end technologies. At 4k-Labs, I have played a pivotal role in crafting and developing the 4k website. Currently, my focus is on implementing an innovative class scheduling algorithm that aims to address and resolve challenges in complicated scheduling .",
    image: tamiru,
    type: "member",
    socialLinks: [
      { url: "michael-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
      
      { url: "mhttps://www.linkedin.com/in/tamiru-alemnew/", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  },
  {
    name: "Hayat Ali",
    position: "Graphic Designer",
    description: "I am an active member of 4K Labs working as social media content creator\
    I am a pre-engineering student at Addis Ababa University who is energetic and curious to learn new things. Hayat is an art enthusiast and loves writing motivational speeches . Hayat is a social media content creator at 4k lab who aims to bring positive impact and inspiration to tech loving youth. I use our social media platforms to share knowledge ,information ,and tech ideas .\
    ",
    image: hayat,
    type: "member",
    socialLinks: [
      { url: "emma-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
      
      { url: "emma-linkedin-url", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  },
  {
    name: "Kidus Wegayehu",
    position: "Graphic Designer",
    description: "I am an active member of 4K Labs working as an embedded systems engineer\
    I specialize in hardware solutions. With expertise in circuitry, firmware software, and thorough testing, I've led projects like Wire Buzz Game, hardware-based Tic Tac Toe game, and several Arduino-based innovations. I guide colleagues, leveraging my experience to craft hardware solutions that seamlessly integrate with software for innovative outcomes.\
    ",
    image: kidusweg,
    type: "member",
    socialLinks: [
      { url: "emma-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
      
      { url: "emma-linkedin-url", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  },
  
  
  {
    name: "Surafel Sentayehu",
    position: "Graphic Designer",
    description: "I am a 4K Labs alumni. I worked as a software engineer\
    My name is Surafel Sentayehu Tadesse and I am a software engineer who enjoys programming and problem-solving. I hold a B.Sc. degree in Computer Science from Addis Ababa University. I have gained experience in web development, machine learning, and autonomous vehicle development through my internships and projects. I was a Software developer and ML engineer intern at 4k Labs. There, I was involved in an autonomous car project where I worked on lane detection algorithm using Python and OpenCV. I also assisted in a python programming training organized by Orange Digital Center Ethiopia and 4K Labs.",
    image: surafelsentayehu,
    type: "alumni",
    socialLinks: [
      { url: "emma-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
      
      { url: "https://www.linkedin.com/in/surafel-sentayehu-590764227/", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  },
  {
    name: "Sisay Kassahun",
    position: "Graphic Designer",
    description: "I am a 4K Labs alumni. I worked as a software engineer",
    image: sisay,
    type: "alumni",
    socialLinks: [
      { url: "emma-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
      
      { url: "https://www.linkedin.com/in/sisay-mitiku-80975413b", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  },
  {
    name: "Abenezer Kebede",
    position: "Graphic Designer",
    description: "I am a 4K Labs alumni. I worked as a software engineer\
    I enjoy solving problems with computers. I like making programs that do cool things and learning new stuff to make them even better. I'm always curious and trying to improve. During my time in 4K Labs I was involved in developing a class scheduling application that improves scheduling efficiency.",
    image: abenezer,
    type: "alumni",
    socialLinks: [
      { url: "emma-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
      
      { url: "https://www.linkedin.com/in/abenezer-kebede/", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  },
  {
    name: "Nathnael Tesfaye",
    position: "Graphic Designer",
    description: "I am a 4K Labs alumni. I worked as a software engineer\
    I was a developer and research assistant at 4kLabs, specializing in robotics and AI. As part of the robot soccer team, I've worked on Computer Vision, localization, and communication tasks through ROS and OpenCV. In the realm of autonomous vehicles, I've focused on lane following, contributing to the development of algorithms for seamless and safe navigation through various ML based image recognition techniques and path planning algorithms. I've also worked on projects that involved web and app development.",
    image: nati,
    type: "alumni",
    socialLinks: [
      { url: "emma-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
    
      { url: "Https://linkedin.com/in/natminyel", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  },
  {
    name: "Mieraf",
    position: "Graphic Designer",
    description: "I am a 4K Labs alumni. I worked as a full stack developer\
    My name is Robera Workneh. Currently,  I am working as a full-stack developer at a software company. During my membership in  4K Labs, I worked as a full-stack developer. I participated in creating a smart mirror that displays important events and information about the lab. I also took part in making a website for scheduling university classes.",
    image: meiraf,
    type: "member",
    socialLinks: [
      { url: "emma-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
      
      { url: "https://www.linkedin.com/in/roberawork/", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  },
  {
    name: "Zelalem Yetsedaw",
    position: "Software Engineer",
    description: "",
    image: zelalem,
    type: "member",
    socialLinks: [
      { url: "emma-facebook-url", icon: faFacebook, iconClass: "w-6 h-6 text-blue-600 dark:text-blue-400" },
      
      { url: "https://www.linkedin.com/in/roberawork/", icon: faLinkedin, iconClass: "w-6 h-6 text-blue-800 dark:text-blue-600" },
    ],
  }
];
