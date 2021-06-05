import React, { useContext } from "react";
import useHover from "../hooks/useHover";
import { Context } from "../../Context";
import "../CartItem/CartItem.css";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(Context);
  const [hovered, ref] = useHover();

  //display delete icon based on if icon is hovered
  const deleteIconClassName = hovered
    ? "ri-delete-bin-fill"
    : "ri-delete-bin-line";

  return (
    <div className="cart-item__container">
      <i
        className={deleteIconClassName}
        ref={ref}
        onClick={() => removeFromCart(item)}
      ></i>
      <img src={item.urls.thumb} alt="Your Item" />
      <p className="cart-item__item-price">$5.99</p>
    </div>
  );
};

export default CartItem;
