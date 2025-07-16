import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

export default function StockPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    { id: 1, name: '', price: 49.99, img: 'https://via.placeholder.com/300x200?text=AI+Art', desc: 'Create stunning AI-generated art' },
    { id: 2, name: '', price: 29.99, img: 'https://via.placeholder.com/300x200?text=Design+Toolkit', desc: 'Professional design resources' },
    { id: 3, name: '', price: 99.99, img: 'https://via.placeholder.com/300x200?text=Tech+Gadget', desc: 'Latest tech innovation' },
    { id: 4, name: '', price: 79.99, img: 'https://via.placeholder.com/300x200?text=Creative+Suite', desc: 'All-in-one creativity tools' },
    { id: 5, name: '', price: 39.99, img: 'https://via.placeholder.com/300x200?text=AI+Tools', desc: 'Essential AI-powered utilities' },
    { id: 6, name: '', price: 19.99, img: 'https://via.placeholder.com/300x200?text=Design+Essentials', desc: 'Basic design resources' },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleProceed = (product) => {
    console.log('Proceed with:', product.name);
  };

  const handleProductClick = (product) => {
    if (!selectedProduct) {
      setSelectedProduct(product);
    }
    setHoveredProduct(null);
  };

  const handleCloseTab = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden font-sans">
      <Header showCart={true} cartCount={cart.length} />
      <div className="absolute inset-0 flex justify-center items-center">
        <img src="/src/assets/wallhaven-6d7ow6.jpg" alt="Background Image" className="object-cover w-full h-full opacity-50" />
      </div>
      <div className="relative w-full text-center px-4 z-10 min-h-screen flex flex-col items-center justify-center">
        <div className={`inline-block bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold mb-6 ${isVisible ? 'animate-pulse-slow' : ''}`}>
          SHOP OUR PRODUCTS
        </div>
        <h1 className={`text-4xl sm:text-6xl font-extrabold text-gray-900 mb-4 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          Discover Creative Tools
        </h1>
        <p className={`text-xl sm:text-2xl text-gray-700 font-semibold mb-8 ${isVisible ? 'animate-fade-in-up' : ''} delay-200`}>
          All in one place
        </p>
        <div className="w-full max-w-3xl mx-auto mb-12">
          <form action="/search" method="get" className={`flex items-center ${isVisible ? 'animate-fade-in-up' : ''} delay-300`}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              name="query"
              className="w-full p-3 text-lg rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md"
            />
            <button
              type="submit"
              className="bg-orange-600 text-white p-3 rounded-r-lg hover:bg-orange-700 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1112 3.5a7.5 7.5 0 014.65 13.15z"></path>
              </svg>
            </button>
          </form>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 w-full max-w-6xl mx-auto">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`rounded-lg p-8 relative overflow-hidden ${product.id % 2 === 0 ? 'bg-teal-200' : 'bg-orange-200'} text-gray-900 text-2xl font-bold text-center backdrop-blur-sm bg-opacity-90 border border-gray-200 h-48 flex items-center justify-center ${isVisible ? 'animate-fade-in-up' : ''} ${`delay-${product.id * 100}`}`}
              onMouseEnter={() => setHoveredProduct(product)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => handleProductClick(product)}
            >
              <img src={product.img} alt={product.name} className="absolute inset-0 w-full h-full object-cover opacity-100" />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center text-white text-sm font-medium opacity-0 hover:opacity-100">
                {product.desc}
              </div>
              <span className="relative z-10">{product.name}</span>
              <div className="absolute bottom-4 w-full text-center">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-orange-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-600 transition-colors duration-300"
                >
                  Add to Cart - ${product.price}
                </button>
              </div>
            </div>
          ))}
        </div>
        {(hoveredProduct || selectedProduct) && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-2xl bg-orange-100 bg-opacity-95 rounded-xl p-6 shadow-2xl z-20 animate-slide-up">
            <p className="text-lg text-orange-800 mb-4">{selectedProduct ? selectedProduct.desc : hoveredProduct.desc}</p>
            <div className="flex justify-between items-center">
              <button
                onClick={() => handleProceed(selectedProduct || hoveredProduct)}
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300"
              >
                Proceed
              </button>
              {selectedProduct && (
                <button
                  onClick={handleCloseTab}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-300"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}