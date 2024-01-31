import './navBarStyle.css'
import CartWidget from "../CartWidget/CartWidget"
import Logo from '../../assets/escudorojo.png'
import { Link } from 'react-router-dom'


function NavBar () {

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
        <CartWidget number = {7} />
        </div>
    )
}

export default NavBar
