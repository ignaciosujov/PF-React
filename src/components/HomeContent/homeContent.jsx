import { useEffect, useState } from 'react'
import './homeContent.css'
import { Link } from 'react-router-dom'
import { collection, getFirestore, where, getDocs, query } from 'firebase/firestore'




function HomeContent(){

        const [products, setProducts] = useState([])

        useEffect(() => {
            const db = getFirestore()

            const destacadosCollection = collection(db, "items")
            const conditionDestacados = where("category", "==", "destacados")

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
        }, [])

        return(
            <div className='bodyHomeContent'>
                <div id='productos'>
                    <h2>Encuentra tu brillo interior</h2>
                </div>
                <div className="row">
                    {products.map(product => (
                        <div className="col cardHome1">
                            <div>
                                <img src={product.img} />
                            </div>
                            <div className='cardContent'>
                                <h4>{product.name}</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, consequatur aliquam illo ducimus fugit distinctio!</p>
                                <Link key={product.id} to={`/productos/item/${product.id}`}>Ver más</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            )
    }
    
    
    export default HomeContent


    // CODIGOS ANTIGUOS


    // const PRODUCTS = [{id: 1, name: "lamapara1", img: "https://i.pinimg.com/236x/a3/cf/2d/a3cf2da508b89d3e4c5cd6eef721ed4c.jpg"}, {id: 2, name: "lampara2", img: "https://i.pinimg.com/236x/48/89/94/4889941154a9e83d935b420c41431bff.jpg"}, {id: 3, name: "lampara3", img: "https://i.pinimg.com/236x/f4/dd/9f/f4dd9f105db1d75f4055f51a58ef9cfe.jpg"}]

        /* return(
        <div className='bodyHomeContent'>
            <div id='productos'>
                <h2>Encuentra tu brillo interior</h2>
            </div>
            <div className="row">
                {PRODUCTS.map(product => (
                    <div className="col cardHome1">
                        <div>
                            <img src={product.img} />
                        </div>
                        <div className='cardContent'>
                            <h4>{product.name}</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, consequatur aliquam illo ducimus fugit distinctio!</p>
                            <Link key={product.id} to={`/productos/item/${product.id}`}>Ver más</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        ) */


    {/* <div className='bodyHomeContent'>
        <div>
            <h2>Encuentra tu brillo interior</h2>
        </div>
        <div className="row">
            <div className="col cardHome1">
                <div>
                    <img src="https://i.pinimg.com/236x/a3/cf/2d/a3cf2da508b89d3e4c5cd6eef721ed4c.jpg"></img>
                </div>
                <div className='cardContent'>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing.</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, consequatur aliquam illo ducimus fugit distinctio!</p>
                    <Link to="/productos">Ver más</Link>
                </div>
            </div>
            <div className="col cardHome2">
                <div>
                    <img src="https://i.pinimg.com/236x/48/89/94/4889941154a9e83d935b420c41431bff.jpg"></img>
                </div>
                <div className='cardContent'>
                    <h4>Lorem ipsum dolor sit.</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, consequatur aliquam illo ducimus fugit distinctio!</p>
                    <Link to="/productos">Ver más</Link>
                </div>
            </div>
            <div className="col cardHome3">
                <div>
                    <img src="https://i.pinimg.com/236x/f4/dd/9f/f4dd9f105db1d75f4055f51a58ef9cfe.jpg"></img>
                </div>
                <div className='cardContent'>
                    <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, consequatur aliquam illo ducimus fugit distinctio!</p>
                    <Link to="/productos">Ver más</Link>
                </div>
            </div>
        </div>
    </div> */}