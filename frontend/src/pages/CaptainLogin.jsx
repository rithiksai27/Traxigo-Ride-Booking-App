import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setCaptain } = useContext(CaptainDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()

    const captainData = { email, password }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData)

      if (response.status === 200) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }
    } catch (error) {
      console.error('Login failed:', error)
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Gradient Circles */}
      <div className="absolute w-80 h-80 bg-[#00c6ff] opacity-20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-80 h-80 bg-[#ff00ff] opacity-20 rounded-full blur-3xl bottom-10 right-10"></div>

      {/* Glassmorphic Login Card */}
      <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-10 w-[95%] sm:w-[400px] animate-fade-in">
        {/* Logo & Heading */}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 whitespace-nowrap">
            Welcome, <span className="text-[#00c6ff]">Captain</span>
          </h1>
          <p className="text-gray-400 text-center mb-6 text-sm">
            Log in to manage your rides and fleet.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={submitHandler} className="space-y-6">
          <div>
            <label className="block text-gray-300 text-sm mb-2">Email</label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-white bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#00c6ff] outline-none"
              type="email"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-2">Password</label>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 text-white bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#00c6ff] outline-none"
              type="password"
              placeholder="••••••••"
            />
          </div>

          <button className="w-full bg-[#00c6ff] text-white font-semibold rounded-lg py-3 hover:bg-[#009bd6] transition-all duration-300">
            Login
          </button>
        </form>

        {/* Links */}
        <div className="text-center mt-5">
          <p className="text-gray-400">
            Not a Captain yet?{' '}
            <Link to="/captain-signup" className="text-[#ff00ff] font-semibold">
              Register now
            </Link>
          </p>
        </div>

        {/* User Login */}
        <Link
          to="/login"
          className="block mt-6 w-full text-center bg-[#ff00ff] text-white font-semibold rounded-lg py-3 hover:bg-[#d600d6] transition-all duration-300"
        >
          Sign in as User
        </Link>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes fade-in {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
          }
        `}
      </style>
    </div>
  )
}

export default CaptainLogin
