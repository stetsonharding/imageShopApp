import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import "../Header/Header.css";

function Header() {
  const { cartItems } = useContext(Context);

  //change shopping cart icon based on if items are in the cart
  let cartIcon = "";
  if (cartItems.length >= 1) {
    cartIcon = "ri-shopping-cart-fill ri-fw ri-2x cart-icon";
  } else {
    cartIcon = "ri-shopping-cart-line ri-fw ri-2x cart-icon";
  }

  return (
    <header>
      <Link to="/">
        <h2 className="header__image-shop-text">Image Shop</h2>
      </Link>
      <Link to="/cart">
        <i className={cartIcon}></i>
      </Link>
    </header>
  );
}
export default Header;
