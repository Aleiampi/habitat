import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <NavBar />


      </header>
      <ItemListContainer greeting={"Coming soon..."} />
    </div>
  );
}

export default App;
