import Link from 'next/link';
import React from 'react';

import ScrollToTopButton from './ScrollToTopButton';


function Footer(props) {

  
    return (
        <section className='w-full '>
            <div className='w-full flex flex-col md:flex-row justify-center md:justify-between h-3/4 bg-[#104A7A] py-20 gap-4 md:gap-0'>
                <div className='w-full md:1/3 flex items-center justify-center'>
                     <img src='/Asset 1 1.png' alt='' className='w-[192px] h-[183px]'/>
                </div>
                <div className='w-full md:1/3 flex justify-center items-center'>
                     <button className='w-11/12 md:w-full h-10 bg-white text-indigo-700 hover:bg-indigo-600 hover:text-white font-bold flex justify-center items-center rounded-lg'>Try to visit algeria now</button>
                </div>
                <div className='w-full md:1/3 flex flex-col text-white justify-center items-center gap-4'>
                       
                            <a href='' className='hover:text-slate-400'>Who are we?</a>
                            <a href='' className='hover:text-slate-400'>Contact Us</a>
                            <a href='' className='hover:text-slate-400'>Terms of use</a>
                            <div className='w-full flex justify-end items-end pr-12'>
                                  <ScrollToTopButton/>
                            </div>
                        
                </div>
            </div>
            <div className='w-full h-1/4 flex items-center justify-center bg-[#09375D]'>
                <p className='text-md text-white font-bold'>© 2023 TOURISMO. All rights reserved</p>
            </div>
        </section>
    );
}

export default Footer;