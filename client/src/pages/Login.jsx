import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext'
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  function handleSubmit(event) {
    event.preventDefault();
    login(email, password);
  }

  return (
    <section
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat animate-fadeIn"
    >
      <div className="bg-black bg-opacity-90 shadow-lg rounded-xl p-8 w-80 md:w-96 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-red-600">
        <h1 className="text-3xl font-bold text-center mb-6 text-red-600">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-red-500 mb-1">Email</label>
            <input
              placeholder="Enter your email"
              name="email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-red-500 bg-black text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 placeholder-red-300"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-red-500 mb-1">Password</label>
            <input
              placeholder="Enter your password"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-red-500 bg-black text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 placeholder-red-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-red-600 hover:bg-red-700 py-2 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
        <p className="text-center text-sm text-red-300 mt-6">
          Don’t have an account?{' '}
          <Link to={'/signup'} className="text-red-400 hover:underline">Sign up</Link>
        </p>
      </div>

      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}