import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './Components/ItemCount/ItemCount';
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <NavBar />


      </header>
      <ItemListContainer  />

      <ItemCount stock={5} initial={1}/>
    </div>

  );
}

export default App;
