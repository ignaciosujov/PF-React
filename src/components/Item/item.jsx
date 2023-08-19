import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
    return (
        <div className="row">
            <div className="col cardHome1">
                <div>
                    <Link key={product.id} to={`/productos/item/${product.id}`}>
                        <img src={product.img} />
                    </Link>
                </div>
                <div className='cardContent'>
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <Link key={product.id} to={`/productos/item/${product.id}`}>Ver más</Link>
                </div>
            </div>
        </div>
    )
}

export default Item