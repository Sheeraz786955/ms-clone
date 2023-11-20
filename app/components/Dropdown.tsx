"use client" 
import React, { use, useState } from 'react';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-right">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="bg-[#f2f2f2]  hover:bg-gray-400 text-gray-800 font-semibold py-1 px-2 rounded inline-flex items-center"
        >
          <span>Menu</span>
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            className="py-1 justify-end"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm justify-end text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Microsoft365
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Office
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm justify-end text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Windows
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Surface
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm justify-end text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Xbox
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Sport
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
