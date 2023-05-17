import React from 'react';

import Image from 'next/image';
 

function Header(props) {
    return (
        <section className='w-full bg-transparent flex flex-col'>
            <div className='w-full h-48 flex items-center justify-start pl-40'> 
            <Image width={250} height={70} src="/Asset 2 1.png" alt='' className='object-contain'/>
            </div>
            <div className='w-full h-8 flex flex-col justify-center items-center gap-4'>
                <p className='font-sans text-md'>Be Fearless in The Pursuit Of What Sets Your soul On Fire in ALGERIA</p>
                <p className='text-5xl font-sans z-10'>Let's go for travel</p>
            </div>
            <div id='Hero'  className="w-full h-[770px] z-0 flex justify-center items-start pt-20">
                <button className='w-[226px] h-[55px] bg-[#FFC100] font-bold text-[#fff] text-xl rounded-2xl'>L'ETS TRAVEL</button>
            </div>
        </section>
    );
}

export default Header;