import { collection, addDoc, getFirestore, updateDoc, doc } from 'firebase/firestore';
import data from '../Firebase/fireBaseConfig';

export const saveOrder = async (order) => {
    const ordersCollection = collection(data, 'orders'); 

    try {
        const docRef = await addDoc(ordersCollection, order);
        console.log("Order ID: ", docRef.id);
    
        return docRef.id; 
    } catch (e) {
        console.error("Error adding order: ", e);
        return null;
    }
}
export const updateOrder = (id, stock, quantity) => {
    const db = getFirestore()

    const itemDoc = doc(db, "items", id)
    updateDoc(itemDoc, {stock: stock - quantity})
}

export default saveOrder;