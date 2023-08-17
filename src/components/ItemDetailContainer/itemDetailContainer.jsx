import React, { useEffect, useState } from 'react'
import { getItem } from '../../mock/dataProducts'
import ItemDetail from '../ItemDetail/itemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore, collection, getDocs } from "firebase/firestore"
import { useGetOneDocumentById } from '../hooks/useGetDocumentById'


const ItemDetailContainer = () => {
    const { id } = useParams()

    const {product} = useGetOneDocumentById(id)
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
