import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {


  return (
      <nav className="NavBar" >
          <Link to='/'>
            <h3>Seleccionador de Cápsulas</h3>
          </Link>
            <div className="Categories">
                <NavLink to='/category/clasico' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Clásicos</NavLink>
                <NavLink to='/category/suave' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Suaves</NavLink>
                <NavLink to='/category/intenso' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Intensos</NavLink> 
            </div>
          <CartWidget />
      </nav>
  )
}

export default NavBar