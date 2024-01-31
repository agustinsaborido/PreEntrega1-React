import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductByCategory} from '../../serverMock/productMock'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import Spinner from '../commons/Spinner'


const ItemListContainer = ({greeting}) =>{
    const [items, setItems] = useState([])
    const {categoryId}= useParams();
    const [isLoading, setIsLoading] = useState(false)
// agregar el de error//

    useEffect (()=>{

    const fetchProducts = async ()=> {

        const asyncFunc = categoryId ? getProductByCategory : getProducts;
        setIsLoading(true);

        try{
            const res = await asyncFunc(categoryId);
            setItems(res);
            setIsLoading(false)
        } catch(err) {
            console.log(err.message)
            setIsLoading(false)
        }
    };
    fetchProducts();
},[categoryId, setIsLoading]);

if (isLoading) return <Spinner isLoading={isLoading}/>;
    return(
        <div className="title">
            <h1>{greeting}</h1>
            <ItemList items={items}/>
        </div>
    )
}
export default ItemListContainer