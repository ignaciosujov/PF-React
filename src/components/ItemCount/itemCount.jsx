import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";



function ItemCount({stock, onAdd}) {

    const [count, setCount] = useState(0)

    const sumar = () => {
        if (count < stock){
        setCount(count + 1)
        }
    }
    const restar = () => {
        if (count > 0){
        setCount(count - 1)
        }
    }

    return(
        <div className="divItemCount">
            <div className="addToCart">
                <Button onClick={restar}>-</Button>
                <span className="unidadesToAdd">{count}</span>
                <Button onClick={sumar}>+</Button>
            </div>
            <Button disabled={count === 0} onClick={()=>{onAdd(count)}}>Agregar</Button>
            <Button className="seeMoreProducts" as={Link} to={'/productos'}>Ver mas productos</Button>
        </div>
    )
}

export default ItemCount;