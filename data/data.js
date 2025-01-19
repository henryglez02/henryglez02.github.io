import { title } from "process";

const experience = [
  {
    position: "Accessibility Tester",
    company: "A11ySolutions",
    tasks: [
      "Conducted accessibility audits on various websites, identifying and reporting issues according to WCAG guidelines.",
      "Implemented solutions to improve accessibility, including correcting HTML structure and using ARIA patterns.",
      "Collaborated with the development team to ensure compliance with accessibility standards and best practices.",
    ],
  },
  {
    position: "Frontend Developer",
    company: "Inmersoft",
    tasks: [
      "Developed a Latin American music streaming platform using React.",
      "Implemented reusable components for music playback, navigation, and playlist management.",
      "Optimized performance for smooth playback and collaborated with the backend team for RESTful API integration.",
      "Collaborated with designers and product managers to define project requirements and design user interfaces.",
    ],
  },
  {
    position: "Frontend Developer",
    company: "Liontude",
    tasks: [
      "Developed and maintained a software application using Flutter.",
      "Collaborated with product managers, designers, and backend developers to define project scope.",
      "Implemented REST APIs and integrated them with backend services.",
      "Conducted code reviews and implemented best practices for code quality and performance.",
    ],
  },
  {
    position: "QA Tester",
    company: "Recharge Phones",
    tasks: [
      "Developed rigorous tests for the website to guarantee its correct operation and a smooth user experience.",
      "Executed test cases that covered different phone recharge scenarios and payment situations.",
      "Identified and documented errors, performance issues, and functional deficiencies using issue tracking and management tools.",
    ],
  },
];

const projects = [
  {
    title: "Pet Shop Inventory",
    description:
      "Management system allowing users to track and manage their pets' inventory.",
    link: "https://github.com/henryglez02/pets_shop",
    techs: ["Python", "Django", "SQLite"],
  },
  {
    title: "El Taco Loco",
    description:
      "Virtual Store that allows you to browse and place custom orders.",
    link: "https://github.com/henryglez02/el-taco-loco-app",
    techs: ["Flutter", "Flask"],
  },
  {
    title: "NX Movie Catalog",
    description:
      "Online movie catalog that presents the most popular films today.",
    link: "https://github.com/henryglez02/nx-movies",
    techs: ["TypeScript", "Next.js", "Material UI"],
  },
  {
    title: "NotePad",
    description:
      "Notepad that provides the ability to create and access your notes easily.",
    link: "https://github.com/henryglez02/NotePad   ",
    techs: ["React", "Tailwind CSS"],
  },
];

const skills = [
  {
    name: "Javascript",
    alt: "Javascript logo",
    image: "/images/LogosJavascript.svg",
  },

  { name: "React", alt: "React logo", image: "/images/LogosReact.svg" },
  {
    name: "Next.js",
    alt: "Next.js logo",
    image: "/images/LogosNextjsIcon.svg",
  },
  { name: "Node.js", alt: "Node logo", image: "/images/LogosNodejsIcon.svg" },
  {
    name: "Strapi",
    alt: "Strapi logo",
    image: "/images/strapi_logo.webp",
  },
  { name: "Python", alt: "Python logo", image: "/images/LogosPython.svg" },
  { name: "Django", alt: "Django logo", image: "/images/LogosDjangoIcon.svg" },
  {
    name: "PostgreSQL",
    alt: "PostgreSQL logo",
    image: "/images/LogosPostgresql.svg",
  },
  { name: "Flutter", alt: "Flutter logo", image: "/images/LogosFlutter.svg" },
  {
    name: "Playwright",
    alt: "Playwright logo",
    image: "/images/playwright_logo.svg",
  },
];

export { experience, projects, skills };
