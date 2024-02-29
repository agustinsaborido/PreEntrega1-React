import './ItemDetailContainer.css'
import { useState, useEffect, useContext } from 'react' 
import { getProductById, products } from '../../serverMock/productMock'
import { useParams } from 'react-router-dom'
// import Item from '../Item/Item'
import ItemDetail from '../ItemDetail/ItemDetail'
import CartContext from '../context/CartContext'

function ItemDetailContainer () {
    const itemsCart = useContext (CartContext)
    console.log(itemsCart);
    const { itemId } = useParams()
    const [products, setProductDetail] = useState(null);

    useEffect(() => {
        getProductById(itemId).then((res) => setProductDetail(res));
        },[itemId]);

    return (
        <div className='containerDetail'>
            {products && <ItemDetail {...products} />}
            {/* {producDetail && <Item {...producDetail} />} */}
        </div>
    );
};

export default ItemDetailContainer;

