import './App.css';
/* import { BrowserRouter, Routes, Route } from 'react-router-dom' */
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <NavBar />
    
    <Routes>
    <Route path='/' element= {
      <ItemListContainer greeting={' "Pase Maestro, lo estabamos esperando" '}/> } />
    <Route path='/category/:categoryId' element={ <ItemListContainer /> } /> 
    <Route path='/item/:itemId' element={ <ItemDetailContainer /> } />
    <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
    </Routes>
    <ItemCount initial={1} stock={20} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
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