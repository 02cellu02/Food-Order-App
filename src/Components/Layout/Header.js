import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../Assets/meals.jpg";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>ReactMeals</header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="" />
      </div>
    </Fragment>
  );
};

export default Header;
