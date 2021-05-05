import React, { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem/CartItem";

import "./Cart.css";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(Context);
  const [placeOrder, setPlaceOrder] = useState(false);

  //getting items from cart, display image for each item
  const cartItem = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  //calculate total cost
  const totalCost = cartItems.length * 5.99;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  //placing order
  function PlaceOrder() {
    setPlaceOrder(true);
    setTimeout(() => {
      setPlaceOrder(false);
      setCartItems([]);
    }, 3000);
  }

  return (
    <>
      <h2 className="cart-title">Cart Checkout</h2>
      {cartItem}
      <p className="total-cost">Total: {totalCostDisplay}</p>

      {cartItems.length > 0 ? 
        <div className="btn-wrapper">
          <button onClick={PlaceOrder} className="order-btn">
            {placeOrder ? "Ordering..." : "place order"}
          </button>
        </div>
      : 
        <p className="no-items">You have no items in your cart.</p>
      }
      
    </>
  );
};

export default Cart;
