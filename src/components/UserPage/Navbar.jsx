import React, { useState } from 'react';
import Image from 'next/image';
import { HiMagnifyingGlass } from "react-icons/hi2"
import {AiOutlineDownCircle} from "react-icons/ai"



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name); // You can perform further actions with the name value here
  };





  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
<nav className="bg-gray-800">
    <div className="max-w-7xl mx-auto px-2 py-4 sm:px-6 lg:px-8 flex md:justify-start md:items-center h-28 sm:h-32">
        <div className="w-full relative flex items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMenu}
                >
                <span className="sr-only">Open main menu</span>
                <svg
                    className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                <svg
                    className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                </button>
            </div>
        <div className="w-full flex items-center justify-between">
                        <div className="sm:w-1/4 flex items-center justify-center">
                        {/* Your logo or brand */}
                        
                            <Image width={230} height={70} src='/Asset 2 1.png' alt='' className='object-contain'/>
                        
                        </div>
            <div className="hidden sm:block sm:ml-6 sm:w-1/2">
                <div className="flex justify-between gap-3 items-center">
                                    {/* Navigation links */}
                    <div id='Drop-down' className="w-[300px] flex justify-between bg-white rounded-lg px-4 py-3 border-s-yellow-500">
                        <div>
                        <h4 className='text-indigo-700 font-OPENSANS font-bold'>Destination</h4>  
                        <p>Indicate your preferences</p>
                        </div>
                        <div className='text-slate-400'>
                        <AiOutlineDownCircle size={25}/>
                        </div> 
                    </div>
                    <button className="max-w-sm w-36 h-10 mx-auto flex justify-between items-center px-2 rounded-lg bg-slate-400 text-white">
                        <span>Search</span>
                        <HiMagnifyingGlass size={20}/>
                    </button>
                </div>
            </div>
                </div>
            </div>
        </div>

      {/* Mobile menu */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-2 bg-slate-300 flex items-center justify-center">
            <a>dfbivisfh</a>
        </div>
      </div>
        
    </nav>
    
)}

export default Navbar
