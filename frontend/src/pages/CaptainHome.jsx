import { Link, useNavigate } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import { useState, useRef, useEffect, useContext } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { SocketContext } from "../context/SocketContext";
import { CaptainDataContext } from "../context/CaptainContext";
import RidePopUp from "../components/RidePopUp";
import axios from "axios";

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(false);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);
  const [ride, setRide] = useState(null);
  const navigate = useNavigate();

  const { socket } = useContext(SocketContext);
  const { captain } = useContext(CaptainDataContext);

  useEffect(() => {
    socket.emit("join", {
      userId: captain._id,
      userType: "captain",
    });

    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          socket.emit("update-location-captain", {
            userId: captain._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        });
      }
    };

    const locationInterval = setInterval(updateLocation, 10000);
    updateLocation();

    return () => clearInterval(locationInterval);
  }, []);

  socket.on("new-ride", (data) => {
    setRide(data);
    setRidePopupPanel(true);
  });

  async function confirmRide() {
    await axios.post(
      `${import.meta.env.VITE_BASE_URL}/rides/confirm`,
      {
        rideId: ride._id,
        captainId: captain._id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    setRidePopupPanel(false);
    setConfirmRidePopupPanel(true);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/start");
  }

  useGSAP(() => {
    if (ridePopupPanelRef.current) {
      gsap.to(ridePopupPanelRef.current, {
        transform: ridePopupPanel ? "translateY(0)" : "translateY(100%)",
        opacity: ridePopupPanel ? 1 : 0,
        duration: 0.5,
      });
    }
  }, [ridePopupPanel]);

  useGSAP(() => {
    if (confirmRidePopupPanelRef.current) {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: confirmRidePopupPanel ? "translateY(0)" : "translateY(100%)",
        opacity: confirmRidePopupPanel ? 1 : 0,
        duration: 0.5,
      });
    }
  }, [confirmRidePopupPanel]);

  return (
    <div className="h-screen flex flex-col bg-[#0D0D0D] text-white">
      {/* Header */}
      <div className="fixed p-4 top-0 flex items-center justify-between w-screen bg-[#1A1A1A] backdrop-blur-lg z-20 shadow-lg">
        <h1 className="text-4xl font-extrabold text-[#FFD700] tracking-wide">
          Traxigo
        </h1>
        <button
          onClick={handleLogout}
          className="px-5 py-2 text-lg font-medium bg-[#FF4500] hover:bg-[#FF6347] transition-all duration-200 shadow-lg rounded-full text-white"
        >
          Logout
        </button>
      </div>

      {/* Map / Background */}
      <div className="h-[55vh] relative">
        <img
          className="h-full w-full object-cover brightness-75 rounded-b-3xl"
          src="https://plus.unsplash.com/premium_photo-1712492551891-aed751356fd4?q=80&w=3257&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
        />
      </div>

      {/* Captain Details Section */}
      <div className="flex-1 p-5 bg-[#1A1A1A] backdrop-blur-md rounded-t-3xl shadow-lg">
        <CaptainDetails />

        {/* Ride Status & Online Hours */}
        <div className="mt-5">
          <h2 className="text-lg font-semibold text-gray-400">Ride Status</h2>
          <p className="text-xl text-[#00FF7F] font-bold">Available</p>
        </div>

        <div className="mt-3">
          <h2 className="text-lg font-semibold text-gray-400">Online Hours</h2>
          <p className="text-xl text-[#FFD700] font-bold">10:00 AM - 9:00 PM</p>
        </div>

        <div className="mt-5 flex justify-center">
          <button className="px-6 py-3 bg-[#00FF7F] text-black font-bold rounded-lg shadow-md hover:bg-[#32CD32] transition-all duration-200">
          Looking for passengers...
          </button>
        </div>
      </div>

      {/* Ride Pop-Up Panel */}
      <div
        ref={ridePopupPanelRef}
        className="fixed w-full z-30 bottom-0 translate-y-full bg-[#181818] text-white px-5 py-10 rounded-t-3xl shadow-2xl"
      >
        <RidePopUp
          ride={ride}
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          confirmRide={confirmRide}
        />
      </div>

      {/* Confirm Ride Pop-Up Panel */}
      <div
        ref={confirmRidePopupPanelRef}
        className="fixed w-full h-screen z-30 translate-y-full bottom-0 bg-[#181818] text-white px-5 py-10 rounded-t-3xl shadow-2xl"
      >
        <ConfirmRidePopUp
          ride={ride}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          setRidePopupPanel={setRidePopupPanel}
        />
      </div>

      {/* Keyframe Animations */}
      <style>
        {`
          @keyframes slideUp {
            from {
              transform: translateY(100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .animate-slide-up {
            animation: slideUp 0.5s ease-in-out forwards;
          }

          .animate-fade-in {
            animation: fadeIn 0.5s ease-in-out forwards;
          }

          .shadow-3d {
            box-shadow: 0px 10px 30px rgba(255, 215, 0, 0.4);
          }
        `}
      </style>
    </div>
  );
};

export default CaptainHome;
