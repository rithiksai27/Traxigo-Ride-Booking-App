const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion);
        } else if (activeField === 'destination') {
            setDestination(suggestion);
        }
    };

    return (
        <div className="bg-[#181818] m-6 p-4 rounded-lg shadow-lg">
            {
                suggestions.map((elem, idx) => (
                    <div 
                        key={idx} 
                        onClick={() => handleSuggestionClick(elem)} 
                        className="flex items-center gap-4 border-[1.5px] border-gray-700 hover:border-[#FF9800] px-5 py-3 rounded-lg my-2 
                        cursor-pointer transition-all duration-300 bg-[#222222] hover:bg-[#333333] shadow-md hover:shadow-[#FF9800]/50"
                    >
                        {/* Icon with Proper Centering */}
                        <div className="bg-[#FF9800] h-10 w-10 flex items-center justify-center rounded-full text-[#181818] text-lg font-semibold shadow-md">
                            <i className="ri-map-pin-fill"></i>
                        </div>
                        
                        {/* Text with Proper Alignment */}
                        <h4 className="text-[#E0E0E0] font-medium text-lg tracking-wide leading-none">
                            {elem}
                        </h4>
                    </div>
                ))
            }
        </div>
    );
};

export default LocationSearchPanel;
