import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login/login';
import Contact from './pages/Contact/contact';
import Home from './pages/Home/Home';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Route for the root path */}
      <Route path="/Home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} /> 
    </Routes>
  );
};

export default App;