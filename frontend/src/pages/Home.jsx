import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import axios from 'axios';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
import { SocketContext } from '../context/SocketContext';
import { useContext } from 'react';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import LiveTracking from '../components/LiveTracking';

const Home = () => {
  const [ pickup, setPickup ] = useState('')
    const [ destination, setDestination ] = useState('')
    const [ panelOpen, setPanelOpen ] = useState(false)
    const vehiclePanelRef = useRef(null)
    const confirmRidePanelRef = useRef(null)
    const vehicleFoundRef = useRef(null)
    const waitingForDriverRef = useRef(null)
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const [ vehiclePanel, setVehiclePanel ] = useState(false)
    const [ confirmRidePanel, setConfirmRidePanel ] = useState(false)
    const [ vehicleFound, setVehicleFound ] = useState(false)
    const [ waitingForDriver, setWaitingForDriver ] = useState(false)
    const [ pickupSuggestions, setPickupSuggestions ] = useState([])
    const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
    const [ activeField, setActiveField ] = useState(null)
    const [ fare, setFare ] = useState({})
    const [ vehicleType, setVehicleType ] = useState(null)
    const [ ride, setRide ] = useState(null)

    const navigate = useNavigate()

    const { socket } = useContext(SocketContext)
    const { user } = useContext(UserDataContext)

    useEffect(() => {
      if (user?._id) {
        socket.emit("join", { userType: "user", userId: user._id });
      }
    }, [user]);
    

    socket.on('ride-confirmed', ride => {
      setVehicleFound(false)
      setWaitingForDriver(true)
      setRide(ride) 
  })

  socket.on('ride-started', ride => {
      setWaitingForDriver(false)
      navigate('/riding', { state: { ride } })
  })


  const handlePickupChange = async (e) => {
      setPickup(e.target.value)
      try {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
              params: { input: e.target.value },
              headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`
              }

          })
          setPickupSuggestions(response.data)
      } catch {
          // handle error
      }
  }
  

  
  const handleDestinationChange = async (e) => {
    setDestination(e.target.value)
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
            params: { input: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setDestinationSuggestions(response.data)
    } catch {
        // handle error
    }
}

const submitHandler = (e) => {
    e.preventDefault()
}

  useGSAP(() => {
    gsap.to(panelRef.current, {
      height: panelOpen ? "70%" : "0%",
      opacity: 1,
      padding: panelOpen ? 24 : 20,
    });
    gsap.to(panelCloseRef.current, { opacity: panelOpen ? 1 : 0 });
  }, [panelOpen]);

  useGSAP(() => {
    gsap.to(vehiclePanelRef.current, {
      transform: vehiclePanel ? "translateY(0)" : "translateY(100%)",
    });
  }, [vehiclePanel]);

  useGSAP(() => {
    gsap.to(confirmRidePanelRef.current, {
      transform: confirmRidePanel ? "translateY(0)" : "translateY(100%)",
    });
  }, [confirmRidePanel]);

  useGSAP(() => {
    gsap.to(vehicleFoundRef.current, {
      transform: vehicleFound ? "translateY(0)" : "translateY(100%)",
    });
  }, [vehicleFound]);

  useGSAP(() => {
    gsap.to(waitingForDriverRef.current, {
      transform: waitingForDriver ? "translateY(0)" : "translateY(100%)",
    });
  }, [waitingForDriver]);
  

  async function findTrip() {
    setVehiclePanel(true)
    setPanelOpen(false)

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
        params: { pickup, destination },
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })


    setFare(response.data)


}

async function createRide() {
    await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
        pickup,
        destination,
        vehicleType
    }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })


}



  return (
    <div className="h-screen relative overflow-hidden">
      <div className="h-screen w-screen">
       <LiveTracking />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
  <div className="h-[30%] p-6 bg-[#1E293B] relative rounded-t-3xl shadow-lg">
    {/* Close Button */}
    <h5
      ref={panelCloseRef}
      onClick={() => setPanelOpen(false)}
      className="absolute opacity-0 right-6 top-6 text-2xl cursor-pointer text-gray-400"
    >
      <i className="ri-arrow-down-wide-line"></i>
    </h5>

    {/* Title */}
    <h4 className="text-2xl font-semibold text-white">Find a trip</h4>

    {/* Form */}
    <form>
      

      {/* Pickup Input */}
      <input
        onClick={() => {
          setPanelOpen(true);
          setActiveField("pickup");
        }}
        value={pickup}
        onChange={handlePickupChange}
        className="bg-[#2D2F33] text-white px-12 py-2 text-base rounded-lg w-full mt-5 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#86A8E7]"
        type="text"
        placeholder="Add a pick-up location"
      />

      {/* Destination Input */}
      <input
        onClick={() => {
          setPanelOpen(true);
          setActiveField("destination");
        }}
        value={destination}
        onChange={handleDestinationChange}
        className="bg-[#2D2F33] text-white px-12 py-2 text-base rounded-lg w-full mt-3 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#86A8E7]"
        type="text"
        placeholder="Enter your destination"
      />
    </form>

    {/* Find Trip Button */}
    <button
      onClick={findTrip}
      className="bg-[#86A8E7] text-[#181A1B] px-4 py-3 text-lg font-semibold rounded-lg mt-4 w-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
    >
      Find Trip
    </button>
  </div>


        <div ref={panelRef} className="h-0 overflow-hidden">
          <LocationSearchPanel
            suggestions={activeField === "pickup" ? pickupSuggestions : destinationSuggestions}
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-[#20293A] px-3 py-10 pt-12"
      >
        <VehiclePanel
          selectVehicle = {setVehicleType}
          fare={fare}
          setConfirmRidePanel={setConfirmRidePanel}
          setvehiclePanel={setVehiclePanel}
        />
      </div>

      <div
        ref={confirmRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-[#20293A] px-3 py-6 pt-12"
      >
       <ConfirmRide
          createRide={createRide}
          pickup={pickup}
          fare={fare}
          vehicleType={vehicleType}
          destination={destination}
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicleFound={setVehicleFound}
        />

      </div>

      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-[#20293A] px-3 py-6 pt-12"
      >
        <LookingForDriver 
        createRide={createRide}
        pickup={pickup}
        fare={fare}
        vehicleType={vehicleType}
        destination={destination}
        setVehicleFound={setVehicleFound} />
      </div>

      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10 bottom-0 bg-[#20293A] px-3 py-6 pt-12"
      >
        <WaitingForDriver 
         ride={ride}
         setVehicleFound={setVehicleFound}
         setWaitingForDriver={setWaitingForDriver}
         waitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
