import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import {useEffect, useContext} from 'react';
import { SocketContext } from "../context/SocketContext";
import { CaptainDataContext } from "../context/CaptainContext";
import RidePopUp from "../components/RidePopUp";
import axios from "axios";
const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(false);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false); // Fixed variable name

  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);
  const [ ride, setRide ] = useState(null)

  const {socket} = useContext(SocketContext)
  const {captain} = useContext(CaptainDataContext)

  useEffect(() => {
    socket.emit("join", { 
      userId: captain._id,
      userType: "captain" 
    })
    const updateLocation = () => {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {

              socket.emit('update-location-captain', {
                  userId: captain._id,
                  location: {
                    ltd: position.coords.latitude,
                    lng: position.coords.longitude
                  }
              })
          })
      }
  }

  
  const locationInterval = setInterval(updateLocation, 10000)
  updateLocation()

  //return () => clearInterval(locationInterval)
  

  }) 

  socket.on('new-ride', (data) => {

    setRide(data)
    setRidePopupPanel(true)

})
async function confirmRide() {

    await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`, {

      rideId: ride._id,
      captainId: captain._id,


  }, {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
  })

  setRidePopupPanel(false)
  setConfirmRidePopupPanel(true)

}

  useGSAP(() => {
    if (ridePopupPanelRef.current) {  // ✅ Ensure ref exists before animating
      gsap.to(ridePopupPanelRef.current, {
        transform: ridePopupPanel ? "translateY(0)" : "translateY(100%)",
      });
    }
  }, [ridePopupPanel]);

  useGSAP(() => {
    if (confirmRidePopupPanelRef.current) {  // ✅ Ensure ref exists before animating
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: confirmRidePopupPanel ? "translateY(0)" : "translateY(100%)",
      });
    }
  }, [confirmRidePopupPanel]);

  return (
    <div className="h-screen flex flex-col">
      <div className="fixed p-3 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/home"
          className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt="Background"
        />
      </div>

      <div className="h-2/5 p-4">
        <CaptainDetails />
      </div>
      <div ref={ridePopupPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
                <RidePopUp
                    ride={ride}
                    setRidePopupPanel={setRidePopupPanel}
                    setConfirmRidePopupPanel={setConfirmRidePopupPanel}
                    confirmRide={confirmRide}
                />
            </div>
      
      <div
        ref={confirmRidePopupPanelRef}
        className="fixed w-full h-screen z-10 translate-y-full bottom-0 bg-white px-3 py-10 pt-12"
      >
        <ConfirmRidePopUp 
        ride={ride}
        setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
      </div>
    </div>
  );
};

export default CaptainHome;
