import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom' 
import { getProducts } from '../../services/firebase/firestore'
import { useAsync } from '../../hooks/useAsync'

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams()
    const getProductsFromFirestore = () => getProducts(categoryId)
    const { data, error, isLoading } = useAsync(getProductsFromFirestore, [categoryId])

    if(isLoading) {
        return <h1>Cargando cápsulas...</h1>
    }

    if(error) {
        return <h1>Error</h1>
    }

    if(data.length === 0) {
        return categoryId ? <h1>No hay cápsulas en esta categoria {categoryId}</h1> : <h1>No hay cápsulas disponibles</h1>
    }

    return (
        <div onClick={() => console.log('click en itemlistcontainer')}>
            <h1>{`${greeting} ${categoryId || ''}`}</h1>
            <ItemList products={data} />
        </div>
    )
}

export default ItemListContainer