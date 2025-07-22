import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

function Productdetails() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sample products data (mimicking StockPage)
  const products = [
    { id: 1, name: 'AI Art', price: 49.99, img: 'https://via.placeholder.com/300x200?text=AI+Art', desc: 'Create stunning AI-generated art' },
    { id: 2, name: 'Design Toolkit', price: 29.99, img: 'https://via.placeholder.com/300x200?text=Design+Toolkit', desc: 'Professional design resources' },
    { id: 3, name: 'Tech Gadget', price: 99.99, img: 'https://via.placeholder.com/300x200?text=Tech+Gadget', desc: 'Latest tech innovation' },
    { id: 4, name: 'Creative Suite', price: 79.99, img: 'https://via.placeholder.com/300x200?text=Creative+Suite', desc: 'All-in-one creativity tools' },
    { id: 5, name: 'AI Tools', price: 39.99, img: 'https://via.placeholder.com/300x200?text=AI+Tools', desc: 'Essential AI-powered utilities' },
    { id: 6, name: 'Design Essentials', price: 19.99, img: 'https://via.placeholder.com/300x200?text=Design+Essentials', desc: 'Basic design resources' },
  ];

  // Simulate selecting a product (e.g., from URL or state)
  useEffect(() => {
    // This is a placeholder; in a real app, you'd get the product ID from the URL (e.g., useParams)
    const productId = 1; // Default to first product for demo
    const product = products.find(p => p.id === productId);
    setSelectedProduct(product);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden font-sans" style={{ backgroundImage: `url('src/assets/wallhaven-6d7ow6.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Header />
      <div className="relative w-full text-center px-4 z-10 min-h-screen flex flex-col items-center justify-center">
        <div className={`inline-block bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold mb-6 ${isVisible ? 'animate-pulse-slow' : ''}`}>
          PRODUCT DETAILS
        </div>
        {selectedProduct && (
          <div className="w-full max-w-5xl mx-auto p-6 bg-white bg-opacity-90 rounded-lg shadow-lg flex flex-row items-start">
            <img src={selectedProduct.img} alt={selectedProduct.name} className="w-1/3 h-64 object-cover rounded-l-lg mr-6" />
            <div className="p-4">
              <h2 className="text-3xl font-bold text-orange-600 mb-2">{selectedProduct.name}</h2>
              <p className="text-lg text-orange-700 mb-4">{selectedProduct.desc}</p>
              <p className="text-xl font-semibold text-orange-500 mb-4">Price: ${selectedProduct.price}</p>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-orange-600 mb-2">Customize Your Product</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-orange-700">Color</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter color"
                    />
                  </div>
                  <div>
                    <label className="block text-orange-700">Size</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter size"
                    />
                  </div>
                  <div>
                    <label className="block text-orange-700">Quantity</label>
                    <input
                      type="number"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter quantity"
                      min="1"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
                  >
                    Submit Customization
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
        {selectedProduct && (
          <div className="w-full max-w-5xl mx-auto mt-8 p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-orange-600 mb-4">Related Assets</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products
                .filter(p => p.id !== selectedProduct.id)
                .slice(0, 3) // Show up to 3 related assets
                .map(related => (
                  <div key={related.id} className="p-2 bg-orange-100 rounded-lg text-center">
                    <img src={related.img} alt={related.name} className="w-full h-32 object-cover rounded-t-lg" />
                    <p className="text-orange-700 mt-2">{related.name}</p>
                    <p className="text-orange-500">${related.price}</p>
                  </div>
                ))}
            </div>
          </div>
        )}
        <div className="mt-8">
          <Link to="/stock">
            <button className={`bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:shadow-lg transition-all duration-300 ${isVisible ? 'animate-bounce-slow' : ''}`}>
              Back to Products
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Productdetails;