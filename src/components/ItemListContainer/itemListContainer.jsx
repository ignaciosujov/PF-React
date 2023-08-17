import { useEffect, useState } from "react";
import ItemList from "../ItemList/itemList";
import ItemDetailContainer from "../ItemDetailContainer/itemDetailContainer";
import { getProducts } from "../../mock/dataProducts";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore, collection, getDocs, where, query } from "firebase/firestore"
import { useGetDocumentById } from "../hooks/useGetDocumentById";


function ItemListContainer(){
    const { categoryId } = useParams()
    
    const {products} = useGetDocumentById("category", categoryId)

    let categoryName = ""

        if(categoryId === "vendidos"){
            categoryName = "más vendidos"
        }else{
            categoryName = categoryId
        }
    

    return(
        <div>
            <h2>Lista de Productos <span>{categoryName}</span>:</h2>
            <ItemList products={products}></ItemList>
        </div>
    )
}


export default ItemListContainer;



// CODIGOS ANTIGUOS

    // const [product, setProduct] = useState([])


    /* useEffect(() => {
        const db = getFirestore()

        const itemsRef = doc(db, "items", "GhYwoi1z6FjuBVf0nufv")
        getDoc(itemsRef).then((snapshot) => {
            if (snapshot.exists()){
                const product = {
                    id: snapshot.id, ...snapshot.data()
                }

                setProduct(product)
            }
        })
    }, []) */

    /* useEffect(() => {
        const db = getFirestore()

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
    })

    if (!products){
        return <div>Loading...</div>
    } */

/*     useEffect(() => {
        getProducts()
        .then((res) => {
            if (categoryId){
                setProducts(res.filter((item) => item.category === categoryId))
            }else{
                setProducts(res)
            }
        })
        .catch((err) => console.log(err))
    }, [categoryId])
 */