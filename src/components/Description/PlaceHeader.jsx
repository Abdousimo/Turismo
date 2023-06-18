import React from 'react';
import PlaceRating from '../Details/PlaceRating';
import { useState,useEffect } from 'react';
function PlaceHeader(props) {
    const[place,setPlace] = useState({})
    
    useEffect (() => {
        const place = JSON.parse(localStorage.getItem("Temporary_Place"))
        setPlace(place)
   },[])
    return (
        <section className='w-full flex flex-col gap-3 px-10 py-12'>
            <h1 className='text-3xl font-OPENSANS font-bold text-[#003554]'>{place.name}</h1>
            <PlaceRating/>
            <h3 className='w-40 h-7 flex items-center justify-center border-2 rounded-md border-slate-400 font-OPENSANS font-semibold text-md text-slate-400 px-2 py-1'>{place.category}</h3>
        </section>
    );
}

export default PlaceHeader;