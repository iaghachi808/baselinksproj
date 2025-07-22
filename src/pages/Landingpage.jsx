import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const placeholders = [
    { id: 1, text: '', bg: 'bg-teal-200', img: '/src/assets/OIP (2).webp', desc: 'Creative design solutions' },
    { id: 2, text: '', bg: 'bg-purple-200', img: '/src/assets/OIP (1).webp', desc: 'Beautiful artwork collections' },
    { id: 3, text: '', bg: 'bg-yellow-200', img: '/src/assets/OIP (3).webp', desc: 'Cutting-edge innovations' },
    { id: 4, text: '', bg: 'bg-orange-200', img: '/src/assets/OIP (4).webp', desc: 'Advanced tech insights' },
    { id: 5, text: '', bg: 'bg-blue-200', img: '/src/assets/R.jpg', desc: 'Inspiring creative ideas' },
    { id: 6, text: '', bg: 'bg-green-200', img: '/src/assets/OIP (5).webp', desc: 'AI-powered tools' },
  ];

  const filteredPlaceholders = placeholders.filter(placeholder =>
    placeholder.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden font-sans " style={{ backgroundImage: `url('src/assets/wallhaven-6d7ow6.png')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <Header />
      {/* <div className="absolute inset-0 flex justify-center items-center">
        <img src="/src/assets/wallhaven-6d7ow6.jpg" alt="Background Fallback" className="object-cover w-full h-full opacity-50" />
      </div> */}
      <div className="relative w-full text-center px-4 z-10 min-h-screen flex flex-col items-center justify-center">
        <div className={`inline-block bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold mb-6 ${isVisible ? 'animate-pulse-slow' : ''}`}>
          CREATE UNLIMITED IMAGES
        </div>
        <h1 className={`text-4xl sm:text-6xl font-extrabold text-white mb-4 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          Creative work, reimagined with AI
        </h1>
        <p className={`text-xl sm:text-2xl text-white font-semibold mb-8 ${isVisible ? 'animate-fade-in-up' : ''} delay-200`}>
          All in one place
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <Link to="/stock">
            <button className={`bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:shadow-lg transition-all duration-300 ${isVisible ? 'animate-bounce-slow' : ''}`}>
              GET STARTED
            </button>
          </Link>
        </div>
        <div className="w-full max-w-3xl mx-auto mb-12">
          <form action="/search"  method="get" className={`flex items-center ${isVisible ? 'animate-fade-in-up' : ''} delay-400`}>
            <input
              type="text"
              placeholder="Search everything..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              name="query"
              className="w-full p-3 text-lg rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md bg-white text-black"
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
          {filteredPlaceholders.map((card) => (
            <div
              key={card.id}
              className={`rounded-lg p-8 relative overflow-hidden ${card.bg} text-white text-2xl font-bold text-center backdrop-blur-sm bg-opacity-90 border border-gray-200 h-48 flex items-center justify-center ${isVisible ? 'animate-fade-in-up' : ''} ${`delay-${card.id * 100}`}`}
              onMouseEnter={(e) => e.currentTarget.classList.add('hover-darken')}
              onMouseLeave={(e) => e.currentTarget.classList.remove('hover-darken')}
            >
              <img src={card.img} alt={card.text} className="absolute inset-0 w-full h-full object-cover opacity-100" />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center text-white text-sm font-medium opacity-0 hover:opacity-100">
                {card.desc}
              </div>
              <span className="relative z-10">{card.text}</span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;