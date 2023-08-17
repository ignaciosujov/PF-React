import { collection, addDoc } from 'firebase/firestore';
import data from '../Firebase/fireBaseConfig';

const saveOrder = async (order) => {
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

export default saveOrder;