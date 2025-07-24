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
    { id: 4, text: '', bg: 'bg-black', img: '/src/assets/OIP (4).webp', desc: 'Advanced tech insights' },
    { id: 5, text: '', bg: 'bg-blue-200', img: '/src/assets/R.jpg', desc: 'Inspiring creative ideas' },
    { id: 6, text: '', bg: 'bg-green-200', img: '/src/assets/OIP (5).webp', desc: 'AI-powered tools' },
    { id: 7, text: '', bg: 'bg-red-200', img: '/src/assets/OIP (2).webp', desc: 'Digital art masterpieces' },
    { id: 8, text: '', bg: 'bg-pink-200', img: '/src/assets/OIP (1).webp', desc: 'Graphic design tools' },
    { id: 9, text: '', bg: 'bg-indigo-200', img: '/src/assets/OIP (3).webp', desc: 'Tech innovation hubs' },
    { id: 10, text: '', bg: 'bg-gray-200', img: '/src/assets/OIP (4).webp', desc: 'Creative software suites' },
    { id: 11, text: '', bg: 'bg-lime-200', img: '/src/assets/R.jpg', desc: 'AI-enhanced workflows' },
    { id: 12, text: '', bg: 'bg-cyan-200', img: '/src/assets/OIP (5).webp', desc: 'Design inspiration packs' },
  ];

  const filteredPlaceholders = placeholders.filter(placeholder =>
    placeholder.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="relative w-full min-h-screen bg-white overflow-hidden font-sans"
      style={{
        backgroundImage: `url('src/assets/wallhaven-6d7ow6.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Header />
      <div className="relative w-full text-center px-4 z-10 min-h-screen flex flex-col items-center justify-center">
        <div className={`inline-block text-white px-4 py-2 rounded-lg text-sm font-bold mb-6 ${isVisible ? 'animate-pulse-slow' : ''}`}>
          CREATE UNLIMITED IMAGES
        </div>
        <h1 className={`text-4xl sm:text-6xl font-extrabold text-white mb-4 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          Creative work, reimagined with AI
        </h1>
        <p className={`text-xl sm:text-2xl text-white font-semibold mb-8 ${isVisible ? 'animate-fade-in-up' : ''} delay-200`}>
          All in one place
        </p>

        {/* Search */}
        <div className="w-full max-w-3xl mx-auto mb-12">
          <form action="/search" method="get" className={`flex items-center ${isVisible ? 'animate-fade-in-up' : ''} delay-400`}>
            <input
              type="text"
              placeholder="Search everything..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              name="query"
              className="w-full p-4 text-xl rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black shadow-md bg-white text-black"
            />
            <button
              type="submit"
              className="bg-black text-white p-4 rounded-r-lg hover:bg-black transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1112 3.5a7.5 7.5 0 014.65 13.15z"></path>
              </svg>
            </button>
          </form>
        </div>

        {/* First row - Top 6 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 w-full max-w-6xl mx-auto">
          {filteredPlaceholders.slice(0, 6).map((card, idx) => {
            const heightClass = 'h-64'; // larger top row

            return (
              <div
                key={card.id}
                className={`rounded-lg p-6 relative overflow-hidden ${card.bg} text-white text-2xl font-bold text-center backdrop-blur-sm bg-opacity-90 border border-gray-200 ${heightClass} flex items-center justify-center transition-all duration-500 transform hover:scale-105 fade-in-element`}
                style={{ animationDelay: `${card.id * 100}ms` }}
              >
                <img
                  src={card.img}
                  alt={card.text}
                  className="absolute inset-0 w-full h-full object-cover opacity-100"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center text-white text-sm font-medium opacity-0 group-hover:opacity-100">
                  {card.desc}
                </div>
                <span className="relative z-10">{card.text}</span>
              </div>
            );
          })}
        </div>

        {/* Get Started Button */}
        <div className="mt-12 w-full flex justify-center">
          <Link to="/stock">
            <button className={`bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-black hover:shadow-lg transition-all duration-300 ${isVisible ? 'animate-bounce' : ''}`}>
              GET STARTED
            </button>
          </Link>
        </div>

        {/* Second row - larger cards */}
        <div className="w-full max-w-7xl px-4 mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[300px]">
            {filteredPlaceholders.slice(6).map((card, idx) => (
              <div
                key={card.id}
                className="group relative overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-105 fade-in-element"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <img
                  src={card.img}
                  alt={card.desc}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center text-white font-semibold text-lg opacity-0 group-hover:opacity-100">
                  {card.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
