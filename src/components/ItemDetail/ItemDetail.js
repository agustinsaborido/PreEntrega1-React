import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, stock, price, category, description, img})=>{
    return(
        <article className= "CardItem">
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
                   <strong> Precio: ${price} </strong>
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}></ItemCount>
            </footer>
        </article>
    )
}

export default ItemDetail