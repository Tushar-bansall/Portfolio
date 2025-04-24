import {
  cpp,
  github,
  bootstrap,
  vitejs,
  vercel,
  sql,
  socketio,
  bluestock,
  chinar,
  zidio,
  python,
  lottie,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  nextjs,
  expressjs,
  git,
  figma,
  docker,
  news,
  rideIT,
  chat,
  threejs,
} from "../assets";

export const navLinks = [
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Zidio Development",
    icon: zidio,
    iconBg: "#6043b1",
    date: "Dec 2024 - Feb 2025",
    points: [
      "Completed a Web Development Internship at Zidio Development, a fast-growing product-based startup focused on AI-driven learning and innovation.",

"Received hands-on training in the latest web development technologies and worked on real-world projects from ideation to deployment.",

"Collaborated with team members to design, develop, and test responsive and user-friendly web features using modern frameworks."
    ],
  },
  
  {
    title: "SDE Intern",
    company_name: "Bluestock Fintech",
    icon: bluestock,
    iconBg: "#ffffff",
    date: "Aug 2024 - Oct 2024",
    points: [
      "Developed and integrated scalable frontend and backend features for fintech applications using modern web technologies.",

"Collaborated with developers and product leads to design technical solutions aligned with business requirements.",
"Utilized Git for version control and contributed to clean, modular code through peer-reviewed pull requests.",

"Gained hands-on experience with debugging, API integration, and performance optimization in a production-level environment."],
  }
  
];



export { services, technologies, experiences };
