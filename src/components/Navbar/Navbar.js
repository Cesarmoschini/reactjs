import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <Link to='/' className="OptionMenu">
                Menú principal
            </Link>
            <div className="Categories">
                <Link to='/category/clasico' className="Option">Clásicos</Link>
                <Link to='/category/suave' className="Option">Suaves</Link>
                <Link to='/category/intenso' className="Option">Intensos</Link>
            </div>
            <CartWidget />
        </nav>
        
    )
}

export default Navbar