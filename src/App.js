import Home from "./components/Home/Home";
import CartProvider from "./store/CartProvider";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import AuthContext from "./store/auth-context";
import { useContext } from "react";
import classes from "./App.module.css";

function App() {
  const ctx = useContext(AuthContext);
  //ẩn hiện mục giỏ hàng , click vào button giỏ hàng sẽ hiện mục giỏ hàng và ấn close sẽ ẩn mục giỏ hàng
  const [cartState, setCartState] = useState(false);
  const onClickHandler = () => {
    setCartState(true);
  };
  const onClosedHandler = () => {
    setCartState(false);
  };

  return (
    <div className={classes.app}>
      <CartProvider>
        <Navbar onClick={onClickHandler}></Navbar>
        {cartState && <Cart onClick={onClosedHandler}></Cart>}
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </CartProvider>
    </div>
  );
}

export default App;
