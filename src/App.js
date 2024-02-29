import './App.css';
/* import { BrowserRouter, Routes, Route } from 'react-router-dom' */
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <>
    <NavBar />
    
    <Routes>
    <Route path='/' element= {
      <ItemListContainer greeting={' "Pase Maestro, lo estabamos esperando" '}/> } />
    <Route path='/category/:categoryId' element={ <ItemListContainer /> } /> 
    <Route path='/item/:itemId' element={ <ItemDetailContainer /> } />
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/checkout' element={<h1>Acá iría el Checkout</h1>}/>
    <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
    </Routes>
    {/* <ItemCount initial={0} stock={20} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/> */}
    </>
  );
}

export default App;





/*

<BrowserRouter>
<NavBar />
<Routes>
<Route path='/' element={<ItemListContainer />}/>
<Route path='/category/:categoryId' element={<ItemListContainer />}/>
<Route path='/item/:itemId' element={<ItemDetailContainer />}/>
<Route path='*' element={<h1>404 NOT FOUND</h1>}/>
</Routes>
</BrowserRouter> 

*/































// import { useState, useEffect } from "react"

// import Loading from "./components/Loading"

 

 

// const App = () => {

//   const [loading, setLoading] = useState(true)

//   const [elementos, setElementos] = useState([])

 

 

//   useEffect(() => {

 

//     setTimeout(() => {

//       setElementos(["Producto A", "Producto B", "Producto C"])

//       setLoading(false)

//     }, 5000);

 

//   }, [])

 

//   if (loading) {

//     return <Loading />

//   }

 

//   return (

//     <div>

//       <h2>Lista de productos</h2>

//       <ul>

//         {

//           elementos.map((e) => (

//             <li key={e}>{e}</li>

//           ))

//         }

//       </ul>

 

//     </div>

//   )

// }

 

// export default React.memo(App)