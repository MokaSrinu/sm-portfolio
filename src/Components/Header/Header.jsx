import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import classes from './Header.module.css';

export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
      <header className={`${classes.Header} center ${themename}`}>
        <h3>
          <a href="#home" className={classes.AppIcon} onClick={() => handleNavClick('#home')}>
            ~SM~
          </a>
        </h3>
        <Navbar />
      </header>
  );
};

//box-shadow: ;