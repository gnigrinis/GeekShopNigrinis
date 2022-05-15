import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from './components/ItemDetail';
import AppContextProvider from './context/AppContext';
import Cart from './components/Cart';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <CartContextProvider>
      <AppContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Welcome to Geek Shop"/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/itemDetail/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/shop/' element={<ItemDetail/>}/>
            <Route path='/cart/' element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </CartContextProvider>
  );
}

export default App;
