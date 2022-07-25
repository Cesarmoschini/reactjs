import { useState } from 'react'


const Counter = ({ inventario, sobrante, onAdd }) => {
    const [count, setCount] = useState(1)
    const increment = () => {
        if(count < inventario ) {
            setCount(count + 1)
            sobrante = inventario - count -1
            console.log(`Sobran ${sobrante} unidades en el inventario`)
        }
    }

    const decrement = () => {
        if(count > 1) {
            setCount(count - 1)
            sobrante = inventario - count +1
            console.log(`Sobran ${sobrante} unidades en el inventario`)
        }
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}

export default Counter