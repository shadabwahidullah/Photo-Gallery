import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import MyNavbar from './components/Navbar';
import TargetCollection from './components/target_collection/TargetCollection';

function App() {
  return (
    <div className="container-fluid p-0">
      <header className="App-header">
        <MyNavbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/target" element={<TargetCollection />}>
          <Route path=":collectionId" element={<TargetCollection />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
