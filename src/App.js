import './App.css';
import Collection from './components/Collection';
import Home from './components/Home';
import MyNavbar from './components/Navbar';

function App() {
  return (
    <div className="container-fluid p-0">
      <header className="App-header">
        <MyNavbar />
        <Home />
        <Collection />
      </header>
    </div>
  );
}

export default App;
