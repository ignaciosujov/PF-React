import { useParams } from "react-router-dom";
import './catalog'



function ProductDetail(){
const {id} = useParams()



    return(
        <div>
            Producto: {id}
        </div>
    )
}

export default ProductDetail;