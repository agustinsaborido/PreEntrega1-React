import React from 'react';
import './Item.css'
import {Link} from 'react-router-dom'


function Item({id, name, stock, category, description, img, price}) {

    return(
        <article className='CardItem' key={id}>
         <picture>
            <img src={img} alt={name} />
         </picture>
         <header className="Header">
            <h3 className="Itemheader">{name}</h3>
         </header>
         <section>
            {/* <p className="info">Categoría: {category}</p> */}
            
            <p className="info">{` Stock: ${stock} `}</p>
            <p className="info">{` Precio: ${price} `}</p>
         </section>
         <Link to={`item/${id}`} className="Detalle">VER DETALLE</Link>
         
        </article>
    );
}
export default Item


// <article className="CardItem">
// <header className="Header">
//     <h2 className="Itemheader">
//         {name}
//     </h2>
// </header>
// <picture>
//     <img src={img} alt={name} className="ItemImg"/>
// </picture>
// <section>
//     <p className="Info">
//        <strong> Precio: ${price} </strong>
//     </p>
//     <p className="Info">
//         Stock disponible: {stock}
//     </p>
// </section>
// <footer className="ItemFooter">
// <Link to= { `/item/${id}` } className = 'Option'>Ver detalle</Link>
// </footer>
// </article>