import React from 'react';
import Image from 'next/image';


function Cerf(props) {
    return (
        <div>
                <hr/>
                <h1 className='text-lg font-OPENSANS font-bold'>Pratical information</h1>
                <div>
                    <div className='text-blue-800 my-3 flex items-center gap-3'>
                        <BiBus size={30}/>
                        <h3 className='font-OPENSANS font-semibold text-lg text-[#003554]'>bus bus bus </h3>
                    </div>
                    <div className='text-blue-800 my-3 flex items-center gap-3 '>
                        <BiTimeFive size={30}/>
                        <h3 className='font-OPENSANS font-semibold text-lg text-[#003554]'>Time </h3>
                    </div>
                </div>
        </div>
    );
}

export default Cerf;