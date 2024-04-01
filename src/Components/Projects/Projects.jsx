import React from "react";
import { FaReact } from "react-icons/fa";
import {
  SiHtml5,
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiRazorpay,
  SiTailwindcss,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import IMAGINIFY from "../../Assets/Requird-image/imaginify.png";
import THREADS from "../../Assets/Requird-image/threads.png";
import CHATAPP from "../../Assets/Requird-image/chat-app.png";
import classes from './Projects.module.css';
const ShadcnIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      class="h-6 w-6"
    >
      <rect width="256" height="256" fill="none"></rect>
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></line>
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></line>
    </svg>
  );
};

const PROJECT_DETAILS = [
  {
    banner_image: IMAGINIFY,
    alt: "imaginify banner",
    title: "Imaginify",
    description:
      "Imaginify is an AI image SaaS platform that excels in image processing capabilities, integrates a secure payment infrastructure, offers advanced image search functionalities, and supports multiple AI features, including image restoration, recoloring, object removal, generative filling, and background removal.",
    tech_stack: [
      <SiNextdotjs />,
      <SiTypescript />,
      <SiMongodb />,
      <SiRazorpay />,
      <SiTailwindcss />,
      <ShadcnIcon />,
    ],
    live_link: "https://sm-imaginify.vercel.app/",
    github_link: "https://github.com/MokaSrinu/sm-imaginify",
  },
  {
    banner_image: THREADS,
    alt: "threads banner",
    title: "Threads",
    description:
      "Your go-to app for dynamic threaded discussions! Seamlessly create and share engaging content threads on diverse topics. Effortlessly find and connect with users through our intuitive search feature. Explore vibrant communities or create your own, all within the Threads app. Dive into meaningful conversations today!",
    tech_stack: [
      <SiNextdotjs />,
      <SiTypescript />,
      <SiMongodb />,
      <SiRazorpay />,
      <SiTailwindcss />,
      <ShadcnIcon />,
    ],
    live_link: "https://sm-threads.vercel.app",
    github_link: "https://github.com/MokaSrinu/sm-threads",
  },
  {
    banner_image: CHATAPP,
    alt: "chat app banner",
    title: "Chat App",
    description:
      "Leveraging Socket.io, we'll enable seamless real-time messaging capabilities while implementing features like online user status updates using React Context. Get ready to dive into the world of dynamic communication and elevate your app development skills!",
    tech_stack: [
      <FaReact />,
      <SiHtml5 />,
      <DiCss3 />,
      <IoLogoJavascript />,
      <SiNodedotjs />,
      <SiMongodb />,
      <SiSocketdotio />,
    ],
    live_link: "https://sm-chat-app.onrender.com/",
    github_link: "https://github.com/MokaSrinu/sm-chat-app",
  },
];

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="zoom-in">
          Projects
        </h2>
        {PROJECT_DETAILS?.map((projectData, index) => (
          <div key={index} className={classes.ProjectsContainer} data-aos="zoom-in">
            <div className={classes.Project}>
              <div className={classes.ProjectImgWrapper}>
                <div className={classes.Image} >
                  <img src={projectData?.banner_image} alt={projectData?.alt} width='100%' height='100%'/>
                </div>
              </div>
              <div className={classes.ProjectInfo} >
                <h2 className={classes.ProjectTitle}>{projectData?.title}</h2>
                <p className={classes.ProjectDesc}>{projectData?.description}</p>
                <div className={classes.TechStacks}>
                  {projectData?.tech_stack?.map((techStack, index) => (
                    <span className={classes.Skill} key={index}>{techStack}</span>
                  ))}
                </div>
                <div className={classes.ButtonWrapper}>
                  <a
                    href={projectData?.live_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className={`${classes.OnButton} btn btn--outline`}>
                      See this Live
                    </span>
                  </a>
                  <a
                    href={projectData?.github_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btn btn--outline">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
