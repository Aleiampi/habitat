import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import Cart from './Components/Cart/Cart';
import ItemDetailContainer from './Containers/ItemDetailContainer'
import CartProvider from './Context/CartContext';


function App() {

  const categories =     [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
    ]

  return (
    <CartProvider>

        <BrowserRouter>
            <header className="App-header">
              <NavBar categories={categories} />
            </header>

            <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/category/:category' element={<ItemListContainer/>} />
              <Route path="/product/:id" element={<ItemDetailContainer />}/>
              <Route path="/cart" element={<Cart />} />
            </Routes>

        </BrowserRouter>
        
    </CartProvider>
  );
}

export default App;
