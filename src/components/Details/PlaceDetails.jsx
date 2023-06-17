import React from 'react';
import Dynamic from './Dynamic';
import Link from 'next/link';
import { useState,useEffect } from 'react';
function PlaceDetails(props) {
    const [place,setPlace] = useState({});
    useEffect (() => {
         setPlace(JSON.parse(localStorage.getItem("Temporary_Place")))
         console.log(place);
    },[])
    return (
        <section className='w-full flex flex-col sm:flex-row'>
            <div className='w-full sm:w-1/3 flex flex-row sm:flex-col'>
                 <div className='w-1/2 sm:w-full'>
                 <img src='/Asset 2 1.png' alt=''/>
                 <h1>{place.name}</h1>    
                </div> 
                <div className='w-1/2 sm:w-full'>
                    <div className='w-full border-b-2 border-b-slate-200 pl-4 font-OPENSANS font-bold text-[#157BF6]'><span className='border-b-2 border-b-[#157BF6]'>Presenntation</span></div>
                    <p>{place.description}</p>
                    <div className='w-24 text-md text-indigo-500 font-OPENSANS font-semibold hover:border-b-2 hover:border-b-indigo-500'><Link href={'/Description'}>View more...</Link></div>
                </div>
            </div>
           <div className='w-full sm:w-2/3'>
             <Dynamic style={{width:"100%"}}/>
           </div>
        </section>
    );
}

export default PlaceDetails;