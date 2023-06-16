import React from 'react';

function Presentation(props) {

    const StyleSpan = " text-yellow-400"
    return (
        <section className='w-full flex justify-center items-center my-20 text-center'>
            <p className='w-1/2 text-indigo-900 text-center text-2xl sm:text-4xl font-bold'>Uncover <span className={StyleSpan}>Algeria's</span> magic <span className={StyleSpan}>Sahara</span>  Desert, <span className={StyleSpan}>Roman</span> ruins, Mediterranean coast. 
                Vibrant markets, Delicious <span className={StyleSpan}>cuisine</span>, 
                  Rich heritage...
            </p>
        </section>
    );
}

export default Presentation;