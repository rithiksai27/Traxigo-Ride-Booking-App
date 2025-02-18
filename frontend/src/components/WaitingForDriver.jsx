// eslint-disable-next-line react/prop-types
const WaitingForDriver = ({ props }) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          // eslint-disable-next-line react/prop-types
          props.setIsWaitingForDriver(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      
      <div className="flex items-center justify-between">
        <img
          className="h-12"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s"
          alt=""
        />
        <div className="text-right">
          <h2 className="text-lg font-medium">Rithik</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">AP16 AB 1234</h4>
          <p className="text-sm text-gray-600">BMW M5</p>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
