import React from "react";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill, BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { ThemeContext } from "../../Context/theme";
import classes from './Contact.module.css';

export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <div className="section" data-aos="zoom-in">
      <h2 className="section__title">
        Get in <span className="different">Touch</span>
      </h2>
      <div className={`${classes.ContactContainer} ${themename}`}>
        <a
          href="https://www.linkedin.com/in/srinu-moka-436997227/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className={classes.Linkedin} />
        </a>
        <a href="https://github.com/MokaSrinu" target="_blank" rel="noreferrer">
          <VscGithub className={classes.Github} />
        </a>
        <a
          href="mailto:srinumoka925@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <CgMail className={classes.Email} />
        </a>
        <a
          href="https://www.facebook.com/srinu.moka.395"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook className={classes.Twitter} />
        </a>
        <a href="tel:+916302414774" target="_blank" rel="noreferrer">
          <BsFillTelephoneFill className={classes.Phone} />
        </a>
      </div>
    </div>
  );
};
