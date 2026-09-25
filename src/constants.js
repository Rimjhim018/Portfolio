// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';

// Experience Section Logo's
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import universityLogo from './assets/education_logo/university.svg';
import collegeLogo from './assets/education_logo/college.svg';
import schoolLogo from './assets/education_logo/school.svg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "Jan 2025 - Jan 2026",
    desc: "Contributed to responsive web applications and user-focused interfaces.",
    skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 1,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "Feb 2026 - Present",
      desc: "Building responsive interfaces and improving the user experience.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
export const education = [
  {
    id: 0,
    img: universityLogo,
    school: "Metropolitan University",
    date: "2024 - 2027",
    grade: "CGPA 3.82",
    desc: "I am currently studying Computer Science at Metropolitan University, where I am developing my knowledge in programming, web development, databases, and other areas of computing through academic projects and practical learning.",
    degree: "BSc in CSE (Computer Science and Engineering)",
  },
  {
    id: 1,
    img: collegeLogo,
    school: "Scholarshome College",
    date: "2020 - 2022",
    grade: "GPA 4.67",
    desc: "I completed my Higher Secondary Certificate education at Scholarshome College with a science background, strengthening my foundation in analytical thinking and core science subjects.",
    degree: "Higher Secondary Certificate (HSC) - Science",
  },
  {
    id: 2,
    img: schoolLogo,
    school: "Bangladesh Bank School",
    date: "Completed",
    grade: "GPA 4.61",
    desc: "I completed my secondary school education at Bangladesh Bank School with a science background. This stage built my interest in technology, problem-solving, and continuing my studies in computer science.",
    degree: "Secondary School Certificate (SSC) - Science",
  },
];
  
export const projects = [
  {
    id: 0,
    title: "Sugar Bliss",
    description:
      "Sugar Bliss is a modern and responsive ice cream website offering a delightful collection of ice cream flavors and treats.",
    icon: "🍦",
    coverClass: "from-pink-500 via-rose-400 to-amber-300",
    tags: ["HTML", "CSS", "JavaScript"],
    webapp: "https://rimjhim018.github.io/SugarBliss_Website/",
  },
  {
    id: 1,
    title: "Penguin Fashion",
    description:
      "Penguin Fashion is a modern clothing website offering stylish jackets, sweaters, and comfortable winter wear.",
    icon: "🧥",
    coverClass: "from-sky-600 via-blue-500 to-cyan-300",
    tags: ["HTML", "CSS"],
    webapp: "https://rimjhim018.github.io/penguin_fashion/",
  },
  {
    id: 2,
    title: "Goods Panda",
    description:
      "Goods Panda is a modern e-commerce website offering stylish shoes, bags, and everyday essentials.",
    icon: "🛍️",
    coverClass: "from-emerald-600 via-teal-500 to-lime-300",
    tags: ["HTML", "CSS"],
    webapp: "https://rimjhim018.github.io/goods-panda/",
  },
];

