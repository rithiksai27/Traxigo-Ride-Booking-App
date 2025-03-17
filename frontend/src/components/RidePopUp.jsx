import { useEffect, useState } from "react";

const RidePopUp = (props) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div className={`relative bg-[#181A1B] text-white rounded-t-3xl p-6 shadow-xl transition-all duration-500 ease-in-out transform ${animate ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>

            {/* Close Button */}
            <h5 className="p-1 text-center w-[93%] absolute top-3 left-1/2 transform -translate-x-1/2 cursor-pointer" 
                onClick={() => props.setRidePopupPanel(false)}>
                <i className="text-3xl text-gray-400 hover:text-gray-100 transition-all duration-200 ri-arrow-down-wide-line"></i>
            </h5>

            {/* Title */}
            <h3 className="text-3xl font-extrabold text-[#86A8E7] text-center mb-5">New Ride Available!</h3>

            {/* Ride Info Card */}
            <div className="flex items-center justify-between p-4 bg-[#1E293B] rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-4">
                    <img className="h-14 w-14 rounded-full object-cover border-2 border-gray-600" 
                        src="https://plus.unsplash.com/premium_photo-1689562473471-6e736b8afe15?q=80&w=2272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="User Profile" />
                    <h2 className="text-lg font-semibold text-gray-300">{props.ride?.user.fullname.firstname} {props.ride?.user.fullname.lastname}</h2>
                </div>
                <h5 className="text-lg font-medium text-gray-300 bg-[#2D2F33] px-3 py-1 rounded-lg">📍 2.2 KM</h5>
            </div>

            {/* Ride Details */}
            <div className="flex gap-4 flex-col items-center w-full mt-5">
                <div className="w-full">
                    
                    {/* Pickup */}
                    <div className="flex items-center gap-5 p-3 border-b border-gray-700">
                        <i className="ri-map-pin-user-fill text-3xl text-[#86A8E7]"></i>
                        <div>
                            <h3 className="text-lg font-medium"> Pickup:</h3>
                            <p className="text-sm text-gray-400">{props.ride?.pickup}</p>
                        </div>
                    </div>

                    {/* Destination */}
                    <div className="flex items-center gap-5 p-3 border-b border-gray-700">
                        <i className="ri-map-pin-2-fill text-3xl text-[#4DB6AC]"></i>
                        <div>
                            <h3 className="text-lg font-medium"> Destination:</h3>
                            <p className="text-sm text-gray-400">{props.ride?.destination}</p>
                        </div>
                    </div>

                    {/* Fare */}
                    <div className="flex items-center gap-5 p-3">
                        <i className="ri-currency-line text-3xl text-[#FBC02D]"></i>
                        <div>
                            <h3 className="text-lg font-medium"> Fare:</h3>
                            <p className="text-sm text-gray-400">₹{props.ride?.fare} (Cash)</p>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="w-full flex flex-col gap-3 mt-6">
                    
                    {/* Accept Button */}
                    <button onClick={() => {
                        props.setConfirmRidePopupPanel(true);
                        props.confirmRide(true);
                    }} 
                    className="bg-[#86A8E7] w-full text-[#181A1B] text-lg font-bold p-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                    Accept Ride
                    </button>

                    {/* Ignore Button */}
                    <button onClick={() => {
                        props.setRidePopupPanel(false);
                    }} 
                    className="bg-[#2D2F33] text-gray-300 w-full text-lg font-semibold p-3 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-600 transition-all duration-300">
                    Ignore Ride
                    </button>

                </div>
            </div>
        </div>
    );
};

export default RidePopUp;
