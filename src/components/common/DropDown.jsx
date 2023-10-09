import React, { useState } from "react";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex items-center px-4 py-2 gap-3 text-xs tracking-[-0.24px] font-medium rounded-md text-[#90A3BF] bg-[#FFF] "
        >
         Select Your City
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
