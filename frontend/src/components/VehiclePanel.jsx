import React from 'react';

const VehiclePanel = (props) => {
    return (
        <div className="bg-[#181A1B] shadow-xl rounded-t-2xl p-5 animate-slide-up border border-gray-700">
            {/* Close Button */}
            <h5 className="p-1 text-center w-[93%] absolute top-2" onClick={() => props.setVehiclePanel(false)}>
                <i className="text-3xl text-gray-500 hover:text-gray-300 transition-all ri-arrow-down-wide-line cursor-pointer"></i>
            </h5>

            {/* Header */}
            <h3 className="text-2xl font-semibold text-[#86A8E7] mb-5 text-center">Choose a Ride</h3>

            {/* Ride Options */}
            {[
                { type: 'car', name: 'Traxigo Cab', img: 'https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg', seats: 4, time: '2 mins away', description: 'Affordable, compact rides', price: props.fare.car },
                { type: 'moto', name: 'Traxigo Moto', img: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png', seats: 1, time: '3 mins away', description: 'Affordable motorcycle rides', price: props.fare.moto },
                { type: 'auto', name: 'Traxigo Auto', img: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png', seats: 3, time: '3 mins away', description: 'Affordable auto rides', price: props.fare.auto }
            ].map((ride, index) => (
                <div 
                    key={index}
                    onClick={() => { props.setConfirmRidePanel(true); props.selectVehicle(ride.type); }} 
                    className="flex border border-gray-600 hover:border-gray-300 transition-all rounded-xl w-full p-3 mt-3 items-center justify-between cursor-pointer hover:shadow-lg bg-[#1E293B] hover:scale-105 duration-200"
                >
                    <img className="h-12 rounded-lg shadow-md" src={ride.img} alt={ride.name} />
                    <div className="ml-3 w-1/2">
                        <h4 className="font-semibold text-lg text-white">{ride.name} <span className="text-gray-400"><i className="ri-user-3-fill"></i> {ride.seats}</span></h4>
                        <h5 className="text-sm text-gray-400">{ride.time}</h5>
                        <p className="text-xs text-gray-500">{ride.description}</p>
                    </div>
                    <h2 className="text-lg font-semibold text-[#86A8E7]">₹{ride.price}</h2>
                </div>
            ))}
        </div>
    );
}

export default VehiclePanel;
