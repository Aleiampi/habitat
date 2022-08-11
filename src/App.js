import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemCount from './Components/ItemCount/ItemCount';
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import Cart from './Components/Cart/Cart';
import ItemDetailContainer from './Containers/ItemDetailContainer'
import { useEffect, useState } from 'react';


function App() {

  // const categories = ["Women", "Men", "Jewerly", "Electronics"]

  const categories =     [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
    ]

  // const [categories, setCategories] = useState([])

  // useEffect (()=>{

  //   const getCats = fetch('https://fakestoreapi.com/products/categories')
  //   .then(res=>res.json())
  //   .then(json=>console.log(json))
  //   .then ((categories)=>{
  //     setCategories(categories)
  //     console.log("categorias= "+ categories)
  //   })

  // },[])

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
          <Route path="/cart" element={<Cart />} />


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
