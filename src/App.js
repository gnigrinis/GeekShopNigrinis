import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from './components/ItemDetail';
import CartContextProvider from './context/CartContext';
import AppContextProvider from './context/AppContext';

function App() {
  return (
    <AppContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Welcome to Geek Shop"/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/itemDetail/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/shop/' element={<ItemDetail/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </AppContextProvider>
  );
}

export default App;
