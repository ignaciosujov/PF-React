import React from 'react'
import ItemCount from '../ItemCount/itemCount';
import './itemDetail.css'

const ItemDetail = ({product}) => {

    const onAdd = (cantidad) => {
        console.log(`Agregaste al carrito ${cantidad} items`)
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
            <ItemCount stock={product.stock} onAdd={onAdd}></ItemCount>
        </div>
    </div>
    )
}

export default ItemDetail;