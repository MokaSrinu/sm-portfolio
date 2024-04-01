import React from "react";
import { Type } from "./Type";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Facebook as FacebookIcon,
  Description as DescriptionIcon,
  Public as PublicIcon,
} from "@material-ui/icons";
import { Introduction } from "../Introduction/Introduction";
import { Timeline } from "../Timeline/Timeline";
import { Techstacks } from "../TechStacks/Techstacks";
import classes from "./About.module.css";

const ABOUT_CONTACT_DATA = [
  {
    href: "https://github.com/MokaSrinu",
    arialabel: "github",
    icon: <GitHubIcon className={classes.ContactIcon} />,
  },
  {
    href: "mailto:srinumoka925@gmail.com",
    arialabel: "gmail",
    icon: <EmailIcon className={classes.ContactIcon}/>,
  },
  {
    href: "tel:+916302414774",
    arialabel: "mobile",
    icon: <PhoneIcon className={classes.ContactIcon}/>,
  },
  {
    href: "https://www.linkedin.com/in/srinu-moka-436997227/",
    arialabel: "linkedin",
    icon: <LinkedInIcon className={classes.ContactIcon}/>,
  },
  {
    href: "https://drive.google.com/drive/u/2/folders/1_3WstG2CjJ2Z2VuaLSL1auTJs2Hv9C-O",
    arialabel: "resume",
    icon: <DescriptionIcon className={classes.ContactIcon}/>,
  },
  {
    href: "https://www.facebook.com/srinu.moka.395",
    arialabel: "facebook",
    icon: <FacebookIcon className={classes.ContactIcon}/>,
  },
  {
    href: "https://www.google.com/maps/place/Munjeru+Main+Rd,+Andhra+Pradesh+535216/@18.0080975,83.5239201,17z/data=!3m1!4b1!4m5!3m4!1s0x3a3bfe95b643d7df:0x357a9040abdc8b68!8m2!3d18.0080924!4d83.5261088",
    arialabel: "location",
    icon: <PublicIcon className={classes.ContactIcon}/>,
  },
];

export const About = () => {
  return (
    <>
      <div className={`${classes.About} center`}>
        <h1 className={classes.AboutHeader} data-aos="zoom-in">
          Hi, I am <span className={classes.AboutName}>Srinu Moka</span>
        </h1>
        <div className={classes.TypeWriterText}>
        <Type />
        </div>
        <p className={classes.AboutDesc} data-aos="zoom-in">
          "Dynamic and talented frontend developer with 2 years of hands-on
          experience, specializing in cutting-edge web technologies and
          frameworks like React.js and Next.js. Renowned for crafting
          pixel-perfect, responsive, and intuitive web applications that
          captivate users. A self-driven individual, I thrive on mastering new
          skills and staying ahead of industry trends and best practices. I am
          eagerly seeking opportunities to unleash my creativity and technical
          prowess in a vibrant organization, where I can lead innovative
          projects, inspire excellence, and collaborate with top-tier teams."
        </p>
        <div className={classes.AboutContact}>
          {ABOUT_CONTACT_DATA?.map((contactData, index) => (
            <a
              key={index}
              href={contactData?.href}
              aria-label={contactData?.arialabel}
              target="_blank"
              rel="noreferrer"
              className="link link--icon"
            >
              {contactData?.icon}
            </a>
          ))}
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
