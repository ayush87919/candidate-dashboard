import React, { useState } from 'react';
import Group from '../assets/Group.png';
import search from '../assets/search.svg';
const DropdownNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-900 p-6 ">
        
        
      <div className="flex items-center flex-shrink-0 text-white mr-6">
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleDropdown}
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      
      
      
      <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
        <div className="text-sm space-x-20 lg:flex-grow pb-5">
        <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          > <img src={Group} className="w-16 h-14 block " />
            
          </a>
        <a
        href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text mr-4"
          >
            Dashboard
           
          </a> 
          
          
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Job setup
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Applications
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Interviews
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Candidates
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Clients
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
           Process Management
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Inbox
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            <img src={search} className="w-16 h-14" />
          </a>
          {/* Add more links as needed */}
        </div>
        </div>
      
    </nav>
  );
};

export default DropdownNavbar;