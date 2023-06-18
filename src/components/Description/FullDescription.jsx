import React from 'react';
import { useState,useEffect } from 'react';
import {BiBus,BiTimeFive} from "react-icons/bi"
import Image from 'next/image';
function FullDescription(props) {
    const[place,setPlace] = useState({})
    
    useEffect (() => {
        const place = JSON.parse(localStorage.getItem("Temporary_Place"))
        setPlace(place)
   },[])
    return (
        <section>
            <div className='w-full h-18 flex items-center gap-2 p-2'>
                <Image width={30} height={30} src={'/Description.png'} alt=''/>
                <h1 className='text-lg font-bold font-OPENSANS'>Full Description</h1>
            </div>
            <div className='w-full p-5'>
                <p className='text-[#003554] font-OPENSANS font-semibold'>{place.description}</p>
            </div>
            <div>
                <hr/>
                <h1 className='text-lg font-OPENSANS font-bold'>Pratical information</h1>
                <div>
                    <div className='text-blue-800 my-3 flex items-center gap-3'>
                        <BiBus size={30}/>
                        <h3 className='font-OPENSANS font-semibold text-lg text-[#003554]'>Bus - Taxi</h3>
                    </div>
                    <div className='text-blue-800 my-3 flex items-center gap-3 '>
                        <BiTimeFive size={30}/>
                        <h3 className='font-OPENSANS font-semibold text-lg text-[#003554]'><span className='font-OPENSANS font-bold text-green-500'>Open -</span>13:00h</h3>
                    </div>
                </div>
        </div>
        </section>
    );
}

export default FullDescription;