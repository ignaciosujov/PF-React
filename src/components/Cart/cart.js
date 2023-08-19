import { Button } from "react-bootstrap";
import { useCartContext } from "../CartContext/cartContext";
import { Link } from "react-router-dom";
import { serverTimestamp } from "firebase/firestore";
import saveOrder from "../NewOrder/newOrder";
import { useState } from "react";
import CheckOut from "../CheckOut/chekcOut";
import './cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormToOrder } from '../NewOrder/formToOrder'

const Cart = () => {
    const { removeItem, cartList, prodTotalPrice, cartTotalPrice, removeList} = useCartContext();
    const [purchaseCompleted, setPurchaseCompleted] = useState(false);
    const [formData, setFormData] = useState(null);
    const displayItems = cartList.map((prod) => (
        <div key={prod.id} className="cartItem">
            <span>{prod.name} - ${prodTotalPrice(prod, prod.quantity)} x {prod.quantity}</span>
            <span className="deletePurchase" onClick={() => removeItem(prod.id)}>Eliminar del carrito</span>
        </div>
    ));
    
    const order = {
        buyer: {
/*             name: formData && formData.buyer.name,
            email: formData && formData.buyer.email,
            phone: formData && formData.buyer.phone
 */        
            name: "Ignacio Sujov",
            email: "ignaciosujov@gmail.com",
            phone: "2944231972"
        },
        total: cartTotalPrice(),
        items: cartList.map(p => ({id: p.id, name: p.name, price: p.price, quantity: p.quantity})),
        date: serverTimestamp()
    };
    
    
    const handlePurchase = async (orderData) => {
        
        const orderId = await saveOrder(order);
        if (orderId) {
            console.log("Order saved with ID:", orderId);
            setPurchaseCompleted(true);

        } else {
            console.log("Error saving order");
        }
        setFormData(orderData)
    };
    if (purchaseCompleted) {
        return (<CheckOut order={cartList} formData={formData} />);
    } 


    return (
        <div className="fondoCart d-flex justify-content-center">
        <div className="d-flex justify-content-center align-items-center cartContainer">
            {/* <ToastContainer /> */}
            { cartList.length > 0 ? 
        
                <div className="cartPurchase">
                    <div>
                        <h2 className="cartTitle">Carrito de compras</h2>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center divCartPurchase">
                        {displayItems}
                        <h3 className="montoTotalPurchase">Monto total: ${cartTotalPrice()}</h3>
                        <FormToOrder handlePurchase={handlePurchase}></FormToOrder>
                        {/* <Button className="endPurchase" onClick={handlePurchase}>Terminar compra</Button> */}
                    </div>
                </div>

                :
                <div>
                    <h2>No hay items en el carrito</h2>
                    <Button className="endPurchase" as={Link} to="/productos">Buscar productos</Button>
                </div>
            }
        </div>
        </div>
    )
}

export default Cart;