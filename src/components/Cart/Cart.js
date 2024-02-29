import './Cart.css'
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'


const Cart = () =>{
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if(totalQuantity === 0) {

        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            {/* { cart.map (p => <CartItem key={p.id} {...p}/>) } */} <h2>Acá iría el desglose de la compra</h2>
            {/* {(Cart => <itemsCart key={item.id} {...item}/>) } */}
            <h3>Total:${total}</h3>
            <button className="Button">Limpiar carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )
}

export default Cart;
































// 2)

// import React, { useContext } from 'react';
// import  CartContext  from '../context/CartContext';

// const Cart = () => {
//   const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

//   const handleIncreaseQuantity = (productId) => {
//     increaseQuantity(productId);
//   };

//   const handleDecreaseQuantity = (productId) => {
//     decreaseQuantity(productId);
//   };

//   const calculateTotal = () => {
//     return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
//   };

//   return (
//     <div className="cart">
//       <h2>Cart</h2>
//       <div className="cart-items">
//         {cart.map(item => (
//           <div key={item.id} className="cart-item">
//             <img src={item.image} alt={item.name} />
//             <div className="item-details">
//               <span className="name">{item.name}</span>
//               <span className="price">{item.price}</span>
//               <div className="quantity-controls">
//                 <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
//                 <span className="quantity">{item.quantity}</span>
//                 <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="total">
//         Total: ${calculateTotal()}
//       </div>
//     </div>
//   );
// };

// export default Cart;









































// 3)

// import { useState, useEffect } from "react"
// import Loading from "../Loading"

// const Cart = () => {

//   const [loading, setLoading] = useState(true)

//   const [elementos, setElementos] = useState([])


//   useEffect(() => {
//     setTimeout(() => {
//       setElementos(["Producto A", "Producto B", "Producto C"])
//       setLoading(false)

//     }, 2000);


//   }, [])


//   if (loading) {

//     return <Loading />

//   }

//   return (

//     <div>

//       <h2>Lista de productos</h2>

//       <ul>

//         {

//           elementos.map((e) => (

//             <li key={e}>{e}</li>

//           ))

//         }

//       </ul>
//     </div>
//   )
// }

 

// export default Cart;










