import React from 'react';

const VehiclePanel = (props) => {
    return (
        <div className="bg-white shadow-lg rounded-t-2xl p-5 animate-slide-up">
            {/* Close Button */}
            <h5 className="p-1 text-center w-[93%] absolute top-2" onClick={() => props.setVehiclePanel(false)}>
                <i className="text-3xl text-gray-500 hover:text-black transition-all ri-arrow-down-wide-line cursor-pointer"></i>
            </h5>

            {/* Header */}
            <h3 className="text-2xl font-bold text-gray-800 mb-5 text-center">Choose a Ride</h3>

            {/* Car Option */}
            <div 
                onClick={() => { props.setConfirmRidePanel(true); props.selectVehicle('car'); }} 
                className="flex border border-gray-300 hover:border-black transition-all rounded-xl w-full p-3 items-center justify-between cursor-pointer hover:shadow-md"
            >
                <img className="h-12" src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="Traxigo Car" />
                <div className="ml-3 w-1/2">
                    <h4 className="font-semibold text-lg text-gray-800">Traxigo Cab <span className="text-gray-500"><i className="ri-user-3-fill"></i> 4</span></h4>
                    <h5 className="text-sm text-gray-600">2 mins away</h5>
                    <p className="text-xs text-gray-500">Affordable, compact rides</p>
                </div>
                <h2 className="text-lg font-bold text-gray-900">₹{props.fare.car}</h2>
            </div>

            {/* Moto Option */}
            <div 
                onClick={() => { props.setConfirmRidePanel(true); props.selectVehicle('moto'); }} 
                className="flex border border-gray-300 hover:border-black transition-all rounded-xl w-full p-3 mt-3 items-center justify-between cursor-pointer hover:shadow-md"
            >
                <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="Traxigo Moto" />
                <div className="ml-3 w-1/2">
                    <h4 className="font-semibold text-lg text-gray-800">Traxigo Moto <span className="text-gray-500"><i className="ri-user-3-fill"></i> 1</span></h4>
                    <h5 className="text-sm text-gray-600">3 mins away</h5>
                    <p className="text-xs text-gray-500">Affordable motorcycle rides</p>
                </div>
                <h2 className="text-lg font-bold text-gray-900">₹{props.fare.moto}</h2>
            </div>

            {/* Auto Option */}
            <div 
                onClick={() => { props.setConfirmRidePanel(true); props.selectVehicle('auto'); }} 
                className="flex border border-gray-300 hover:border-black transition-all rounded-xl w-full p-3 mt-3 items-center justify-between cursor-pointer hover:shadow-md"
            >
                <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="Traxigo Auto" />
                <div className="ml-3 w-1/2">
                    <h4 className="font-semibold text-lg text-gray-800">Traxigo Auto <span className="text-gray-500"><i className="ri-user-3-fill"></i> 3</span></h4>
                    <h5 className="text-sm text-gray-600">3 mins away</h5>
                    <p className="text-xs text-gray-500">Affordable auto rides</p>
                </div>
                <h2 className="text-lg font-bold text-gray-900">₹{props.fare.auto}</h2>
            </div>
        </div>
    );
}

export default VehiclePanel;
