import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {AiOutlineRight} from 'react-icons/ai'
function NavSearch(props) {
    return (
        <section className='w-full h-14 flex items-center gap-2 pl-24 bg-[#EEEEEE99]'>
              <Link href={'/'} className='font-OPENSANS font-bold pb-1 hover:border-b-[#003554] hover:border-b-2' ><Image src={'/Group.png'} alt='' width={25} height={25} style={{width:"auto",height:'auto'}} onClick={()=> {localStorage.setItem("Places",null)}}/></Link> 
               <span className='text-[#003554] font-OPENSANS font-bold'><AiOutlineRight size={20}/></span>
               <Link href={'/User'} className='text-[#003554] font-OPENSANS font-bold pb-1 hover:border-b-[#003554] hover:border-b-2' onClick={()=> {localStorage.setItem("Places",null)}}>Tourisme</Link>
          </section> 
    );
}

export default NavSearch;