import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactMe from './Pages/ContactMe/ContactMe';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
