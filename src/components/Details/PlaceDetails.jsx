import React from 'react';
import Dynamic from './Dynamic';
import Image from 'next/image';
import Link from 'next/link';

function PlaceDetails(props) {
    return (
        <section className='w-full flex flex-col sm:flex-row'>
            <div className='w-full sm:w-1/3 flex flex-row sm:flex-col'>
                 <div className='w-1/2 sm:w-full'>
                 <Image/>    
                </div> 
                <div className='w-1/2 sm:w-full'>
                    <div className='w-full border-b-2 border-b-slate-200 pl-4 font-OPENSANS font-bold text-[#157BF6]'><span className='border-b-2 border-b-[#157BF6]'>Presenntation</span></div>
                    <p></p>
                    <Link href={'/Description'}>View more</Link>
                </div>
            </div>
           <div className='w-full sm:w-2/3'>
             <Dynamic style={{width:"100%"}}/>
           </div>
        </section>
    );
}

export default PlaceDetails;