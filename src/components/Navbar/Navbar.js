import './Navbar.css'

const Navbar = () => {

    return (
        <nav className="Navbar">
            <div>
                <h1>Seleccionador de cápsulas</h1>
            </div>
            <div>
                <button className="Button">Inicio</button>
                <button className="Button">Productos</button>
                <button className="Button">Contactos</button>
                <button className="Button">Sobre Nosotros</button>
            </div>
        </nav>
    )
}

export default Navbar