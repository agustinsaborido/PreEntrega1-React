import { useState } from 'react'
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd})=> {
    const[quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className='itemCountContainer'>
            <div className='buttonsContainer'>
                <button className="decrementButton" onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className="incrementButton" onClick={increment}>+</button>
            </div>
            <div>
                <button className='cartButton' onClick={() => onAdd(quantity)} disable={!stock}>
                    Agrega al carrito
                </button>
            </div>
        </div>
    )
}
export default ItemCount;