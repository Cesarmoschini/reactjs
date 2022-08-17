import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory} from "../../AsyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom' 

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const [title, setTitle] = useState('Bievenidos al seleccionador de cápsulas')

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

    useEffect(() => {
        setTimeout(() => {
            setTitle('Elige una cápsula para comenzar con la compra')
        }, 7000)
    })

    if(loading) {
        return <h1>Cargando las cápsulas...</h1>
    }

    return (
        <div onClick={() => console.log('click en itemlistcontainer')}>
            <h1>{`${greeting} ${categoryId || ''}`}</h1>
            <h2>{title}</h2>
            {/* <button onClick={(e) => console.log(e)}>boton</button> */}
            <ItemList products={products} />
        </div>
    )
}


export default ItemListContainer