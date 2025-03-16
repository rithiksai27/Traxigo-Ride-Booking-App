import {Link, useLocation} from 'react-router-dom'
import { useContext } from 'react';
import { SocketContext } from '../context/SocketContext';
import { useNavigate } from 'react-router-dom';
const Riding = () => {
  const location = useLocation();
  const {ride} = location.state || {}
  const {socket} = useContext(SocketContext)
  const navigate = useNavigate()
  socket.on("ride-ended", () => {
    navigate("/home")
  })

    return (
      <div className="h-screen flex flex-col">

        <Link to='/home' className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
            <i className="text-lg font-medium ri-home-4-line"></i>
        </Link>

        {/* Top Half: Image Section */}
        <div className="h-1/2">
          <img
            className="h-full w-full object-cover"
            src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
            alt="Background"
          />
        </div>
  
        {/* Bottom Half: Details Section */}
        <div className="h-1/2 p-4 flex flex-col justify-between">
          {/* Rider Information */}
          <div className="flex items-center justify-between border-b pb-3">
            <img
              className="h-12 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s"
              alt="Rider"
            />
            <div className="text-right">
            <h2 className='text-lg font-medium capitalize'>{ride?.captain.fullname.firstname}</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>{ride?.captain.vehicle.plate}</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
            </div>
          </div>
  
          {/* Location and Payment Information */}
          <div className="flex flex-col gap-4 mt-4">
            {/* Location Section */}
            <div className="flex items-center gap-4 p-3 border rounded-lg shadow-sm">
              <i className="text-lg ri-map-pin-2-fill text-green-600"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className='text-sm -mt-1 text-gray-600'>{ride?.destination}</p>
              </div>
            </div>
  
            {/* Payment Section */}
            <div className="flex items-center gap-4 p-3 border rounded-lg shadow-sm">
              <i className="text-lg ri-currency-line text-yellow-500"></i>
              <div>
              <h3 className='text-lg font-medium'>₹{ride?.fare} </h3>
                <p className="text-sm text-gray-600">Cash</p>
              </div>
            </div>
          </div>
  
          {/* Payment Button */}
          <button className="w-full mt-5 bg-green-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
            Make a Payment
          </button>
        </div>
      </div>
    );
  };
  
  export default Riding;
  