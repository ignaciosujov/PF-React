
import { BsCart3 } from "react-icons/bs";
import { useCartContext } from "../CartContext/cartContext";


function CartWidget() {
    const {cartList} = useCartContext()
    const totalProductos = cartList.length;


    return(
        <li className="cart">
            <BsCart3 className="cartIcon"/>
            <span>{totalProductos}</span>
        </li>
        
    )
}

export default CartWidget