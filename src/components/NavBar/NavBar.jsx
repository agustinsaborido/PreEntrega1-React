import './navBarStyle.css'
import CartWidget from "../CartWidget/CartWidget"
import Logo from '../../assets/escudorojo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';



function NavBar () {
    const [isShowModal, setIsShowModal] = useState(false);

    const clickEnCarrito = () => {
      setIsShowModal(true);
    };

    return(
        <div className="navBar">
            <Link to= "/">
            <img src= {Logo} alt="logo" className="logo" />
            </Link>
            
        <nav>
        <ul className="categoryList">
            <li>
                <Link to="/category/mujeres">Mujeres</Link>
            </li>
            <li>
                <Link to="/category/hombres">Hombres</Link>
            </li>
            <li>
                <Link to="/category/niños">Niños</Link>
            </li>
                
        </ul>
        </nav>
        <CartWidget 
        number = {7}
        clickEnCarrito={clickEnCarrito}
        isShowModal={isShowModal}
        />
        </div>
    )
}

export default NavBar
