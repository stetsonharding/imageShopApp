import React, { useContext, useState } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem/CartItem"

import "./Cart.css"


const Cart = () => {
  const { cartItems, setCartItems } = useContext(Context)
  const [placeOrder, setPlaceOrder] = useState(false)

  //getting items from the cart, display information on each item
  const cartItemDescription = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ))

  //calculate total cost 
  const totalCost = cartItems.length * 5.99
  const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })

  //placing order
  function PlaceOrder() {
    setPlaceOrder(true)
    setTimeout(() => {
      setPlaceOrder(false)
      console.log("order palced")
      setCartItems([])
    }, 3000);
  }


  return (
    <>
      <h2 style={{ textAlign: "center" }}>Cart Checkout</h2>
      {cartItemDescription}
      <p className="total-cost">Total:  {totalCostDisplay}</p>
      { cartItems.length > 0 ?
        <div style={{ textAlign: "center" }} className="order-btn">
          <button onClick={PlaceOrder} className="orderBtn">
            {placeOrder ? "Ordering..." : "place order"}
          </button>
        </div> : <p className="noItems">You have no items in your cart.</p>
      }
    </>
  )
}

export default Cart