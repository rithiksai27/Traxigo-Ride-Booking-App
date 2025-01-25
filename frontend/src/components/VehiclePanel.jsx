
const VehiclePanel = (props) => {
  return (
    <div>
         <h5
    className="p-1 text-center w-[93%] absolute top-0"
    onClick={() => {
      props.setvehiclePanel(false); // Corrected here
    }}
  >
    <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
    </h5>

 
        <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>
              <div onClick={()=>{
                props.setConfirmRidePanel(true)
              }} className="flex border mb-3 active:border-black rounded-lg w-full items-center justify-between bg-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 px-4 py-2">
        <img className="h-8 rounded-full border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s" alt="UberGo" />
        <div className="ml-4 flex-1">
          <h4 className="font-semibold text-sm flex items-center text-gray-800">
            UberGo 
            <span className="ml-2 text-xs text-blue-500 flex items-center">
              <i className="ri-user-3-fill mr-1"></i> 4
            </span>
          </h4>
          <p className="text-gray-500 text-xs">2 mins away · Compact rides</p>
        </div>
        <h2 className="text-sm font-bold text-gray-800">₹193.20</h2>
                  </div>

              <div onClick={()=>{
                props.setConfirmRidePanel(true)
              }} className="flex border mb-3 active:border-black rounded-lg w-full items-center justify-between bg-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 px-4 py-2">
                      <img className="h-8 rounded-full border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTJw6dzEo1MYXOAbONCG1oL82rxU_Bitb-g&s" alt="Moto" />
                      <div className="ml-4 flex-1">
                        <h4 className="font-semibold text-sm flex items-center text-gray-800">
                          Moto 
                          <span className="ml-2 text-xs text-blue-500 flex items-center">
                            <i className="ri-user-3-fill mr-1"></i> 1
                          </span>
                        </h4>
                        <p className="text-gray-500 text-xs">3 mins away · Bike rides</p>
                      </div>
                      <h2 className="text-sm font-bold text-gray-800">₹65</h2>
                  </div>

              <div onClick={()=>{
                props.setConfirmRidePanel(true)
              }} className="flex border mb-3 active:border-black rounded-lg w-full items-center justify-between bg-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 px-4 py-2">
                      <img className="h-8 rounded-full border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFabRnJZ8deGXJSKA1QjN45920WytRrdFsA&s" alt="UberAuto" />
                      <div className="ml-4 flex-1">
                        <h4 className="font-semibold text-sm flex items-center text-gray-800">
                          UberAuto 
                          <span className="ml-2 text-xs text-blue-500 flex items-center">
                            <i className="ri-user-3-fill mr-1"></i> 3
                          </span>
                        </h4>
                        <p className="text-gray-500 text-xs">3 mins away · Auto rides</p>
                      </div>
                      <h2 className="text-sm font-bold text-gray-800">₹118.86</h2>
                  </div>
    </div>
  )
}

export default VehiclePanel