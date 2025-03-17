import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: { firstname: firstName, lastname: lastName },
      email,
      password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      );

      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/home");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-[#121212] to-[#1C1C1C] relative overflow-hidden">
      {/* Background Light Effects */}
      <div className="absolute w-72 h-72 bg-[#00c6ff] opacity-20 rounded-full blur-3xl top-20 left-10"></div>
      <div className="absolute w-72 h-72 bg-[#ff00ff] opacity-20 rounded-full blur-3xl bottom-20 right-10"></div>

      {/* Glassmorphic Signup Card */}
      <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-xl p-8 w-[90%] sm:w-96 animate-fade-in">
       <div className="flex flex-col items-center">
  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-extrabold text-white mb-4 text-center w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] break-words">
    Create Your <span className="text-[#00c6ff]">Traxigo</span> Account
  </h1>
</div>


        {/* Signup Form */}
        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <label className="block text-gray-300 text-sm mb-2">Full Name</label>
            <div className="flex gap-4">
              <input
                required
                className="w-1/2 px-4 py-3 text-white bg-gray-800 border border-gray-700 rounded-lg focus:ring focus:ring-[#00c6ff] outline-none"
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                required
                className="w-1/2 px-4 py-3 text-white bg-gray-800 border border-gray-700 rounded-lg focus:ring focus:ring-[#00c6ff] outline-none"
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-2">Email</label>
            <input
              required
              className="w-full px-4 py-3 text-white bg-gray-800 border border-gray-700 rounded-lg focus:ring focus:ring-[#00c6ff] outline-none"
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-2">Password</label>
            <input
              required
              className="w-full px-4 py-3 text-white bg-gray-800 border border-gray-700 rounded-lg focus:ring focus:ring-[#00c6ff] outline-none"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="w-full bg-[#00c6ff] text-white font-semibold rounded-lg py-3 hover:bg-[#009bd6] transition-all duration-300">
            Create Account
          </button>
        </form>

        {/* Links */}
        <div className="text-center mt-4">
          <p className="text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-[#ff00ff] font-semibold">
              Login here
            </Link>
          </p>
        </div>

        {/* reCAPTCHA Notice */}
        <div className="text-[10px] leading-tight text-gray-500 mt-4 text-center">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service</span> apply.
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes fade-in {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default UserSignup;
