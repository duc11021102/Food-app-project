import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import logo from "./logo-coffee.svg";
import styles from "../Navbar/Navbar.module.css";
import NavbarButton from "./NavbarButton";
import Navigation from "./Navigation";
import AuthContext from "../../store/auth-context";

const Navbar = (props) => {
  const ctx = useContext(AuthContext);
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

        <div className={`${styles["nav-header"]}`}>

          <div className={`${styles["nav-navigation"]}`}>
            {ctx.isLoggedIn && <Navigation></Navigation>}
          </div>


          <div className={`${styles["nav-btnCart"]}`}>
            {ctx.isLoggedIn && <NavbarButton onClick={props.onClick}></NavbarButton>}
          </div>

        </div>



      </div>


    </nav>
  );
};

export default Navbar;
