import React from "react";
import { ExitToApp as ExitToAppIcon } from "@material-ui/icons";
import { ThemeContext } from "../../Context/theme";
import ProfilePic from "../../Assets/Requird-image/srinu.jpg";
import classes from "./Introduction.module.css";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <section id="#about">
      <div className={classes.Section} >
        <h1 className="section__title" data-aos="zoom-in">
          About <span className={classes.Different}>Me</span>
        </h1>
        <div className={`${classes.IntroContainer} ${themename}`} data-aos="zoom-in">
          <div className={classes.ProfileWrapper}>
            <img
              src={ProfilePic}
              alt="profile_pic"
              width="100%"
              height="100%"
            />
          </div>
          <div className={classes.Info}>
            <p className={classes.AboutMeInfo}>
              Hi Everyone, I am{" "}
              <span className={classes.Different}>Srinu Moka. </span>{" "}
              Experienced frontend developer proficient in React.js and Next.js,
              with a proven history of delivering outstanding web applications.
              Led key projects, including the Fee Management System at
              GrayQuest, showcasing adept leadership and project management.
              Personal projects like Imaginify and Threads underscore my
              commitment to innovation and creativity. Eager to continue pushing
              boundaries in web development, I am driven to lead impactful
              projects and collaborate with top-tier talent.
              <br />
              <br />
            </p>
            <h4>Some of my interests apart form Coding :</h4>
            <p className={`${classes.OtherInterests} ${classes.Different}`}>
              <ExitToAppIcon />
              <span>Playing Cricket </span>
            </p>
            <p className={`${classes.OtherInterests} ${classes.Different}`}>
              <ExitToAppIcon />
              <span>Stock Market Trading </span>
            </p>
            <p className={`${classes.OtherInterests} ${classes.Different}`}>
              <ExitToAppIcon />
              <span>Travelling </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
