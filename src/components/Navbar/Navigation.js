import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";

const Navigation = () => {
  const ctx = useContext(AuthContext);
  const logoutHandler = () => {
    ctx.onlogout();
  }

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <button className={`${classes['btn-home']}`}>Tin Tức</button>
        </li>
        <li>
          <button className={`${classes['btn-meals']}`}>Thực Đơn</button>
        </li>
        <li>
          <button onClick={logoutHandler} className={`${classes['btn-logout']}`}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
