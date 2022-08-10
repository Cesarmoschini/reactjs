import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    return(
        <Link to='/cart' className="CartWidget">
            <img className="Image" src="images/carrito.png" alt='CartWidget'/>
            5
        </Link>
    );
}

export default CartWidget