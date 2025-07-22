import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden font-sans" style={{ backgroundImage: `url('src/assets/wallhaven-6d7ow6.png')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white p-6 shadow-md min-h-screen">
          <ul className="space-y-4 text-gray-700">
            <li className="bg-orange-600 text-white px-4 py-2 rounded-md">Dashboard</li>
            <li className="hover:bg-gray-100 px-4 py-2 rounded-md">Orders</li>
            <li className="hover:bg-gray-100 px-4 py-2 rounded-md">Downloads</li>
            <li className="hover:bg-gray-100 px-4 py-2 rounded-md">Wallet</li>
            <li className="hover:bg-gray-100 px-4 py-2 rounded-md">Payment Method</li>
            <li className="hover:bg-gray-100 px-4 py-2 rounded-md">Wishlist</li>
            <li className="hover:bg-gray-100 px-4 py-2 rounded-md">Logout</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 animate-fade-in-up">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-orange-700 to-orange-500 text-white p-8 rounded-xl flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-semibold">Hello, Client</h2>
              <p className="text-sm">WELCOME!!!</p>
            </div>
            <div className="w-16 h-16 bg-white rounded-full"></div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-all">
              <p className="text-gray-500 text-sm">Pending Orders</p>
              <h3 className="text-2xl font-bold mt-2">0</h3>
              <p className="text-gray-400 text-xs mt-1">Unpaid orders</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-all">
              <p className="text-gray-500 text-sm">Processed Order</p>
              <h3 className="text-2xl font-bold mt-2">0</h3>
              <p className="text-gray-400 text-xs mt-1">Orders under processing</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-all">
              <p className="text-gray-500 text-sm">Completed Order</p>
              <h3 className="text-2xl font-bold mt-2">1</h3>
              <p className="text-gray-400 text-xs mt-1">Orders shipped or delivered</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-all">
              <p className="text-gray-500 text-sm">Wallet Balance</p>
              <h3 className="text-2xl font-bold mt-2 text-green-700">₦0.00</h3>
              <p className="text-gray-400 text-xs mt-1">Total wallet balance</p>
            </div>
          </div>

          {/* Recent Orders */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Your Recent Orders</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow text-sm">
                <thead className="text-left bg-gray-100">
                  <tr>
                    <th className="px-4 py-3">ID</th>
                    <th className="px-4 py-3">Items</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-3">64579</td>
                    <td className="px-4 py-3">Creative Tools</td>
                    <td className="px-4 py-3">March 4, 2025</td>
                    <td className="px-4 py-3 text-red-600 font-semibold">Cancelled</td>
                    <td className="px-4 py-3">₦100,000.00</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3">64577</td>
                    <td className="px-4 py-3">Arts and Design assets</td>
                    <td className="px-4 py-3">March 4, 2025</td>
                    <td className="px-4 py-3 text-green-600 font-semibold">Completed</td>
                    <td className="px-4 py-3">₦100,000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
