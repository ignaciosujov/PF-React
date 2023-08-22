import { Button } from "react-bootstrap"
import React, {useState} from "react";
import { Link } from "react-router-dom";



export const FormToOrder = ({ handlePurchase}) => {
    const [name, setName] = useState("a website buyer");
    const [email, setEmail] = useState("buyer's email");
    const [phone, setPhone] = useState(123456789);  
  
    const handleClick = () => {
      const orderData = {
        buyer: {
          name: name,
          email: email,
          phone: phone,
        },
      };
  
      // Llama a la función handlePurchase pasando los datos del pedido
      handlePurchase(orderData);
    };
  
    return (
      <div className="formPurchase">
        <div>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre"
          />
        </div>
        <div>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Telefono"
          />
        </div>
        <div className="d-flex justify-content-center">
        <Button className="buttonForm" as={Link} to={'/checkout'} onClick={handleClick}>Finalizar compra</Button>
        </div>
      </div>
    );
  };
