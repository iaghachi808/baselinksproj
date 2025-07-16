import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import landingpage from './Landingpage';
import stock from './Stock';
import CartPage from './CartPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<landingpage />} />
        <Route path="/ProductPage" element={<stock />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;