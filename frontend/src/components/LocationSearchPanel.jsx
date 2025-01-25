import 'remixicon/fonts/remixicon.css';

const LocationSearchPanel = (props) => {
  // Sample array for locations
  const locations = [
    "24B, Near Kapoors cafe, Sheryians Coding School, Bhopal",
    "22J, Near Sharmas cafe, Sheryians Coding School, Bhopal",
    "20S, Near Singhai's cafe, Sheryians Coding School, Bhopal",
    "28P, Near Malhotra's cafe, Sheryians Coding School, Bhopal"
  ];

  return (
    <div>
      {locations.map((elem, index) => {
        return (
          <div
            onClick={() => {
              if (props.setVehiclePanel) {
                props.setVehiclePanel(true);
              } else {
                console.error("setVehiclePanel is not provided as a prop.");
              }
            }}
            key={index}
            className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
          >
            <h2 className="bh-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
