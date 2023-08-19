import { useCartContext } from "../CartContext/cartContext";
import "./checkOut.css"


const CheckOut = ({order, formData}) => {
    const {removeList} = useCartContext()
    return (
        <div className="divCheck d-flex flex-column align-items-center ">
            <h2>Resumen de Compra</h2>
            <h3>Información del Comprador:</h3>
            <div className="d-flex flex-column align-items-start">
            <p>Nombre: {formData && formData.buyer.name}</p>
            <p>Email: {formData && formData.buyer.email}</p>
            <p><strong>Teléfono:</strong> {formData && formData.buyer.phone}</p>
            </div>

            <h2>Detalles de la Compra</h2>
            <h3>Productos:</h3>
            
            <ul>
                {order.map(item => (
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