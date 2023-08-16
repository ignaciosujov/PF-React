import React from 'react'
import Item from '../Item/item';

const ItemList = ({products}) => {
    return (
        <div>
            <div className='d-flex justify-content-around align-items-center flex-wrap'>
                {products.map(product => (
                    <Item key={product.id} product={product}></Item>
                ))}
            </div>
        </div>
    )
}

export default ItemList;