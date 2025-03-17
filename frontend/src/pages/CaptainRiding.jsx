import { Link, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react"; // ✅ Added missing import
import gsap from "gsap"; // ✅ Added missing import
import FinishRide from "../components/FinishRide";
import LiveTracking from "../components/LiveTracking";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);
  const location = useLocation();
  const rideData = location.state?.ride
  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePanel]);

  return (
    <div className="h-screen relative flex flex-col justify-end">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/captain-home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

    

      <div
  className="h-1/5 flex items-center justify-between p-6 bg-[#1D2534] shadow-lg rounded-xl relative overflow-hidden transition-transform duration-300 hover:scale-105"
  onClick={() => {
    setFinishRidePanel(true);
  }}
>
  {/* Upward arrow for interaction */}
  <h5 className="p-1 text-center w-[90%] absolute top-1 left-1/2 transform -translate-x-1/2">
    <i className="text-3xl text-gray-500 ri-arrow-up-wide-line transition-all duration-300 hover:text-gray-300 hover:scale-110"></i>
  </h5>

  {/* Distance Info */}
  <h4 className="text-xl font-semibold text-white drop-shadow-md">
    4 KM away
  </h4>

  {/* Complete Ride Button */}
  <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-green-700 active:scale-95">
    Complete Ride
  </button>
</div>


      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-[500] translate-y-full bottom-0 bg-white px-3 py-10 pt-12"
      >
        <FinishRide 
        ride = {rideData}
        setFinishRidePanel = {setFinishRidePanel} />
      </div>

      <div className="h-screen fixed w-screen top-0 z-[-1]">
       <LiveTracking />
      </div>


    </div>
  );
};

export default CaptainRiding;
