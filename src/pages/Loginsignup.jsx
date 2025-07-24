import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => setIsLogin(!isLogin);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log(isLogin ? 'Logging in with' : 'Signing up with', formData);

    if (isLogin) {
      navigate('/client');
    } else {
      alert('Account created successfully!');
      setIsLogin(true);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-100 font-sans overflow-hidden">
      <Header />

      <div className="relative w-full min-h-[90vh] flex items-center justify-center px-4 z-10">
        <div className="w-full max-w-6xl h-[600px] bg-white shadow-2xl rounded-2xl flex overflow-hidden animate-fade-in-up border border-black">

          {/* Left Form Panel */}
          <div className="w-3/5 p-12 bg-white flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold text-black text-center mb-8">
              {isLogin ? 'Login' : 'Create Account'}
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {!isLogin && (
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              {!isLogin && (
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              )}

              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-3 rounded-lg shadow-md hover:bg-gray-900 transition-colors duration-300"
              >
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </form>

            <p className="text-center mt-6 text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <button
                onClick={toggleForm}
                className="text-black font-semibold hover:underline"
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>

          {/* Right Welcome Panel */}
          <div className="w-2/5 bg-black text-white p-10 flex flex-col items-center justify-center rounded-r-2xl">
            <img
              src="/src/assets/OIP.webp"
              alt="Company Logo"
              className="w-24 h-24 mb-6 rounded-full border-4 border-black shadow-lg"
            />
            <h2 className="text-3xl font-bold mb-2 text-white">Welcome to BDA</h2>
            <p className="text-lg text-gray-300 text-center max-w-xs">
              Your trusted Digital Assets Marketplace. Login or sign up to get started.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AuthPage;
