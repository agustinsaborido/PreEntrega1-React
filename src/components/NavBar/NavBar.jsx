import CartWidget from "../CartWidget/CartWidget"
import './navBarStyle.css'
import Logo from '../../assets/escudorojo.png'

const NavBar = () =>{
    return(
        <div className="navBar">
            <img src= {Logo} alt="logo" className="logo" />
        <nav>
            
            <button>Hombres</button>
            <button>Mujeres</button>
            <button>Niños</button>
            
        </nav>
        <CartWidget number = {7} />
        </div>
    )
}

export default NavBar