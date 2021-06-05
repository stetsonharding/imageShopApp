import React, { useContext } from "react";
import useHover from "../hooks/useHover";
import { Context } from "../../Context";

import "../Image/Image.css";

const Image = ({ className, photo }) => {
  const { toggleFavorite, addToCart, cartItems, removeFromCart } =
    useContext(Context);
  const [hovered, ref] = useHover();

  //displaying filled heart icon when clicked, or outline heart when hovered
  function heartIcon() {
    if (photo.liked_by_user) {
      return (
        <i
          onClick={() => toggleFavorite(photo.id)}
          className="ri-heart-fill favorite"
        ></i>
      );
    } else  {
      return (
        <i
          onClick={() => toggleFavorite(photo.id)}
          className="ri-heart-line favorite"
        ></i>
      );
    }
  }

  //displaying shopping cart icon when clicked, or plus icon when hovered
  function cartIcon() {
    const alreadyInCart = cartItems.find((item) => item.id === photo.id);
    if (alreadyInCart) {
      return (
        <i
          onClick={() => removeFromCart(photo)}
          className="ri-shopping-cart-fill cart shopping-cart-icon"
        ></i>
      );
    } else  {
      return (
        <i
          onClick={() => addToCart(photo)}
          className="ri-add-circle-line plus-icon"
        ></i>
      );
    }
  }

  return (
    <div ref={ref} className={`${className} image-container`}>
      <img
        className="image-grid"
        src={photo.urls.thumb}
        alt={photo.alt_description}
      />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
};

export default Image;
