import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {

    const text = 'Se hizo click en el botón'
    const click = () =>{
        console.log(text)
    }

    return (
        <nav className="Navbar">
            <img className="logo" src="images/capsulas2.png"/>
            <div>
                <h1>Seleccionador de cápsulas</h1>
            </div>
            <div>
                <Button click={click} label = 'Inicio' bgcolor = 'brown'/>
                <Button click={click} label = 'Productos' bgcolor = 'brown'/> 
                <Button click={click} label = 'Contacto' bgcolor = 'brown'/>
                <Button click={click} label = 'Sobre Nosotros' bgcolor = 'brown'/> 
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar