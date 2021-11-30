import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blogs from './Pages/Blogs/Blogs';
import ContactMe from './Pages/ContactMe/ContactMe';
import Home from './Pages/Home/Home/Home';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path={"/details/:id"} element={<ProjectDetails />}>
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
