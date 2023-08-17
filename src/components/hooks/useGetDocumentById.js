
import { doc, getDoc, getFirestore, collection, getDocs, where, query } from "firebase/firestore"
import { useEffect, useState } from "react"

export function useGetDocumentById(collectionName, categoryId){
    const [products, setProducts] = useState([])

    
    useEffect(() => {
        const db = getFirestore()
        if (categoryId){
            const destacadosCollection = collection(db, "items")
            const conditionDestacados = where(collectionName, "==", categoryId)
    
            const q = query(destacadosCollection, conditionDestacados)
    
            getDocs(q).then((snapshot) => {
                if(snapshot.size > 0){
                    const items = snapshot.docs.map((doc) => {
                        return {
                            id: doc.id,
                            ...doc.data()
                        }
                    })
    
                    setProducts(items)
                }
            })
        }else{
            const itemCollection = collection(db, "items")
        getDocs(itemCollection).then((snapshot) => {
            if(snapshot.size > 0){
                const items = snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setProducts(items)
            }
        })
        }

    }, [categoryId])

    return(
        {products}
    )
}

export function useGetOneDocumentById(id){
    const [product, setProduct] = useState({})

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

    return(
        {product}
    )
}