import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

export default function StockPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    { id: 1, name: 'AI Art', price: 49.99, category: 'AI Tools', img: 'https://via.placeholder.com/300x200?text=AI+Art', desc: 'Create stunning AI-generated art' },
    { id: 2, name: 'Design Toolkit', price: 29.99, category: 'Design', img: 'https://via.placeholder.com/300x200?text=Design+Toolkit', desc: 'Professional design resources' },
    { id: 3, name: 'Tech Gadget', price: 99.99, category: 'Creative Tools', img: 'https://via.placeholder.com/300x200?text=Tech+Gadget', desc: 'Latest tech innovation' },
    { id: 4, name: 'Creative Suite', price: 79.99, category: 'Creative Tools', img: 'https://via.placeholder.com/300x200?text=Creative+Suite', desc: 'All-in-one creativity tools' },
    { id: 5, name: 'AI Tools', price: 39.99, category: 'AI Tools', img: 'https://via.placeholder.com/300x200?text=AI+Tools', desc: 'Essential AI-powered utilities' },
    { id: 6, name: 'Design Essentials', price: 19.99, category: 'Design', img: 'https://via.placeholder.com/300x200?text=Design+Essentials', desc: 'Basic design resources' },
    { id: 7, name: 'Design Essentials', price: 19.99, category: 'Design', img: 'https://via.placeholder.com/300x200?text=Design+Essentials', desc: 'Basic design resources' },
    { id: 8, name: 'Design Essentials', price: 19.99, category: 'Design', img: 'https://via.placeholder.com/300x200?text=Design+Essentials', desc: 'Basic design resources' },
  ];

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = activeTab === 'All' || product.category === activeTab;
    return matchSearch && matchCategory;
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleProceed = (product) => {
    setCart([...cart, product]);
  };

  const handleProductClick = (product) => {
    if (!selectedProduct) setSelectedProduct(product);
    setHoveredProduct(null);
  };
  useEffect(()=>{
    
  },[])

  const handleCloseTab = () => setSelectedProduct(null);

  const tabs = ['All', 'AI Tools', 'Creative Tools', 'Design'];

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden font-sans">
      <Header showCart={true} cartCount={cart.length} />

      <div className="relative w-full text-center px-4 z-10 min-h-screen flex flex-col items-center pt-24">
        <div className="bg-black text-white px-4 py-2 rounded-lg text-sm font-bold mb-6 shadow-md">
          SHOP OUR PRODUCTS
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-4 animate-fade-in-up">
          Discover Creative Tools
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 font-semibold mb-8 animate-fade-in-up delay-200">
          All in one place
        </p>

        <form className="w-full max-w-3xl mx-auto mb-6 animate-fade-in-up delay-300">
          <div className="flex items-center shadow-lg rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 text-lg border-none focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white p-4 hover:bg-gray-900 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1112 3.5a7.5 7.5 0 014.65 13.15z"></path>
              </svg>
            </button>
          </div>
        </form>

        {/* Tabs */}
        <div className="flex space-x-4 mb-10 animate-fade-in-up delay-400">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition shadow-md ${
                activeTab === tab
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6 w-full max-w-7xl mx-auto mb-20">
          {filteredProducts.map((product) => (
            <Link to="/custom" key={product.id}>
              <div
                onMouseEnter={() => setHoveredProduct(product)}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => handleProductClick(product)}
                className={`relative overflow-hidden rounded-2xl shadow-xl transition-transform transform hover:scale-105 h-[380px] ${
                  product.id <= 3 ? 'bg-gray-900' : 'bg-teal-100'
                } flex flex-col justify-end`}
              >
                <img src={product.img} alt={product.name} className="absolute inset-0 w-full h-full object-cover opacity-90" />
                <div className="relative z-10 bg-black bg-opacity-40 text-white text-center p-4">
                  <h2 className="text-2xl font-bold mb-1">{product.name}</h2>
                  <p className="text-sm mb-3">{product.desc}</p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600 transition"
                  >
                    Add to Cart – ${product.price}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Product Preview */}
        {(hoveredProduct || selectedProduct) && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-2xl bg-white bg-opacity-95 rounded-xl p-6 shadow-2xl z-20 animate-slide-up">
            <p className="text-lg text-gray-800 mb-4">
              {(selectedProduct || hoveredProduct)?.desc}
            </p>
            <div className="flex justify-between items-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleProceed(selectedProduct || hoveredProduct);
                }}
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
              >
                Proceed
              </button>
              {selectedProduct && (
                <button
                  onClick={handleCloseTab}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
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
