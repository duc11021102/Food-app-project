import React, { useState } from "react";
import Menu from "../MainMenu/Menu";
import Categories from "../MainMenu/Categories";
import styles from "./Home.module.css";
import { useEffect } from "react";
import classes from "./Home.module.css";


const Home = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState("");

  useEffect(() => {
    const fetchDishs = async () => {
      const response = await fetch(
        "https://menu-a0a06-default-rtdb.firebaseio.com/dishs.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      const loadDishs = [];
      for (const key in responseData) {
        loadDishs.push({
          id: key,
          title: responseData[key].title,
          img: responseData[key].img,
          category: responseData[key].category,
          price: responseData[key].price,
        });
      }
      setItems(loadDishs);
      setIsLoading(false);
      setCategories([
        "Thực Đơn",
        ...new Set(loadDishs.map((item) => item.category)),
      ]);
      setMenuItems(loadDishs);
    };
    fetchDishs().catch((error) => {
      setHttpError(error.message);
      setIsLoading(false);
    });
  }, []);

  //lọc
  const filterItems = (category) => {
    console.log(category);
    if (category === "Thực Đơn") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
      <React.Fragment>
      <main>
        <section className={`${styles["menu"]} ${styles["section"]}`}>
          <div className={styles.title}>
            <h2>Thực Đơn</h2>
            <div className={styles.underline}></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          {isLoading && <p className={classes.mealsLoading} >Loading...</p>}
          {httpError && <p className={classes.mealsLoading}>{httpError}</p>}
          <Menu items={menuItems} />
        </section>
      </main>
      </React.Fragment>
  );


};

export default Home;
