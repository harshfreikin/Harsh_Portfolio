import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa"; 
import { TbBrandNextjs } from "react-icons/tb";
import { SiDart, SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaJava, FaAws, FaReact } from "react-icons/fa";
import { SiFlutter, SiFirebase, SiTailwindcss } from "react-icons/si";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "HARSH TIWARI",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate Software Developer and AWS Solution Architect with expertise in creating user-friendly applications and scalable cloud solutions. I bring innovative problem-solving skills to drive impactful projects and deliver exceptional results.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/user/personal-portfolio",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/user/task-management-tool",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/user/weather-app",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "https://github.com/user/blog-platform",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },
];

export const BIO = [
  "I’m Harsh Tiwari, a passionate and dedicated professional specializing in Flutter development and AWS solutions. With expertise in programming languages like Java, Dart, Python, C/C++, and JavaScript, I enjoy building efficient, user-friendly applications and scalable cloud infrastructure. My experience spans frameworks like Flutter, tools such as Git, Postman, and Android Studio, and databases like Firebase.",
  "Currently, I’m pursuing a BTech in Computer Science at Babu Banarasi Das Northern India Institute of Technology (graduating in 2025). My projects include ChitChat (a real-time chat app), Clima (a weather forecasting app), and a Travel UI Clone, showcasing my skills in app development and UI/UX design. I’ve also implemented cloud solutions like custom VPCs and serverless functions with AWS Lambda.",
  "In addition to advanced Flutter and AWS expertise, I’m expanding my knowledge of Tailwind CSS and React."
];


export const SKILLS = [
  {
    icon: <FaJava className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Java",
    experience: "5+ years",
  },
  {
    icon: <SiFlutter className="text-4xl text-white lg:text-5xl" />,
    name: "Flutter",
    experience: "1.5+ years",
    
  },
  {
    icon: <SiDart className="text-4xl text-white lg:text-5xl" />,
    name: "Dart",
    experience: "1.5+ years",
    
  },
  {
    icon: <SiFirebase className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Firebase",
    experience: "1.5+ year",
  },
  {
    icon: <FaAws className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Amazon Web Services",
    experience: "6+ months", 
  },
  {
    icon: <SiTailwindcss className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "Beginner",
    
  },
  {
    icon: <RiReactjsLine className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "React",
    experience: "Beginner",
  },
];

export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "Innovative Tech Solutions",
    duration: "July 2020 - Present",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "Frontend Engineer",
    company: "Digital Creations",
    duration: "February 2016 - June 2020",
    description:
      "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "Junior Web Developer",
    company: "Bright Future Technologies",
    duration: "August 2014 - January 2016",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Babu Banrasi Das Northern Indian Institute of Technology",
    duration: " 2021 - 2025",
    description:
      "Pursuing a Bachelor's degree in Computer Science with a focus on software development, cloud solutions, and mobile applications. Engaged in a variety of academic projects involving Flutter development, AWS solutions, and data structures and algorithms. Contributed to building real-world applications, including real-time chat apps and weather forecasting tools. Actively developing expertise in React, Tailwind CSS, and cloud infrastructure. Expected to graduate with strong technical and problem-solving skills."
  },
  {
    degree: "Intermediate (12th Grade)",
    institution: "New Public Inter College",
    duration: "2020 - 2021",
    description:
      "Completed coursework with a focus on Mathematics, Computer Science, and Physics. Gained foundational knowledge in programming."
  },
  {
    degree: "High School (Class 10)",
    institution: "New Public Inter College",
    duration: "2018 - 2019",
    description:
      "Focused on core subjects such as Mathematics, Science, and English, laying the groundwork for future studies in Computer Science."
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/harshfreikin/profilecard/?igsh=dW53bXhycmJpN3Vl",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/harshfreikin/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/harsh-tiwari-887992230/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
