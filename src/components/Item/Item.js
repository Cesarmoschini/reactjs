
const Item = ({producto}) => {
    return (
        <li>
            <h3>{producto.name}</h3>
            <img src={producto.image} alt={producto.name}/>
            <h4>El precio cada 10 unidades es de {producto.precio} pesos</h4>
        </li>
    )
}

export default Item