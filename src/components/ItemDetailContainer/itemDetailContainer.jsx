import React, { useEffect, useState } from 'react'
import { getItem } from '../../mock/dataProducts'
import ItemDetail from '../ItemDetail/itemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore, collection, getDocs } from "firebase/firestore"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()

        useEffect(() => {
        const db = getFirestore()

        const itemsRef = doc(db, "items", id)
        getDoc(itemsRef).then((snapshot) => {
            if (snapshot.exists()){
                const product = {
                    id: snapshot.id, ...snapshot.data()
                }

                setProduct(product)
            }
        })
    }, [])


  return (
    <div><ItemDetail product={product}></ItemDetail></div>
  )
}

export default ItemDetailContainer;


// CODIGO ANTIGUO

    /* useEffect(() => {
        getItem(id)
        .then((res) => setProduct(res))
        .catch((err) => console.log(err))
    }, [])
    */
