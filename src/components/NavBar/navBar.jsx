import CartWidget from '../CartWidget/cartWidget';
import NavBarContent from './navBarContent';
import Logo from '../Logo/logo';
import { useState } from 'react';
import '../HomeContent/homeContent'
import { NavDropdown} from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { NavLink } from 'react-router-dom'





function NavBar() {
    const [ contadorCarrito ] = useState(0)


    return(
    <nav className='navBar'>
        <Logo></Logo>
        <ul>
            <NavBarContent />
            <NavDropdown title="Productos" id='basic-nav-dropdown'>
                <DropdownItem className='dropDownItem' as={NavBarContent} titulo='Todos los productos' url='/productos'> </DropdownItem>
                <DropdownItem className='dropDownItem' as={NavBarContent} titulo='Destacados' url='/productos/category/destacados' ></DropdownItem>
                <DropdownItem className='dropDownItem' as={NavBarContent} titulo='Nuevos' url='/productos/category/nuevos' ></DropdownItem>
                <DropdownItem className='dropDownItem' as={NavBarContent} titulo='Mas vendidos' url='/productos/category/vendidos' ></DropdownItem>
            </NavDropdown>
            <NavBarContent titulo='Nosotros' url='/nosotros'></NavBarContent>
            <NavBarContent titulo='Contacto' url='/contacto' />
            <NavLink to="/cart"><CartWidget></CartWidget></NavLink>
        </ul>
    </nav>
    )
}

export default NavBar;



{/* <DropdownItem><NavBarContent titulo='Todos los productos' url='/productos' /></DropdownItem>
<DropdownItem><NavBarContent titulo='Destacados' url='/productos/category/destacados' /></DropdownItem>
<DropdownItem><NavBarContent titulo='Nuevos' url='/productos/category/nuevos' /></DropdownItem>
<DropdownItem><NavBarContent titulo='Mas vendidos' url='/productos/category/vendidos' /></DropdownItem>
 */}