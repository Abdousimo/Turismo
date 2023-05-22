import React from 'react';

function Drop_down(props) {
     
    const buttons = ["Landmarks","Museums","Public squares","Parks","Archaeological sites","Gardens","Beaches","Religious sites","Markets","Restaurant"]

    return (
        <section className='w-[300px] z-50 bg-white flex flex-col gap-5 scroll-my-10'>
            <div className='w-full flex flex-col justify-center items-center gap-4 px-2 py-3'>
                <button className='w-11/12 h-8 bg-black'></button>
                <button className='w-11/12 h-8 bg-black'></button>
            </div>
            <div className='w-full px-2 pt-3'>
                  <h1 className='font-OPENSANS text-indigo-700 font-bold'>Category</h1>
                  <div className='w-full flex flex-wrap gap-4'>
                  {buttons.map((button,index)=>(
                    <button key={index}>{button}</button>
                  ))}
                 </div>
            </div>
            <div className='w-full flex flex-col gap-3'>
                <h1 className='font-OPENSANS text-indigo-700 font-bold'>Theme</h1>
                <div className='w-full h-10 bg-indigo-600 flex justify-between px-3 py-2 rounded-lg'>
                     <h3 className='text-white font-OPENSANS font-bold'>History and heritage</h3>
                     <>kvf</>
                </div>
            </div>
            <div className='flex justify-end mt-10'>
                <button className='w-20 h-10 bg-blue-700 text-white font-OPENSANS font-bold p-2 rounded-md'>Valider</button>
            </div>
        </section>
    );
}

export default Drop_down;