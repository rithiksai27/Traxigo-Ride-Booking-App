import axios from "axios";
import { useNavigate } from "react-router-dom";

const FinishRide = (props) => {
  const navigate = useNavigate();

  async function endRide() {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/rides/end-ride`,
        {
          rideId: props.ride._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        navigate("/captain-home");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-[#1E293B] text-white p-6 rounded-3xl shadow-xl">
      {/* Close Button */}
      <h5
        className="p-1 text-center w-[93%] absolute top-2 left-1/2 transform -translate-x-1/2"
        onClick={() => props.setFinishRidePanel(false)}
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line hover:text-gray-200 transition-all"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5">Finish this Ride</h3>

      {/* Rider Details */}
      <div className="flex items-center justify-between p-4 bg-[#2D2F33] border border-gray-700 rounded-lg shadow-md">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover border-2 border-gray-600"
            src="https://plus.unsplash.com/premium_photo-1689562473471-6e736b8afe15?q=80&w=2272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User"
          />
          <h2 className="text-lg font-medium text-gray-300">
            {props.ride?.user.fullname.firstname}
          </h2>
        </div>
        <h5 className="text-lg font-semibold text-[#86A8E7]">2.2 KM</h5>
      </div>

      {/* Ride Info */}
      <div className="flex flex-col gap-5 mt-5">
        {/* Pickup */}
        <div className="flex items-center gap-5 p-4 bg-[#2D2F33] border border-gray-700 rounded-lg shadow-md">
          <i className="text-3xl ri-map-pin-user-fill text-[#4DB6AC]"></i>
          <div>
            <h3 className="text-lg font-medium">Pickup:</h3>
            <p className="text-sm text-gray-400">{props.ride?.pickup}</p>
          </div>
        </div>

        {/* Destination */}
        <div className="flex items-center gap-5 p-4 bg-[#2D2F33] border border-gray-700 rounded-lg shadow-md">
          <i className="text-3xl ri-map-pin-2-fill text-[#4DB6AC]"></i>
          <div>
            <h3 className="text-lg font-medium">Destination:</h3>
            <p className="text-sm text-gray-400">{props.ride?.destination}</p>
          </div>
        </div>

        {/* Fare */}
        <div className="flex items-center gap-5 p-4 bg-[#2D2F33] border border-gray-700 rounded-lg shadow-md">
          <i className="text-3xl ri-currency-line text-[#FBC02D]"></i>
          <div>
            <h3 className="text-lg font-medium">Fare:</h3>
            <p className="text-sm text-gray-400">₹{props.ride?.fare} (Cash)</p>
          </div>
        </div>
      </div>

      {/* Finish Ride Button */}
      <div className="mt-10">
        <button
          onClick={endRide}
          className="w-full bg-[#86A8E7] text-[#181A1B] text-lg font-bold py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Finish Ride
        </button>
      </div>
    </div>
  );
};

export default FinishRide;
