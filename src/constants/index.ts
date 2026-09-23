import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TCertification,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  aboutIntroVideo,

  // Skills
  python,
  javascript,
  sql,
  html,
  css,
  react,
  fastapi,
  openai,
  streamlit,
  huggingface,

  // Projects
  carPrice,
} from "../assets";

/* =========================================================
   NAVIGATION
========================================================= */

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

/* =========================================================
   SERVICES
========================================================= */

export const services: TService[] = [
  {
    title: "Desktop Support Engineer",
    icon: backend,
  },
  {
    title: "Network Engineer",
    icon: web,
  },
  {
    title: "Cyber Security Associate",
    icon: mobile,
  },
];

export {
  aboutIntroVideo,
};

/* =========================================================
   TECHNOLOGIES / SKILLS
========================================================= */

export const technologies: TTechnology[] = [
  /* -------------------- LANGUAGES -------------------- */

  {
    name: "Python",
    icon: python,
    category: "Languages",
  },
  {
    name: "JavaScript",
    icon: javascript,
    category: "Languages",
  },
  {
    name: "SQL",
    icon: sql,
    category: "Languages",
  },
  {
    name: "HTML",
    icon: html,
    category: "Languages",
  },
  {
    name: "CSS",
    icon: css,
    category: "Languages",
  },

  /* -------------------- FRAMEWORKS -------------------- */

  {
    name: "React",
    icon: react,
    category: "Frameworks",
  },
    {
    name: "FastAPI",
    icon: fastapi,
    category: "Frameworks",
  },


  /* -------------------- API & TESTING -------------------- */

  {
    name: "OpenAI",
    icon: openai,
    category: "API & Testing",
  },

  /* -------------------- CLOUD & DEPLOYMENT -------------------- */

  {
    name: "Streamlit",
    icon: streamlit,
    category: "Cloud & Deployment",
  },
  {
    name: "Hugging Face",
    icon: huggingface,
    category: "Cloud & Deployment",
  },
];

/* =========================================================
   EXPERIENCE
========================================================= */

export const experiences: TExperience[] = [
  {
    title: "Desktop Support Engineer ",
    companyName: "ANUNTA TECHNOLOGIES",
    icon: backend,
    iconBg: "#383E56",
    date: "3 Months",
    points: [
      "Provided technical support for desktops, laptops, software applications, and network-related issues.",
      "Installed, configured, and maintained operating systems, drivers, and IT assets.",
      "Diagnosed and resolved hardware, software, and connectivity issues under senior guidance.",
      "Collaborated with team members to complete assigned tasks and maintain service quality standards.",
    ],
  },

  {
    title: "IT Support",
    companyName: "Fantasy Solutions",
    icon: web,
    iconBg: "#383E57",
    date: "Mar 2025 – Jul 2025",
    points: [
      "Assisted in system setup, IT infrastructure maintenance, and network configuration activities.",
      "Supported security monitoring and troubleshooting tasks for internal systems.",
      "Performed basic automation and scripting activities using Python.",
      "Gained practical exposure to system administration, IT support, and cyber security operations.",
    ],
  },
];

/* =========================================================
   PROJECTS
========================================================= */

export const projects: TProject[] = [
  {
    name: "Virtual Try-On System for Online Shopping",
    description:
      "End-to-end deep learning virtual try-on application using a trained model and interactive web interface.",
    tags: [
      {
        name: "Python",
        color: "text-blue-400",
      },
      {
        name: "Deep Learning",
        color: "text-green-400",
      },
      {
        name: "Streamlit",
        color: "text-red-400",
      },
      {
        name: "Hugging Face",
        color: "text-yellow-400",
      },
    ],
    image: carPrice,
    sourceCodeLink:
      "",
    liveDemoLink:
      "",
  },
];

/* =========================================================
   CERTIFICATIONS
========================================================= */

export const certifications: TCertification[]= [
  {
    name: "Desktop Support Engineer",
    issuer: "ANUNTA TECHNOLOGIES",
    date: "2026",
    icon: creator,
  },
  {
    name: "IT Intern",
    issuer: "Fantasy Solutions",
    date: "Mar 2025 – Jul 2025",
    icon: web,
  },
];

/* =========================================================
   TESTIMONIALS
========================================================= */

export const testimonials = [
  {
    testimonial:
      "I build secure, reliable, and practical IT and cybersecurity solutions using Python, networking technologies, system administration, and modern security tools.",
    name: "Hari Hara Suthan M",
    designation: "Desktop Support Engineer",
    company: "ANUNTA TECHNOLOGIES",
    image: "",
  },
];

/* =========================================================
   DEFAULT EXPORT
========================================================= */

export default {
  services,
  technologies,
  experiences,
  projects,
  certifications,
  testimonials,
  navLinks,
};