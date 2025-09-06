import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// Example experience data, replace with your actual resume details
export const EXPERIENCE = [
  {
    role: "Full-stack Developer & Prompt Engineer",
    company: "Asvix",
    period: "June 2025 – Present",
    description: [
      "Working on full-stack web applications, integrating backend APIs with modern frontend frameworks. Creator of MediBot, an AI-powered healthcare assistant, designed to simplify medical queries and improve patient engagement. Leveraging prompt engineering for AI-driven applications to enhance automation, intelligent workflows, and real-world problem-solving."
    ]
  },
  {
    role: "Freelance Developer",
    company: "WonderKids",
    period: "Oct 2024 – Nov 2024",
    description: [
      "Delivered freelance projects with a focus on user-friendly design and optimized performance using HTML, CSS, JS, PHP, and MySQL.",
      "Collaborated with clients to create interactive, scalable solutions."
    ]
  }
];

export const SKILL_DATA = [
  { skill_name: "HTML5", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS3", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "React.js", image: "react.png", width: 80, height: 80 },
  { skill_name: "Next.js", image: "next.png", width: 80, height: 80 },
  { skill_name: "Redux", image: "redux.png", width: 80, height: 80 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
  { skill_name: "PostgreSQL", image: "postgresql.png", width: 80, height: 80 },
  { skill_name: "MySQL", image: "mysql.png", width: 80, height: 80 },
  { skill_name: "Prisma", image: "prisma.png", width: 80, height: 80 },
  { skill_name: "Docker", image: "docker.png", width: 80, height: 80 },
  { skill_name: "Git", image: "github.png", width: 80, height: 80 },
  { skill_name: "Figma", image: "figma.png", width: 80, height: 80 },
  { skill_name: "Framer Motion", image: "framer.png", width: 80, height: 80 },
  { skill_name: "Stripe", image: "stripe.png", width: 80, height: 80 },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL = [
  { skill_name: "HTML5", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS3", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "React.js", image: "react.png", width: 80, height: 80 },
  { skill_name: "Next.js", image: "next.png", width: 80, height: 80 },
  { skill_name: "Redux", image: "redux.png", width: 80, height: 80 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
] as const;

export const BACKEND_SKILL = [
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
  { skill_name: "PostgreSQL", image: "postgresql.png", width: 80, height: 80 },
  { skill_name: "MySQL", image: "mysql.png", width: 80, height: 80 },
  { skill_name: "Prisma", image: "prisma.png", width: 80, height: 80 },
  { skill_name: "Docker", image: "docker.png", width: 80, height: 80 },
] as const;

export const FULLSTACK_SKILL = [
] as const;

export const OTHER_SKILL = [

] as const;

export const PROJECTS = [
  {
    title: "NueroHUB",
    description: "Neurodiversity refers to the natural variation in how people think, learn, and process information. It includes conditions like autism, ADHD, dyslexia, and more, recognizing them as differences rather than deficits. Embracing neurodiversity fosters inclusivity, enabling individuals to leverage their unique strengths.",
    image: "/projects/nuerohub.png",
    link: "https://nuerohub.vercel.app",
    codeLink: "https://github.com/Sujay149/nuerohub",
    technologies: ["React", "Tailwind", "Firebase", "TypeScript", "API"]
  },
  {
    title: "CraveFinder",
    description: "The Recipe Project is a user-friendly web application where anyone can find and learn new recipes with ease. It offers a vast collection of recipes from various cuisines, each with detailed instructions and ingredients. Users can explore dishes based on categories, ingredients, or dietary preferences.",
    image: "/projects/cravefinder.png",
    link: "https://crave-finder.vercel.app",
    codeLink: "https://github.com/Sujay149/crave-finder",
    technologies: ["TypeScript", "React", "Node", ""]
  },
  {
    title: "ReDestiny",
    description: "A smart and intuitive URL shortener that empowers users to redirect, transform, and manage their destination links effortlessly — featuring secure login, personalized dashboards, custom short domains, and real-time control over where your links lead.",
    image: "/projects/project-3.webp",
    link: "https://redestiny.vercel.app",
    codeLink: "https://github.com/Sujay149/redestiny",
    technologies: ["React.js", "Tailwind CSS", "Bootstrap", "Material UI", "MongoDB", "Node.js"]
  },
  {
    title: "Research & Startup Management System",
    description: "The Research & Startup Management System is a centralized platform designed to streamline the management of research, intellectual property rights (IPR), innovation projects, and startups in Gujarat. It enables efficient data handling, collaboration, and resource allocation for researchers, innovators, and entrepreneurs.",
    image: "/projects/sihgujarat.png",
    link: "https://innovation.vercel.app",
    codeLink: "https://github.com/Sujay149/innovation",
    technologies: ["React.js", "Tailwind CSS", "Bootstrap", "Material UI", "MongoDB", "Node.js"]
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [

      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Sujay149/",
      },

    ],
  },
  {
    title: "Social Media",
    data: [

      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/sujaybabu",
      },
    ],
  },
  {
    title: "About",
    data: [
   
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:Sujayss149@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;


