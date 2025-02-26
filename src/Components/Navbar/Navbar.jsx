import React from "react";
import {
  Brightness2 as Brightness2Icon,
  WbSunnyRounded as WbSunnyRoundedIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@material-ui/icons";
import { ThemeContext } from "../../Context/theme";
import { NavListData } from "./NavListData";
import classes from "./Navbar.module.css";

export const Navbar = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const [showNavList, setShowNavList] = React.useState(false);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      console.log('element', element)
      // element.scrollIntoView();
      // window.scrollBy(0, -64)
      window.scrollTo(0, element.offsetTop - 90);
    }
    setShowNavList(!showNavList);
  };

  const toggleNavList = (id) => {
    setShowNavList(!showNavList);
  };

  return (
    <nav className={`${classes.Navbar} center`}>
      <ul
        style={{ display: showNavList ? "flex" : null }}
        className={classes.NavList}
      >
        {NavListData?.map((navLink, index) => (
          <li key={index} className={classes.NavListItem}>
            <a
              href={navLink?.link}
              onClick={() => handleNavClick(navLink?.link)}
              className={`link link--nav`}
            >
              {navLink?.label}
            </a>
          </li>
        ))}
        <li className={classes.NavListItem}>
          <a
            href="https://drive.google.com/file/d/1xAUftPWoiyMV0tOHxynyKbpZ5JctC4pt/view"
            className={`link link--nav`}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
      <button
        type="button"
        onClick={toggeltheme}
        className={`${classes.NavTheme} btn btn--icon`}
        aria-label="toggle theme"
        style={{ backgroundColor: "inherit" }}
      >
        {themename === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>
      <button
        type="button"
        onClick={toggleNavList}
        className={`${classes.NavHamburger} btn btn--icon`}
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon className={classes.Icon} />}
      </button>
    </nav>
  );
};
