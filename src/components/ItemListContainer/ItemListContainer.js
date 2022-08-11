import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory} from "../../AsyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom' 

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        
        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [categoryId])



    return (
        <div>
            <h1>{`${greeting} ${categoryId || ''}`}</h1>

            <ItemList products={products} />
        </div>
    )
}


export default ItemListContainer