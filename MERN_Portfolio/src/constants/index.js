import {
  web,
  frontend,
  design,
  backend,
  fullStack,

  html,
  css,
  javascript,
  reactjs,
  formik,
  redux,
  mui,
  tailwind,
  scss,
  nodejs,
  expressjs,
  mongodb,
  mongoose,
  git,
  github,
 
  vscode,
  ChatGPT,
  chrome,
  mongodbCompass,
  postman,
  ubuntu,
  Impress,
  
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: fullStack,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Formik",
    icon: formik,
  },
  {
    name: "Matirial UI",
    icon: mui,
  },

  {
    name: "Scss",
    icon: scss,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "MongoDB",
    icon:mongodb,
  },
  {
    name: "Mongoose",
    icon: mongoose,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
 
  
];

const tools = [
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "ChatGPT",
    icon: ChatGPT,
  },
  {
    name: "Chrome",
    icon: chrome,
  },
  {
    name: "Impress",
    icon: Impress,
  },
  {
    name: "Mongodb Compass",
    icon: mongodbCompass,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Ubuntu",
    icon: ubuntu,
  },
];

const experiences = [
  {
    title: "Frontend Development",
    company_name: "Innovatrix, Innovatrix.ai, KnoewitAI",
    icon: frontend,
    iconBg: "#383E56",
    date: "Jun 2019 - Present",
    points: [
      "Advanced skills in React.js for building dynamic web applications.",
      "Expertise in Redux for efficient state management.",
      "Experience with Formik and Yup for seamless form handling and validation.",
      "Applied Flux architecture to enhance data flow and maintainability.",
      "Implemented advanced architectural patterns for scalable applications.",
      "These are just a few of the many libraries",
    ],
  },
  {
    title: "UI Designing",
    company_name: "Material UI, Framer motion, Tailwind CSS, SCSS",
    icon: design,
    iconBg: "white",
    date: "Sep 2022 - Present",
    points: [
      "Proficient in Material UI for creating modern and responsive user interfaces.",
      "Expertise in Framer Motion for crafting smooth and interactive animations.",
      "Skillful use of Tailwind CSS to streamline and enhance UI styling.",
      "Leveraged SCSS to seamlessly integrate Tailwind CSS utility classes, optimizing code and enabling custom class creation when required.",
      "Ability to create responsive layouts for diverse screen sizes and devices.",
      "Prioritizing user experience and usability in UI design projects.",
    ],
  },
  {
    title: "Backend Development",
    company_name: "Node js, Express js, Mongoose, S3",
    icon: backend,
    iconBg: "#383E56",
    date: "Dec 2022 - Present",
    points: [
      "Proficient in Node.js for building robust and scalable server-side applications.",
      "Strong command of Express.js for creating RESTful APIs and routing.",
      "Experience in using MongoDB and Mongoose, including the strategic use of indexing, for efficient data modeling, storage, and retrieval.",
      "Strategies for optimizing application performance and scalability.",
      "Integration of AWS S3 for secure and scalable file storage and retrieval",
      "Skillful use of Postman for API testing, validation, and documentation",
      "Familiarity with the Model-View-Controller (MVC) pattern for structured and maintainable code",
      "Application of Clean Architecture principles for modular and testable codebases",
      "Implementation of security measures, including authorization, and authentication mechanisms to protect data.",
      "Expertise in error handling, debugging, and performance optimization.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rajesh proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients success like Rajesh does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Manish optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Shop",
    description:
      "A web-based platform that allows users to search, and order products. admin can manage products, orders, reviews, and users. Providing a convenient and efficient solution for people who need the best online shopping experience.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Retux",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: web,
    alt: "E-Commerce",
    source_code_link: "",
    live_link: "",
  },
  {
    name: "Pro Connect Up",
    description:
      "A web application that enables users to find people with the same interest in their career, find a person for freelance work, search for job openings, and locate available jobs based on their current location.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:
      design,
    alt: "Pro Connect Up",

    source_code_link: "",
    live_link: "",
  },
  {
    name: "My Portfolio",
    description:
      "My portfolio features a collection of projects that reflect my commitment to delivering top-tier web solutions. I take pride in developing user-friendly and efficient applications.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image:
      web,
    alt: "Portfolio",
    source_code_link: "",
    live_link: "",
  },
  
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  tools,
};
