import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "./logo-coffee.svg";
import styles from "../Navbar/Navbar.module.css";
import NavbarButton from "./NavbarButton";

const Navbar = (props) => {
  return (
    <nav className={styles.nav}>
      <div className={`${styles["nav-center"]}`}>
        <div className={`${styles["nav-header"]}`}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h2>VinFood</h2>
          <button className={`${styles["nav-toggle"]}`}>
            <FaBars />
          </button>
        </div>
        <div>
          <NavbarButton onClick={props.onClick}></NavbarButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
