import React from 'react';
import { useState,useEffect } from 'react';
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
        </section>
    );
}

export default FullDescription;