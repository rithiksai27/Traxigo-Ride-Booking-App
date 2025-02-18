const RidePopUp = (props) => {
    return (
      <div>
        <div>
          <h5
            className="p-1 text-center w-[93%] absolute top-0"
            onClick={() => {
              props.setRidePopupPanel(false);
            }}
          >
            <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
          </h5>
          <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>
          <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4">
            <div className="flex items-center gap-3">
              <img
                className="h-10 rounded-full object-cover w-10"
                src="https://images.unsplash.com/photo-1613424969431-62a604d2cf67?q=80&w=2186&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <h2 className="text-lg font-medium ">Alicey</h2>
            </div>
            <h5 className="text-lg font-semibold">2.2 KM</h5>
          </div>
          <div className="flex gap-2 justify-between flex-col items-center">
            <div className="w-full mt-5">
              <div className="flex items-center gap-5 p-3 border-b-2">
                <i className="text-lg ri-map-pin-user-fill"></i>
                <div>
                  <h3 className="text-lg font-medium">562/11-A</h3>
                  <p className="text-sm -mt-1 text-gray-600">Vijayawada, Andhra</p>
                </div>
              </div>
              <div className="flex items-center gap-5 p-3 border-b-2">
                <i className=" text-lg ri-map-pin-2-fill"></i>
                <div>
                  <h3 className="text-lg font-medium">562/11-A</h3>
                  <p className="text-sm -mt-1 text-gray-600">Vijayawada, Andhra</p>
                </div>
              </div>
              <div className="flex items-center gap-5 p-3">
                <i className="text-lg ri-currency-line"></i>
                <div>
                  <h3 className="text-lg font-medium">193.20</h3>
                  <p className="text-sm -mt-1 text-gray-600">Cash</p>
                </div>
              </div>
            </div>
  
           <div className="flex mt-5 w-full items-center justify-between">


           <button
              onClick={() => {
                props.setRidePopupPanel(false);
              }}
              className="mt-1 bg-gray-300 text-gray-700 text-white px-8 font-semibold p-3"
            >
              Ignore
            </button>

            
             <button
              onClick={() => {
                props.setConfirmRidePopupPanel(true);
              }}
              className="bg-green-600 text-white px-8 font-semibold p-3"
            >
              Accept
            </button>
  
            
           </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default RidePopUp;
  