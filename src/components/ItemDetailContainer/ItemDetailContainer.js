import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../AsyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])


    return(
        <div className='ItemDetailContainer' >
            {loading ? <h1>Cargando...</h1> : <ItemDetail {...product} />}
        </div>
    )
}

export default ItemDetailContainer