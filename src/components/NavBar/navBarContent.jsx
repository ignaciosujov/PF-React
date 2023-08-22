import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";


function NavBarContent({ titulo = "Home", url = "/"}){

    return (
        <li>
            <NavLink activeclassname="active" to={url}>{titulo}</NavLink>
        </li>
    )
}



export default NavBarContent;