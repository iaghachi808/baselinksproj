import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ showCart = false, cartCount = 0 }) {
  return (
    <div className="header absolute top-4 left-6 flex items-center space-x-2 animate-fade-in-up">
      <img src="/src/assets/OIP.webp" alt="BASELINKS Logo" className="h-8 w-auto" />
      <Link to="/" className="text-2xl font-bold tracking-widest text-gray-900">BASELINKS</Link>
      <div className="absolute top-4 right-6 flex space-x-6 text-sm font-medium bg-white bg-opacity-90 p-2 rounded-lg shadow-md">
        <Link to="/home" className="text-black font-bold hover:text-teal-600 transition-colors duration-300 animate-fade-in-up delay-100">HOME</Link>
        <Link to="/about" className="text-black font-bold hover:text-teal-600 transition-colors duration-300 animate-fade-in-up delay-200">ABOUT</Link>
        <Link to="/phone" className="text-black font-bold hover:text-teal-600 transition-colors duration-300 animate-fade-in-up delay-300">PHONE</Link>
        <Link to="/products" className="text-black font-bold hover:text-teal-600 transition-colors duration-300 animate-fade-in-up delay-400">PRODUCTS</Link>
        <Link to="/contact" className="text-black font-bold hover:text-teal-600 transition-colors duration-300 animate-fade-in-up delay-500">CONTACT US</Link>
        {showCart && (
          <div className="relative animate-fade-in-up delay-600">
            <Link to="/cart" className="bg-orange-500 text-white px-3 py-1 rounded-md font-semibold hover:bg-orange-600 transition-colors duration-300">
              Cart ({cartCount})
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}