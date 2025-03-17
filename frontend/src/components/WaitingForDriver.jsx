import React from 'react';

const WaitingForDriver = (props) => {
  return (
    <div className="relative bg-[#181A1B] text-white rounded-t-3xl p-6 shadow-lg transition-all duration-500 ease-in-out">

      {/* Close Button */}
      <h5 
        className="p-1 text-center w-[93%] absolute top-3 left-1/2 transform -translate-x-1/2 cursor-pointer" 
        onClick={() => props.waitingForDriver(false)}
      >
        <i className="text-3xl text-gray-500 hover:text-gray-300 transition-all duration-200 ri-close-line"></i>
      </h5>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-[#86A8E7] text-center mb-5">
        Your driver is on the way
      </h3>

      {/* Driver Info Card */}
      <div className="flex items-center justify-between p-5 bg-gradient-to-r from-[#1E293B] to-[#3B4252] rounded-xl shadow-md">
        {/* Car Image */}
        <img 
          className="h-16 w-24 rounded-lg border-2 border-gray-500 shadow-lg" 
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" 
          alt="Driver's Car" 
        />

        {/* Driver Details */}
        <div className="text-right">
          <h2 className="text-lg font-medium">
            Driver: {props.ride?.captain.fullname.firstname}
          </h2>
          <h4 className="text-xl font-semibold text-black bg-gray-300 px-3 py-1 rounded-lg shadow-md">
            Car Plate: {props.ride?.captain.vehicle.plate}
          </h4>
          <p className="text-sm text-gray-400">Car Model: Maruti Suzuki Alto</p>
          
          {/* OTP Section with Animation */}
          <h1 
            className="text-2xl font-bold text-[#FF5733] bg-[#2C2F36] px-4 py-2 mt-3 rounded-lg shadow-md tracking-wider animate-pulse"
          >
            OTP: {props.ride?.otp}
          </h1>
          <p className="text-sm text-gray-400">Please share this OTP with the driver to start your ride.</p>
        </div>
      </div>

      {/* Ride Details */}
      <div className="flex gap-4 flex-col items-center w-full mt-6">
        <div className="w-full">
          
          {/* Pickup Location */}
          <div className="flex items-center gap-5 p-3 border-b border-gray-600">
            <i className="ri-map-pin-user-fill text-2xl text-[#86A8E7]"></i>
            <div>
              <h3 className="text-md font-medium">Pickup Location</h3>
              <p className="text-sm text-gray-400">
                {props.ride?.pickup}
              </p>
              <p className="text-xs text-gray-500">Be ready at this location when the driver arrives.</p>
            </div>
          </div>

          {/* Destination */}
          <div className="flex items-center gap-5 p-3 border-b border-gray-600">
            <i className="ri-map-pin-2-fill text-2xl text-[#A4B1CD]"></i>
            <div>
              <h3 className="text-md font-medium">Destination</h3>
              <p className="text-sm text-gray-400">
                {props.ride?.destination}
              </p>
              <p className="text-xs text-gray-500">The driver will take you here.</p>
            </div>
          </div>

          {/* Fare */}
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line text-2xl text-[#86A8E7]"></i>
            <div>
              <h3 className="text-md font-medium">Fare</h3>
              <p className="text-sm text-gray-400">
                ₹{props.ride?.fare} (Cash Payment)
              </p>
              <p className="text-xs text-gray-500">Please pay the driver at the end of the ride.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default WaitingForDriver;
