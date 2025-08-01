import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Clientpage from './pages/Clientpage';
import Landingpage from './pages/Landingpage';
import Stock from './pages/Stock';
import CartPage from './pages/CartPage';
import Productdetails from './pages/productdetails';
import Loginsignup from './pages/Loginsignup';

import AdminPage from './pages/admin/AdminPage';


function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/admin2" element={<AdminPage />} />
        <Route path="/login" element={<Loginsignup />} />
        <Route path="/custom" element={<Productdetails />} />
        <Route path="/client" element={<Clientpage />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/cart" element={<CartPage />} />
        
      </Routes>
      
    </Router>
  );
}

export default App;