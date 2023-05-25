import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import {AiOutlineRight} from 'react-icons/ai'
function LocationNav(props) {
    return (
        <section className='w-full h-14 flex items-center gap-2 pl-3 bg-[#EEEEEE99]'>
           <Link href={'/'} className='font-OPENSANS font-bold pb-1 hover:border-b-[#003554] hover:border-b-2' ><Image src={'/Group.png'} alt='' width={25} height={25} style={{width:"auto",height:'auto'}}/></Link> 
           <span className='text-[#003554] font-OPENSANS font-bold'><AiOutlineRight size={20}/></span>
           <Link href={'/User'} className='text-[#003554] font-OPENSANS font-bold pb-1 hover:border-b-[#003554] hover:border-b-2'>Tourisme</Link>
        </section>
    );
}

export default LocationNav;