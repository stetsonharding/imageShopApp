import React, { useContext } from "react"
import {Link} from "react-router-dom"
import {Context} from "../../Context"
import "../Header/Header.css"

function Header() {
    const {cartItems} = useContext(Context)


//change shopping cart icon based on if items are in the cart 
let cartIcon = "";
if(cartItems.length >= 1){
    cartIcon = "ri-shopping-cart-fill ri-fw ri-2x"
}else{
    cartIcon = "ri-shopping-cart-line ri-fw ri-2x"
}
 

    return(
        <header>
            <Link to="/"><h2 className="picSomeLink">Pic Some</h2></Link>
            <Link to="/cart"><i className={cartIcon}></i></Link>
        </header>
    )
}
export default Header