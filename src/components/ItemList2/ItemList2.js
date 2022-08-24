import './ItemList2.css'
import Item from '../Item/Item'
import { memo } from 'react'

const ItemList2 = ({products }) => {
    return(
        <div className='ListGroup2'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>    
    )
}

export default memo(ItemList2)