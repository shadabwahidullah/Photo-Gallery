import './App.css';
import Collection from './components/Collection';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Home />
        <Collection />
      </header>
    </div>
  );
}

export default App;
