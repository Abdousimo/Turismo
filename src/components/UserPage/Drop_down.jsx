import React from 'react';
import { useState } from 'react';
import {AiOutlineDownCircle,AiOutlineUpCircle} from "react-icons/ai"

function Drop_down(props) {
    const[Open,setOpen] = useState(false);
    const buttons = ["Landmarks","Museums","Public squares","Parks","Archaeological sites","Gardens","Beaches","Religious sites","Markets","Restaurant"]

    return (
        <section className="w-[300px] max-w-[350px] h-14 flex flex-col justify-between items-center bg-white rounded-lg" style={{borderBottom:"solid 2px #FFC100"}}>
           
                        <div className='w-full flex pl-0 pr-2 font-OPENSANS gap-3 relative'>
                        <span className='h-14 w-[20px] bg-[#FFC100] rounded-l-lg'></span>
                            <div>
                            <h4 className='text-indigo-700 font-bold'>Destination</h4>  
                            <p className='text-sm'>Indicate your preferences</p>
                            </div>  
                        <button onClick={()=> {setOpen(!Open)}} className='text-slate-400 h-full pt-5 absolute right-3 bottom-2'>
                        {Open ?  <AiOutlineUpCircle size={25}/> : <AiOutlineDownCircle size={25}/>}
                        </button> 
                        </div>
                         
                    
        {Open ? <div className='w-full z-50 bg-white flex flex-col gap-5 rounded-b-lg -rounded-t-lg mt-[-5px]' style={{borderBottom:"solid 6px #FFC100"}}>
            <div className='w-full flex flex-col justify-center items-center gap-4 px-2 py-3'>
                <button className='w-11/12 h-8 bg-black'></button>
                <button className='w-11/12 h-8 bg-black'></button>
            </div>
            <div className='w-full flex flex-col gap-4 px-2 pt-3'>
                  <h1 className='font-OPENSANS text-indigo-700 font-bold'>Category</h1>
                  <div className='w-full flex flex-wrap gap-3 px-2'>
                  {buttons.map((button,index)=>(
                    <button key={index} className='bg-[#DEDEDE94] text-[#003554] font-OPENSANS font-semibold py-1 px-2 rounded-lg'>{button}</button>
                  ))}
                 </div>
            </div>
            <div className='w-full flex flex-col gap-3 px-2'>
                <h1 className='font-OPENSANS text-indigo-700 font-bold'>Theme</h1>
                <div className='w-11/12 h-10 bg-indigo-600 flex justify-between px-3 py-2 rounded-lg'>
                     <h3 className='text-white font-OPENSANS font-bold'>History and heritage</h3>
                     <>kvf</>
                </div>
            </div>
            <div className='flex justify-end my-10 pr-4'>
                <button className='w-20 h-10 bg-indigo-900 text-white font-OPENSANS font-bold p-2 rounded-md'>Valider</button>
            </div>
        </div> : <></>}

        </section>
    );
}

export default Drop_down;