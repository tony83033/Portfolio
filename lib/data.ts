import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import HomeVistaImg from "@/public/HomeVista.jpg";
import ImageBoxImg from "@/public/ImageBox.jpg";
import BlueChatImg from "@/public/BlueChat.jpg";
import LittleLemonImg from "@/public/LittleLemon.jpg";
import PortfolioImg from "@/public/Portfolio.jpg";
import TicTacToeImg from "@/public/Tic-Tac-Toe.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Sardar patel Inter college",
    location: "Kanpur, UP",
    description:
      "I completed my 10 + 2 education from Sardar Patel Inter college",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  },
  {
    title: "Dr. A. P. J. Abdul Kalam Technical University, Lucknow",
    location: "Lucknow , UP",
    description:
      "Currently persuing my B.Tech in Computer Science Engineering at AKTU.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2024",
  }
] as const;

export const projectsData = [
  {
    title: "Ecommerce website",
    description:
      "Explore a fully functional Ecommerce website, a React, Next.js, and Node.js project built for learning and shopping convenience.",
    githubLink:"https://github.com/tony83033/Ecommerce-Website",
    liveLink:"https://github.com/tony83033/Ecommerce-Website",
    tags: ["React", "Node.js","Express.js", "MongoDB", "Tailwind CSS"],
    imageUrl: HomeVistaImg,
  },
  {
    title: "Cloud-Note",
    description:
      "Cloud-Note: Elevate your note-taking experience with React, REST API, and Node.js integration.",
    githubLink:"https://github.com/tony83033/Cloud-Note",
    liveLink:"https://github.com/tony83033/Cloud-Note",
    tags: ["React", "Javascript", "HTML", "CSS", "REST Api"],
    imageUrl: ImageBoxImg,
  },
  {
    title: "Covid-19 Tracker",
    description:
      "Stay informed with our live COVID-19 case tracking website, built using Django and Bootstrap for a user-friendly experience.",
    githubLink:"https://github.com/tony83033/Covid-19",
    liveLink:"https://github.com/tony83033/Covid-19",
    tags: ["Django", "javascript", "Bootstrap", "SQLlite", "Python"],
    imageUrl: BlueChatImg,
  },
  {
    title: "LittleLemon",
    description:
      "A Restaurant Table Booking System Demo, with form validation enhancing the overall user experience.",
    githubLink:"https://github.com/pranav4112/coursera_capstone_project",
    liveLink:"",
    tags: ["React", "Javascript", "HTML", "CSS", "Form validation"],
    imageUrl: LittleLemonImg,
  },
  {
    title: "Portfolio",
    description:
      "Crafted a comprehensive portfolio that effectively showcases a range of my projects and skills",
    githubLink:"https://github.com/pranav4112/Portfolio",
    liveLink:"https://www.pranavshastri.me",
    tags: ["Next.js", "React.js", "Typescript", "Tailwind", "Framer motion"],
    imageUrl: PortfolioImg,
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "an interactive and fun Tic-Tac-Toe game, offering an enjoyable gaming experience",
    githubLink:"https://github.com/pranav4112/Tic-Tac-Toe",
    liveLink:"https://play-tic-tac-toe.vercel.app",
    tags: ["HTML", "CSS", "Javascript", "DOM manipulation"],
    imageUrl: TicTacToeImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Next.js",
  "Git",
  "REST API",
  "AWS",
  "QraphQL",
  "TypeScript",
  "SQL",
  "Linux",
  "C++",
  "Java",
  "DSA",
  "OOPs",
  "Flask",
  "Django",
  "graphql",
  "Redux",
  "Framer Motion",
  "trpc",
  "grpc"
] as const;
