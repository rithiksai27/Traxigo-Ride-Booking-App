import React from 'react';

const LookingForDriver = (props) => {
    return (
        <div className="bg-[#181A1B] text-white shadow-xl rounded-t-2xl p-5 animate-slide-up border border-gray-700">
            {/* Close Button */}
            <h5 className="p-1 text-center w-[93%] absolute top-2 cursor-pointer" onClick={() => props.setVehicleFound(false)}>
                <i className="text-3xl text-gray-500 hover:text-gray-300 transition-all ri-arrow-down-wide-line"></i>
            </h5>

            {/* Header */}
            <h3 className="text-2xl font-semibold text-[#86A8E7] mb-5 text-center animate-pulse">Looking for a Driver...</h3>

            {/* Ride Details */}
            <div className="flex flex-col items-center gap-4">
                <img className="h-24 rounded-lg shadow-lg animate-pulse" src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="Selected Vehicle" />

                <div className="w-full mt-5 space-y-3">
                    {[
                        { icon: "ri-map-pin-user-fill", label: "Pickup Location", value: props.pickup },
                        { icon: "ri-map-pin-2-fill", label: "Destination", value: props.destination },
                        { icon: "ri-currency-line", label: "Fare", value: `₹${props.fare[props.vehicleType]}`, subtext: "Cash" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-5 p-4 border border-gray-600 hover:border-gray-300 rounded-lg shadow-md transition-all duration-200 hover:scale-[1.02] bg-[#1E293B]">
                            <i className={`${item.icon} text-xl text-[#86A8E7] animate-bounce`}></i>
                            <div>
                                <h3 className="text-lg font-medium">{item.label}</h3>
                                <p className="text-sm -mt-1 text-gray-400">{item.value}</p>
                                {item.subtext && <p className="text-xs text-gray-500">{item.subtext}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LookingForDriver;
