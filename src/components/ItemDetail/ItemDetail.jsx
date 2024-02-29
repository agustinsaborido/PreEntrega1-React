import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react';
import Button from '../commons/Button/Button'
import {Link} from 'react-router-dom'
import React from 'react';
import CartContext from '../context/CartContext';

const ItemDetail = ({id, name, stock, category, description, img, price})=>{
const {addItems} = useContext(CartContext);
const [quantityAdded, setQuantityAdded] = useState(0)

const handleOnAdd = (quantity) => {
    setQuantityAdded (quantity)
    const item = {
        price,
        name,
        quantity,
    };
    addItems(item);
};
    return(
        
        <article className= "CardItem" key={id}>
            {/* <img src={img} alt={name}/>
            <h3>{name}</h3>
            <p>Descripción: {description}</p>
            <p>stock: {stock}</p>
            <p>category:{category}</p>
            <div className="actionCardDetail">
                <Button>Terminar Compra</Button>
                <ItemCount onAdd={handleOnAdd}/>
            </div> */}

            <header className="Header">
                <h2 className="Itemheader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoría: {category}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                    <Link to="/cart">
                    <Button>Terminar Compra</Button>
                    </Link>
                    ) : (
                    <ItemCount  initial={0} stock={stock} onAdd={handleOnAdd}/>
                    )
                } 
            </footer> 
            
        </article>
    );
};

export default ItemDetail;
