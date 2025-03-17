import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import { useNavigate } from "react-router-dom";
import LiveTracking from "../components/LiveTracking";

const Riding = () => {
  const location = useLocation();
  const { ride } = location.state || {};
  const { socket } = useContext(SocketContext);
  const navigate = useNavigate();

  socket.on("ride-ended", () => {
    navigate("/home");
  });

  return (
    <div className="h-screen flex flex-col bg-[#181A1B] text-white">
      {/* Home Button */}
      <Link
        to="/home"
        className="fixed right-4 top-4 h-12 w-12 bg-[#2D2F33] flex items-center justify-center rounded-full shadow-md hover:bg-gray-700 transition-all"
      >
        <i className="text-xl text-gray-300 hover:text-gray-100 transition-all ri-home-4-line"></i>
      </Link>

      {/* Top Half: Live Tracking */}
      <div className="h-1/2">
        <LiveTracking />
      </div>

      {/* Bottom Half: Ride Details */}
      <div className="h-1/2 p-6 flex flex-col justify-between bg-[#1E293B] rounded-t-3xl shadow-xl">
        {/* Rider Information */}
        <div className="flex items-center justify-between border-b border-gray-600 pb-3">
          <img
            className="h-14 w-14 rounded-full object-cover border-2 border-gray-600"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s"
            alt="Rider"
          />
          <div className="text-right">
            <h2 className="text-lg font-semibold capitalize text-gray-300">
              {ride?.captain.fullname.firstname}
            </h2>
            <h4 className="text-xl font-extrabold text-[#86A8E7]">
              {ride?.captain.vehicle.plate}
            </h4>
            <p className="text-sm text-gray-400">Maruti Suzuki Alto</p>
          </div>
        </div>

        {/* Ride Details */}
        <div className="flex flex-col gap-4 mt-5">
          {/* Destination */}
          <div className="flex items-center gap-5 p-4 bg-[#2D2F33] rounded-lg shadow-md border border-gray-700">
            <i className="text-3xl ri-map-pin-2-fill text-[#4DB6AC]"></i>
            <div>
              <h3 className="text-lg font-medium text-white">Destination:</h3>
              <p className="text-sm text-gray-400">{ride?.destination}</p>
            </div>
          </div>

          {/* Payment */}
          <div className="flex items-center gap-5 p-4 bg-[#2D2F33] rounded-lg shadow-md border border-gray-700">
            <i className="text-3xl ri-currency-line text-[#FBC02D]"></i>
            <div>
              <h3 className="text-lg font-medium text-white">Fare:</h3>
              <p className="text-sm text-gray-400">₹{ride?.fare} (Cash)</p>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        <button className="w-full mt-6 bg-[#86A8E7] text-[#181A1B] text-lg font-bold py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
