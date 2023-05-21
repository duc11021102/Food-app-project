import styles from "./Dish.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
const Dish = (props) => {
  const cartCtx = useContext(CartContext);
  const priceFloat = parseFloat(props.price);
  const price = `$${priceFloat.toFixed(2)}`;
  // một item bao gồm name , description , price và một form , bên trong form có một input và một button
  // trả về một item sau khi ấn thêm item
  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: 1,
      price: props.price,
    });
    console.log({
      id: props.id,
      title: props.title,
      amount: 1,
      price: props.price,
    })
  };

  return (
    <article key={props.id} className={`${styles["menu-item"]}`}>
      <img src={props.img} alt={props.title} className={styles.photo} />
      <div className={`${styles["item-info"]}`}>
        <header>
          <h4>{props.title}</h4>
          <h4 className={styles.price}>{price}</h4>
        </header>
        <button
          type="button"
          className={`${styles["button-text"]}`}
          onClick={addToCartHandler}
        >
          Thêm
        </button>
      </div>
    </article>
  );
};

export default Dish;
