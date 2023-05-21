import React, { useState } from "react";
import Menu from "./components/MainMenu/Menu";
import Categories from "./components/MainMenu/Categories";
import items from "./database/data";
import Navbar from "./components/Navbar/Navbar";
// import { links, social } from "./database/data";
import styles from "./App.module.css";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
//allCategories : mot array chua cac categories
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  //ẩn hiện mục giỏ hàng , click vào button giỏ hàng sẽ hiện mục giỏ hàng và ấn close sẽ ẩn mục giỏ hàng 
  const [cartState, setCartState] = useState(false);
  const onClickHandler = () => {
    setCartState(true);
  }
  const onClosedHandler = () => {
    setCartState(false);
  }

  return (
    <CartProvider>
      <Navbar onClick={onClickHandler}></Navbar>
      {cartState && <Cart onClick={onClosedHandler}></Cart> }
      <main>
        <section className={`${styles["menu"]} ${styles["section"]}`}>
          <div className={styles.title}>
            <h2>Thực Đơn</h2>
            <div className={styles.underline}></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </section>
      </main>
    </CartProvider>
  );
}

export default App;
