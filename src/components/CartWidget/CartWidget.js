import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()
    return(
        <Link to='/cart' className="CartWidget" style={{textDecoration:"none", color:"brown"}}>
            <img className="Image" src="images/carrito.png" alt='CartWidget'/>
            { quantity }
        </Link>
    );
}

export default CartWidget