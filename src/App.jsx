import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landingpage from './Landingpage';
import Stock from './Stock';
import CartPage from './CartPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/stock" element={<Stock />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;