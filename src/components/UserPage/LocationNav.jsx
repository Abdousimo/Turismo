import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import {AiOutlineRight} from 'react-icons/ai'
function LocationNav(props) {
    const router = useRouter()
    const [place,setPlace] = useState({});
    useEffect (() => {
         setPlace(JSON.parse(localStorage.getItem("Temporary_Place")))
         console.log(place);
    },[])  
      
    return (

        <section className='w-full h-14 flex items-center gap-2 pl-24 bg-[#EEEEEE99]'>
           <Link href={'/'} className='font-OPENSANS font-bold pb-1 hover:border-b-[#003554] hover:border-b-2' onClick={()=> {window.localStorage.setItem("Temporary_Place",null)}}><Image src={'/Group.png'} alt='' width={25} height={25} style={{width:"auto",height:'auto'}}/></Link> 
           <span className='text-[#003554] font-OPENSANS font-bold'><AiOutlineRight size={20}/></span>
           <Link href={'/User'} className='text-[#003554] font-OPENSANS font-bold pb-1 hover:border-b-[#003554] hover:border-b-2' onClick={()=> {window.localStorage.setItem("Temporary_Place",null)}}>Tourisme</Link>
           <span className='text-[#003554] font-OPENSANS font-bold'><AiOutlineRight size={20}/></span>
           <div>
               
                {
                 (router.pathname === '/User')  ?  <Link href={'/User'} className='text-[#003554] font-OPENSANS font-bold pb-1 hover:border-b-[#003554] hover:border-b-2'>Search</Link>
                 : <Link href={'/Details'} className='text-[#003554] font-OPENSANS font-bold pb-1 hover:border-b-[#003554] hover:border-b-2'>{place.name}</Link> 
                } 
                
                     
           </div> 
        </section>
    );
}

export default LocationNav;