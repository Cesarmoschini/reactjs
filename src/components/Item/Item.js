import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price}) => {
    const handleClick = (e) => {
        e.stopPropagation()
        console.log('hice click en item')
    }

    return (
        <article className="CardItem" onClick={handleClick}>
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Presentación de 10 unidades
                </p>
                <p className="Info">
                    Precio unitario: ${price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <Link to={`/detail/${id}`} className='Option'>Detalle del producto</Link>
            </footer>
        </article>
    )
}

export default Item