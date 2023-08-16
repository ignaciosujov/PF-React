import { GiFlexibleLamp } from "react-icons/gi";
import { Link } from "react-router-dom";

function Logo(){
    return(
        <Link to="/" className="logo">
            <GiFlexibleLamp className="logoLamp"></GiFlexibleLamp>
            <span>Tu luz interior</span>
        </Link>
        
        )
    }
    
    
export default Logo