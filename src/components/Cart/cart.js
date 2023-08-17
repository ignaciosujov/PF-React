import { Button } from "react-bootstrap";
import { useCartContext } from "../CartContext/cartContext";
import { Link } from "react-router-dom";
import { serverTimestamp } from "firebase/firestore";
import saveOrder from "../NewOrder/newOrder";
import { useState } from "react";
import CheckOut from "../CheckOut/chekcOut";

const Cart = () => {
    const { removeItem, cartList, prodTotalPrice, cartTotalPrice, removeList} = useCartContext();
    const [purchaseCompleted, setPurchaseCompleted] = useState(false);
    const displayItems = cartList.map((prod) => (
        <div key={prod.id}>
            <span>{prod.name} - ${prodTotalPrice(prod, prod.quantity)} x {prod.quantity}</span>
            <Button onClick={() => removeItem(prod.id)}>Eliminar del carrito</Button>
        </div>
    ));
    const order = {
        buyer: {
            name: "An Ecommerce Client",
            email: "client@coderhouse.com",
            phone: "123456789"
        },
        total: cartTotalPrice(),
        items: cartList.map(p => ({id: p.id, name: p.name, price: p.price, quantity: p.quantity})),
        date: serverTimestamp()
    };
    const handlePurchase = async () => {
        const orderId = await saveOrder(order, removeList);
        if (orderId) {
            console.log("Order saved with ID:", orderId);
            setPurchaseCompleted(true);
        } else {
            console.log("Error saving order");
        }
    };
    if (purchaseCompleted) {
        return <CheckOut order={order} />;
    }


    return (
        <div>
            { cartList.length > 0 ? 
                <div>
                    {displayItems}
                    <h2>Monto total: ${cartTotalPrice()}</h2>
                    <Button  onClick={handlePurchase}>Terminar compra</Button>
                </div>
                :
                <div>
                    <h2>No hay items en el carrito</h2>
                    <Button as={Link} to="/productos">Buscar productos</Button>
                </div>
            }
        </div>
    )
}

export default Cart;