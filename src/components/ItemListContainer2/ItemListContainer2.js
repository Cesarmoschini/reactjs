import './ItemListContainer2.css'
import ItemList2 from '../ItemList2/ItemList2'
import { useParams } from 'react-router-dom' 
import { getProducts2 } from '../../services/firebase/firestore'
import { useAsync } from '../../hooks/useAsync'

const ItemListContainer2 = ({ greeting2 }) => {
    const { originId } = useParams()
    const getProductsFromFirestore = () => getProducts2(originId)
    const { data, error, isLoading } = useAsync(getProductsFromFirestore, [originId])

    if(isLoading) {
        return <h1>Cargando cápsulas...</h1>
    }

    if(error) {
        return <h1>Error</h1>
    }

    if(data.length === 0) {
        return originId ? <h1>No hay cápsulas de {originId} como origen</h1> : <h1>No hay cápsulas disponibles</h1>
    }

    return (
        <div>
            <h1>{`${greeting2} ${originId || ''}`}</h1>
            <ItemList2 products={data} />
        </div>
    )
}

export default ItemListContainer2