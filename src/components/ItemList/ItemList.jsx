import './ItemList.css'
import Item from '../Item/Item'
import { Link } from 'react-router-dom';

function ItemList ( {items} ) {
    return(
        <div className="ListItems">
            {items.map(item => {
            return (
            <Link to={`/item/${item.id}`}>
                <Item {...item}/>
            </Link>
            );
            })}
        </div>
    );
}

export default ItemList;