import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './Components/ItemCount/ItemCount';
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Containers/ItemListContainer';

import ItemDetailContainer from './Containers/ItemDetailContainer'

function App() {

  const categories = ["Women", "Men", "Jewerly", "Electronics"]
  return (
    <div className="App">
      <header className="App-header">

        <NavBar categories={categories}/>


      </header>
      {/* <ItemListContainer  /> */}

      {/* <ItemCount stock={5} initial={1}/> */}

      <ItemDetailContainer />
    </div>

  );
}

export default App;
