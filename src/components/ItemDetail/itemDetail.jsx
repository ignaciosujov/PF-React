import React from 'react'
import ItemCount from '../ItemCount/itemCount';
import './itemDetail.css'
import { Link } from "react-router-dom"
import { useState } from "react"
import { useCartContext } from "../CartContext/cartContext"
import { Button } from 'react-bootstrap';


const ItemDetail = ({product}) => {
    
    const { addItem } = useCartContext();
    const [isAdded, setIsAdded] = useState(false);

    const onAdd = (cantidad) => {
        setIsAdded(true);
        addItem(product, cantidad);
    }

    return (
    <div className='d-flex justify-content-center align-items-center itemDetail'>
        <div className='img'>
            <img src={product.img}></img>
        </div>
        <div className='info'>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>${product.price}</span>
            <p>Unidades disponibles: {product.stock}</p>
            { isAdded ? 
                        <div>
                            <Button as={Link} to="/cart">Terminar mi compra</Button>
                            <Button as={Link} to="/">Seguir comprando</Button>
                        </div>
                        :
            <ItemCount stock={product.stock} onAdd={onAdd}></ItemCount>
            }
        </div>
    </div>
    )
}

export default ItemDetail;