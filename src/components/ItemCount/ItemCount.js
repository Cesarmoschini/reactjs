import './ItemCount.css'
import { useState, useEffect } from 'react'

const ItemCount = ({stock = 0, initial = 10, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   useEffect(() => {
    setQuantity(initial)
}, [initial])


   const increment = () => {
       if(quantity < stock) {
           setQuantity(quantity+10)
       }
   }

   const decrement = () => {
       if(quantity > 10) {
           setQuantity(quantity - 10)
       }     
   }

   return(
       <div className='Counter'>          
            <div className='Controls'>
                <button  style={{background:"#aa4704", color:"white"}} className="Button" onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button style={{background:"#aa4704", color:"white"}} className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button style={{background:"#aa4704", color:"white"}} className="Button" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
       </div>
   )

}
export default ItemCount