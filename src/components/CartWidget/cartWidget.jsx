
import { BsCart3 } from "react-icons/bs";


function CartWidget({ contador }) {
    return(
        <li className="cart">
            <BsCart3 className="cartIcon"/>
            <span>{contador}</span>
        </li>
        
    )
}

export default CartWidget