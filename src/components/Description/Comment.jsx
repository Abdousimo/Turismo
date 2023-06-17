import React, { useState } from 'react';
import AddComment from './AddComment';
import Image from 'next/image';

function Comment(props) {

    const [isopen,setIsOpen] = useState(false)
    return (
        <section className='px-2'>
            {isopen ? <AddComment setIsopen={setIsOpen}/>
           
           : <button className='w-48 h-10 flex items-center justify-start gap-2 bg-white font-OPENSANS font-bold text-blue-500 border-2 border-blue-500 pl-3 rounded-lg my-4' onClick={()=> {setIsOpen(!isopen)}}>
              <Image width={20} height={20} src="/Vector (1).png" alt='' className='object-contain'/>
              <span>write a review</span>
           </button>
        
        }
        </section>
    );
}

export default Comment;