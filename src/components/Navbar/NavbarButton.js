import CartIcon from "./CartIcon";
import classes from "./NavbarButton.module.css";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import CartContext from "../../store/cart-context";


const NavbarButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  // items là một mảng chứa các item meals
  const { items } = cartCtx;
  // numberOfCartItém là số item meals đang có trong giỏ hàng , hiện số lượng trong button 
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;


  //animation sau khi thêm hoặc xóa một meal , rerender lại sau khi một item meal đc thêm 
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={props.onClick}className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Giỏ Hàng</span>
      <span className={classes.badge}> {numberOfCartItems}  </span>
    </button>
  );
};
export default NavbarButton;
