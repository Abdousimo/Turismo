import React, { useState } from 'react';
import Image from 'next/image';
import { HiMagnifyingGlass } from "react-icons/hi2"
import axios from 'axios';
import Drop_down from './Drop_down';
import Link from 'next/link';
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const[search,setSearch] = useState('')
  const[data,setData] = useState([])
  const handleSubmit = (e) => {
    router.push('/Search')
    e.preventDefault();
     axios.get('https://tourismo-api.onrender.com/places/search/?query='+search)
        .then(response => {
          setData(response.data);
          console.log(response.data);
          const jsonData = JSON.stringify(response.data)
          localStorage.setItem("Places",jsonData)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  };





  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
<nav className="bg-[#003554]">
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
                        <div className="relative">
                        {/* Your logo or brand */}
                        
                            <Image width={230} height={60} src='/Asset 5 1.png' alt='' className='object-contain'/>
                             <p className='absolute text-white text-sm left-16 bottom-[-10px]'>Bring your vacation to life!</p>
                        </div>
            <div className="hidden sm:block sm:ml-6 sm:w-1/2">
                <div className="flex justify-between gap-3 items-center">
                                    {/* Navigation links */}
                    <Drop_down/>
                    
                    <form onSubmit={handleSubmit} className="max-w-sm w-[200px] h-14 flex  items-center p-0 rounded-lg">
                
                <input
                   id="search"
                   type="text"
                   onChange={(e) => setSearch(e.target.value)}
                   value={search}
                   className="w-9/12 h-full p-2 rounded-l-lg focus:outline-none focus:border-blue-500"
                   required
                   placeholder='Search'
                    />
                    <button
                       type="submit"
                       className="h-full w-3/12 p-1 flex items-center justify-center text-white bg-slate-400 rounded-r-lg hover:bg-blue-600">
                             <Link href={'/Search'}><HiMagnifyingGlass size={20}/></Link>
                    </button>
                       
           </form>
                </div>
            </div>
                </div>
            </div>
        </div>

      {/* Mobile menu */}
      <div
        className={`${isOpen ? 'block w-full' : 'hidden'} sm:hidden absolute z-50`}
        id="mobile-menu"
      >
        <div className="flex flex-col gap-4 items-start justify-center px-2 py-4 bg-[#003554] border-t-white border-t-4">
            
            <Drop_down/>
            
            <form onSubmit={handleSubmit} className="max-w-sm w-[200px] h-14 flex  items-center p-0 rounded-lg">
                
                 <input
                    id="search"
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    className="w-9/12 h-full p-2 rounded-l-lg focus:outline-none focus:border-blue-500"
                    required
                    placeholder='Search'
                     />
                     <button
                        type="submit"
                        className="h-full w-3/12 p-1 flex items-center justify-center text-white bg-slate-400 rounded-r-lg hover:bg-blue-600">
                              <HiMagnifyingGlass size={20}/>
                     </button>
                        
            </form>
            
        </div>
      </div>
        
    </nav>
    
)}

export default Navbar
