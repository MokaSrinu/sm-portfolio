import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript, 
  SiRadixui, 
  SiJest, 
  SiSass, 
  SiWebpack,
  SiSocketdotio,  
  SiRazorpay, 
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import classes from "./Techstacks.module.css";

const SKILLS_DATA = [
  {
    label: "Javascript",
    icon: <SiJavascript className={classes.Icon} />,
  },
  {
    label: "HTML5",
    icon: <SiHtml5 className={classes.Icon} />,
  },
  {
    label: "CSS3",
    icon: <DiCss3 className={classes.Icon} />,
  },
  {
    label: "React",
    icon: <FaReact className={classes.Icon} />,
  },
  {
    label: "Next.js",
    icon: <SiNextdotjs className={classes.Icon} />,
  },
  {
    label: "Typescript",
    icon: <SiTypescript className={classes.Icon} />,
  },
  {
    label: "Redux",
    icon: <SiRedux className={classes.Icon} />,
  },
  {
    label: "Radix UI",
    icon: <SiRadixui className={classes.Icon} />,
  },
  {
    label: "Saas",
    icon: <SiSass className={classes.Icon} />,
  },
  {
    label: "Tailwind",
    icon: <SiTailwindcss className={classes.Icon} />,
  },
  {
    label: "Jest",
    icon: <SiJest className={classes.Icon} />,
  },
  {
    label: "Webpack",
    icon: <SiWebpack className={classes.Icon} />,
  },
  {
    label: "Socket.io",
    icon: <SiSocketdotio className={classes.Icon} />,
  },
  {
    label: "Razorpay",
    icon: <SiRazorpay className={classes.Icon} />,
  },
  {
    label: "Node.js",
    icon: <FaNodeJs className={classes.Icon} />,
  },
  {
    label: "Express",
    icon: <SiExpress className={classes.Icon} />,
  },
  {
    label: "MongoDB",
    icon: <DiMongodb className={classes.Icon} />,
  },
  
  {
    label: "Github",
    icon: <VscGithub className={classes.Icon} />,
  },
];

export const Techstacks = () => {
  return (
    <div className={classes.SkillSection} data-aos="zoom-in">
      <h2 className={classes.Header}>Skills</h2>
      <div className={classes.SkillsWrapper}>
        {SKILLS_DATA?.map((skill, index) => (
          <div key={index} className={classes.Card}>
            {skill?.icon}
            <h5 className={classes.Title}>{skill?.label}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};
