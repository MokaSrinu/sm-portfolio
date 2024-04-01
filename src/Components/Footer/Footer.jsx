import React from "react";
import { ThemeContext } from "../../Context/theme";
import classes from './Footer.module.css';

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename}>
        <a
          href="https://github.com/MokaSrinu"
          rel="noreferrer"
          target="_blank"
        >
          <h3 className={classes.Footer}>Made with ❤ By Srinu Moka </h3>
        </a>
      </div>
    </>
  );
};
