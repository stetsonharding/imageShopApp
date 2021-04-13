import React, { useContext } from 'react'
import useHover from "../hooks/useHover" //hoook for hover events
import { Context } from "../../Context"
// import PropTypes from "prop-types"
import "../CartItem/CartItem.css"



const CartItem =({ item }) =>{
    const { removeFromCart } = useContext(Context)
    const [hovered, ref] = useHover()
 
    //display delete icon based on if icon is hovered or not
    const deleteIconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i
                ref={ref}
                onClick={() => removeFromCart(item)} className={deleteIconClassName}>
            </i>
            <img src={item.urls.thumb} width="130px" alt="your item" />
            <p className="item-price">$5.99</p>
        </div>
    )
}

// CartItem.propTypes = {
//     item: PropTypes.shape({
//         url: PropTypes.string.isRequired
//     })
// }

export default CartItem
