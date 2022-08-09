import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemCount from './Components/ItemCount/ItemCount';
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Containers/ItemListContainer';

import ItemDetailContainer from './Containers/ItemDetailContainer'

function App() {

  const categories = ["Women", "Men", "Jewerly", "Electronics"]
  return (
    <BrowserRouter>
        <header className="App-header">
          <NavBar categories={categories} />
        </header>

        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:category' element={<ItemListContainer/>} />
          <Route path="/product/:id" element={<ItemDetailContainer />}/>
          {/* <Route path="/carrito" element={<Carrito />}/> */}


        </Routes>
      {/* <div className="App">
        <header className="App-header">
          <NavBar categories={categories} />
        </header>
        {/* <ItemListContainer  /> */}

        {/* <ItemCount stock={5} initial={1}/> 

        <ItemDetailContainer />
      </div> */}
    </BrowserRouter>
  );
}

export default App;
