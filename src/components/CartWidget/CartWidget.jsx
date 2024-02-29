import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cartWidget.css'
import CartContext from '../context/CartContext';
import { useContext } from "react";
import {sumaQuantities} from '../../utils/sumQuantitiesCart';

function CartWidget ( {number, clickEnCarrito, isShowModal} ) {
  const {itemsCart} = useContext(CartContext); 
  return(
    <div className='containerCart' >
      <ShoppingCartIcon className='cartIcon' />
      <span className='cartNumber' > {sumaQuantities(itemsCart)} </span>
    </div>
    );
}

export default CartWidget





// import React, { useContext } from 'react';
// import CartContext from '../context/CartContext';

// const CartWidget = () => {
//   const { cart } = useContext(CartContext);

//   // Calcula la cantidad total de artículos en el carrito
//   const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <div className="cart-widget">
//       <i className="fa fa-shopping-cart"></i>
//       {totalItems > 0 && <span className="badge">{totalItems}</span>}
//     </div>
//   );
// };

// export default CartWidget;
