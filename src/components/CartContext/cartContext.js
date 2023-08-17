import { createContext, useState, useContext } from "react";
const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext);
};
const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const removeList = () => {
        setCartList([])
    }

    const addItem = (item, quantity) => {
        const existingItem = cartList.find(cartItem => cartItem.id === item.id);
    
        if (existingItem) {
            const updatedCart = cartList.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
            );
            setCartList(updatedCart);
        } else {
            setCartList([...cartList, { ...item, quantity }]);
        }
    };
    
    const removeItem = (itemId) => {
        const updatedCart = cartList.filter(cartItem => cartItem.id !== itemId);
        setCartList(updatedCart);
    };
    
    const prodTotalPrice = (item) => {
        return item.price;
    }   
    const cartTotalPrice = () => {
        let total = 0;
        cartList.forEach(elem => {
            total += elem.price * elem.quantity;
        });
        return total;
    }
    return (
        <CartContext.Provider value={{cartList, addItem, removeList, removeItem, prodTotalPrice, cartTotalPrice}}>
            { children }
        </CartContext.Provider>
    );
}
export default CartContextProvider;