import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {


  return (
      <nav className="NavBar" >
          <Link to='/' style={{textDecoration:"none", color:"brown"}} >
              <h3>Seleccionador de cápsulas</h3>
          </Link>
            <div className="Categories">
                <NavLink to='/category/clasico' style={{textDecoration:"none", color:"white"}} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Clásicos</NavLink>
                <NavLink to='/category/suave' style={{textDecoration:"none", color:"white"}} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Suaves</NavLink>
                <NavLink to='/category/intenso' style={{textDecoration:"none", color:"white"}} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Intensos</NavLink> 
            </div>
            <div className="origins">
                <NavLink to='/origin/Argentina' style={{textDecoration:"none", color:"white"}} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Argentina</NavLink>
                <NavLink to='/origin/Francia' style={{textDecoration:"none", color:"white"}} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Francia</NavLink>
                <NavLink to='/origin/Italia' style={{textDecoration:"none", color:"white"}} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Italia</NavLink> 
            </div>
          <CartWidget/>
      </nav>
  )
}

export default NavBar