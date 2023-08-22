import { useState } from "react";
import { useCartContext } from "../CartContext/cartContext";
import "./checkOut.css"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const CheckOut = ({order, formData}) => {
    const {removeList, cartTotalPrice} = useCartContext()

    return (
        <div className="d-flex justify-content-center fondoCart">
        <div className="divCheck d-flex justify-content-center align-items-center cartContainer checkOutCont">
            <div  className="d-flex flex-column justify-content-center align-items-center divCartPurchase divCheckOut">
                <h2>Resumen de Compra</h2>
                <h3>Información del Comprador:</h3>

                <div className="d-flex flex-column align-items-start dataBuyer">
                    <p>Nombre: {formData && formData.buyer.name}</p>
                    <p>Email: {formData && formData.buyer.email}</p>
                    <p>Teléfono: {formData && formData.buyer.phone}</p>
                </div>

                <h3>Productos:</h3>
                
                <ul className="d-flex flex-column align-items-start dataPurchase">
                    {order.map(item => (
                        <li key={item.id}>
                            <strong>{item.name}</strong> - ${item.price} x {item.quantity} = ${item.price * item.quantity}
                        </li>
                    ))}
                </ul>
                
                <h3>Total: ${cartTotalPrice()}</h3>
                
                <Button className="endPurchase" as={Link} to={'/'} onClick={removeList}>Volver al inicio</Button>
            </div>
        </div>
        </div>
    );
}

export default CheckOut