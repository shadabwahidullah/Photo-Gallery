import './App.css';
import Home from './components/Home';
import MyNavbar from './components/Navbar';

function App() {
  return (
    <div className="container-fluid p-0">
      <header className="App-header">
        <MyNavbar />
      </header>
      <Home />
    </div>
  );
}

export default App;
