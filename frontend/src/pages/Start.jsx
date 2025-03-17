import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Start = () => {
  const [showSubText, setShowSubText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSubText(true);
    }, 500);
  }, []);

  return (
    <div className="h-screen flex flex-col justify-between items-center bg-gradient-to-br from-[#101820] via-[#1C1F26] to-[#23272E] relative overflow-hidden">
      {/* Moving Car Animation */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/741/741407.png"
        alt="Moving Car"
        className="absolute top-10 left-[-100px] w-24 animate-car-move"
      />

      {/* Animated Welcome Text - Centered in the Screen */}
      <div className="flex flex-col items-center justify-center flex-grow text-center text-white px-8">
        <h1 className="text-5xl font-extrabold tracking-wide animate-pop-in text-[#4A90E2] drop-shadow-[0px_0px_10px_#4A90E2]">
          Welcome to Traxigo
        </h1>
        {showSubText && (
          <p className="text-2xl font-medium text-[#FFD700] mt-3 animate-fade-in drop-shadow-[0px_0px_10px_#FFD700]">
            Your journey, your way!
          </p>
        )}
      </div>

      {/* Premium Bottom Section */}
      <div className="w-full flex flex-col items-center justify-center bg-gradient-to-t from-[#1B1F23] to-[#2A2E35] py-10 rounded-t-3xl shadow-2xl">
        <Link
          to="/login"
          className="w-[90%] text-center bg-gradient-to-r from-[#6A0DAD] to-[#4169E1] text-white font-bold text-xl py-3 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_0px_15px_#6A0DAD]"
        >
          Get Started 
        </Link>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          /* Moving Car Animation */
          @keyframes car-move {
            0% { left: -100px; opacity: 0; }
            50% { opacity: 1; }
            100% { left: 100%; opacity: 0; }
          }

          .animate-car-move {
            animation: car-move 5s linear infinite;
          }

          /* Attention-grabbing zoom-in effect */
          @keyframes pop-in {
            0% { transform: scale(0.8); opacity: 0; }
            50% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(1); }
          }

          .animate-pop-in {
            animation: pop-in 0.8s ease-out;
          }

          /* Smooth fade-in effect for subtext */
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in {
            animation: fade-in 0.8s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Start;
