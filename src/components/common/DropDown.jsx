import React, { useState } from "react";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedCity, setSelectedCity] = useState("Select Your City");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const handleCitySelect = (city) => {
  //   setSelectedCity(city);
  //   toggleDropdown(); 
  // };

  // const menuClass = isOpen ? "block" : "hidden";
  // const transitionClass = isOpen
  //   ? "transition-all duration-300 ease-in-out transform opacity-100 scale-100"
  //   : "transition-all duration-300 ease-in-out transform opacity-0 scale-95";
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex items-center px-4 py-2 gap-3 text-xs tracking-[-0.24px] font-medium rounded-md text-[#90A3BF] bg-[#FFF] "
        >
          {/* {selectedCity} */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2 -mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DropDown;
