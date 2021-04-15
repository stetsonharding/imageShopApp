import React, { useContext } from "react"
import useHover from "../hooks/useHover" //hoook for hover events
// import PropTypes from 'prop-types';
import { Context } from "../../Context"


import "../Image/Image.css"

const Image = ({ className, photo }) => {
  const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(Context)
  const [hovered, ref] = useHover()


  //displaying filled heart icon when clicked, or outline heart when hovered
  function heartIcon() {
    if (photo.liked_by_user) {
      return <i onClick={() => toggleFavorite(photo.id)} className="ri-heart-fill favorite"></i>
    } else if (hovered) {
      return <i onClick={() => toggleFavorite(photo.id)} className="ri-heart-line favorite"></i>
    }
  }

  //displaying shopping cart icon when plusIcon clicked, or plusIcon when hovered.
  function cartIcon() {
    const alreadyInCart = cartItems.find(item => item.id === photo.id)
    if (alreadyInCart) {
      return <i onClick={() => removeFromCart(photo)} className="ri-shopping-cart-fill cart shoppingCartIcon"></i>
    } else if (hovered) {
      return <i onClick={() => addToCart(photo)} className="ri-add-circle-line plusHoverIcon"></i>
    }
  }


  return (
    <div
      ref={ref}
      className={`${className} image-container`}
    >
      <img src={photo.urls.thumb} className="image-grid" alt={photo.alt_description} />
      {heartIcon()}
      {cartIcon()}
    </div>
    
  )
}

// Image.propTypes = {
//   className: PropTypes.string,

//   photo: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired,
//     isFavorite: PropTypes.bool
//   })
// }

export default Image
