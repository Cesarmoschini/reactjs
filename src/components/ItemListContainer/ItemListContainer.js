import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts} from '../../AsyncMock'

import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ saludo }) => {
    const [productos, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(productos => {
            setProducts(productos)
        })
    }, [])

    return (
        <>
            <h1>{saludo}</h1>
            <ItemList productos={productos}/>
        </>

    )
}

export default ItemListContainer
