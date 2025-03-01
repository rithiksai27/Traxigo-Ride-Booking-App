import { useContext } from "react"
import { CaptainDataContext } from "../context/CaptainContext"

const CaptainDetails = () => {
  const { captain } = useContext(CaptainDataContext)
  return (
    <div>
        <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md">
    <div className="flex items-center gap-4">
      <img 
        src="https://images.unsplash.com/photo-1618721405821-80ebc4b63d26?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Driver" 
        className="w-12 h-12 rounded-full object-cover border-2 border-gray-300 shadow-sm" 
      />
      <h4 className="text-xl font-semibold text-gray-800 capitalize">{captain.fullname.firstname + " " + captain.fullname.lastname}</h4>
    </div>

    <div className="text-right">
      <h4 className="text-2xl font-bold text-green-600">₹295.5</h4>
      <p className="text-sm text-gray-500">Total Earnings</p>
    </div>
  </div>


  <div className="flex p-5 mt-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-lg justify-around">
    <div className="text-center">
      <i className="text-4xl text-blue-500 mb-2 ri-timer-line"></i>
      <h5 className="text-lg font-semibold text-gray-900">10.2</h5>
      <p className="text-sm text-gray-600">Hours Online</p>
    </div>
    
    <div className="text-center">
      <i className="text-4xl text-green-500 mb-2 ri-car-line"></i>
      <h5 className="text-lg font-semibold text-gray-900">32</h5>
      <p className="text-sm text-gray-600">Trips Completed</p>
    </div>
    
    <div className="text-center">
      <i className="text-4xl text-red-500 mb-2 ri-star-line"></i>
      <h5 className="text-lg font-semibold text-gray-900">4.9⭐</h5>
      <p className="text-sm text-gray-600">Driver Rating</p>
    </div>
  </div>
    </div>
  )
}

export default CaptainDetails