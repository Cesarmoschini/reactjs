import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';

function App() {
  const handleOnAdd = (cantidad) => {
  console.log(`La cantidad seleccionada es: ${cantidad}`)
  }
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer saludo='Bienvenido al seleccionador de cápsulas'/>
      <Counter inventario = {22} onAdd={handleOnAdd}/>
    </div>
  );

}

export default App;