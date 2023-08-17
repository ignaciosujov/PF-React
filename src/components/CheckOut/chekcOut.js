import { useCartContext } from "../CartContext/cartContext";

const CheckOut = ({order}) => {
    const {removeList} = useCartContext()
    return (
        <div className="order-summary">
            <h2>Resumen de Compra</h2>
            <h3>Información del Comprador:</h3>
            <p><strong>Nombre:</strong> {order.buyer.name}</p>
            <p><strong>Email:</strong> {order.buyer.email}</p>
            <p><strong>Teléfono:</strong> {order.buyer.phone}</p>

            <h3>Productos:</h3>
            <ul>
                {order.items.map(item => (
                    <li key={item.id}>
                        <strong>{item.name}</strong> - ${item.price} x {item.quantity} = ${item.price * item.quantity}
                    </li>
                ))}
            </ul>
            
            <h3>Total: ${order.total}</h3>
            {removeList()}
        </div>
    );
}

export default CheckOut