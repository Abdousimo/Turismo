import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import {androidMail} from 'react-icons-kit/ionicons/androidMail'
import ScrollToTopButton from './ScrollToTopButton';
import ContactForm from '../Description/ContactForm';


function Footer(props) {
    const[Open,setOpen] = useState(false)
  
    return (
        <section className='w-full relative'>
            {Open ? <ContactForm/> : <></>}
            <div className='w-full flex items-center justify-end bg-[#104A7A] pr-3' >
            <Icon size={40}  style={{ color: '#00ffAA' }} icon={androidMail} onClick={()=> {setOpen(!Open)}}/> 
            </div>
            <div className='w-full flex flex-col md:flex-row justify-center md:justify-between h-8/12 bg-[#104A7A] py-20 gap-4 md:gap-0'>
                <div className='w-full md:1/3 flex items-center justify-center'>
                     <img src='/Asset 1 1.png' alt='' className='w-[192px] h-[183px]'/>
                </div>
                <div className='w-full md:1/3 flex justify-center items-center'>
                     <button className='w-11/12 md:w-full h-10 bg-white text-indigo-700 font-bold flex justify-center items-center rounded-lg'>Try to visit algeria now</button>
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
            <div className='w-full h-2/12 flex items-center justify-center bg-[#09375D]'>
                <p className='text-md text-white font-bold'>© 2023 TOURISMO. All rights reserved</p>
            </div>
        </section>
    );
}

export default Footer;