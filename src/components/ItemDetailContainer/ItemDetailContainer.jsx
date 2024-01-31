import './ItemDetailContainer.css'
import { useState, useEffect } from 'react' 
import { getProductById } from '../../serverMock/productMock'
import { useParams } from 'react-router-dom'
import Item from '../Item/Item'

function ItemDetailContainer () {
    const { itemId } = useParams()
    const [producDetail, setProductDetail] = useState(null);

    useEffect(() => {
        getProductById(itemId).then((res) => setProductDetail(res));
        },[itemId]);

    return (
        <div className='containerDetail'>
            {producDetail && <Item {...producDetail} />}
        </div>
    );
}

export default ItemDetailContainer;

