import React, { useState } from 'react';
import Image from 'next/image';
import { HiMagnifyingGlass } from "react-icons/hi2"





const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [name, setName] = useState('');

 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name); // You can perform further actions with the name value here
  };





  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
<nav className="bg-[#003554]">
    <div className="max-w-7xl mx-auto px-2 py-4 sm:px-6 lg:px-8 flex md:justify-start md:items-center h-28 sm:h-32">
        <div className="w-full relative flex items-center justify-between">
            
        <div className="w-full flex items-center justify-between">
                        <div className="relative">
                        {/* Your logo or brand */}
                        
                            <Image width={230} height={60} src='/Asset 5 1.png' alt='' className='object-contain'/>
                             <p className='absolute text-white text-sm left-16 bottom-[-10px]'>Bring your vacation to life!</p>
                        </div>
            
                </div>
            </div>
        </div>

    
     
    
        
    </nav>
    
)}

export default Nav