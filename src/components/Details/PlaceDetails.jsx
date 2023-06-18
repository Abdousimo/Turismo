import React from 'react';
import Dynamic from './Dynamic';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import axios from 'axios';
import PlaceImage from './PlaceImage';
import PlaceRating from './PlaceRating';
function PlaceDetails(props) {
    const [place,setPlace] = useState({});
    
    useEffect (() => {
         setPlace(JSON.parse(localStorage.getItem("Temporary_Place")))
         console.log(place);
         
    },[])
    return (
        <section className='w-full flex flex-col sm:flex-row pr-2'>
            <div className='w-full sm:w-1/3 flex flex-row sm:flex-col'>
                <div className='w-full sm:1/2 flex flex-col'>
                      <PlaceImage/>
                     <PlaceRating/>
                     <h4 className='text-md text-slate-400 font-OPENSANS font-semibold'>{place.category}</h4>
                </div>
                <div className='w-full sm:1/2 flex flex-col py-2 pl-3'>
                    <span className='border-b-2 border-b-[#157BF6] text-[#157BF6] font-OPENSANS font-bold'>Presenntation</span>
                    <p className='font-OPENSANS text-md font-light my-3'>{place.description}</p>
                    <div className='w-24 text-md text-indigo-500 font-OPENSANS font-semibold hover:border-b-2 hover:border-b-indigo-500'><Link href={'/Description'}>View more...</Link></div>
                </div>
           </div>
           <div className='w-full sm:w-2/3 pl-1'>
             <Dynamic style={{width:"100%"}}/>
           </div>
        </section>
    );
}

export default PlaceDetails;