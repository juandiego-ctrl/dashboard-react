import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar incluye el DropdownSidebar
import Home from './pages/Home';
import Sales from './pages/Sales';
import Clients from './pages/Clients';
import './App.scss';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/ejemplo" element={<Ejemplo />}/>
          
        </Routes>
      </div>
      <Footer />
      
    </Router>
  );
}

export default App;

