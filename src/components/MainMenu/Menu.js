import React from "react";
import Dish from "./Dish";

import styles from './Menu.module.css';
const Menu = (props) => {
  return (
    <div className={`${styles['section-center']}`}>
      {props.items.map((menuItem) => (
        <Dish
          key={menuItem.id}
          id={menuItem.id}
          img={menuItem.img}
          title={menuItem.title}
          price={menuItem.price}
          desc={menuItem.desc}
        ></Dish>
      ))}
    </div>
  );
};

export default Menu;
