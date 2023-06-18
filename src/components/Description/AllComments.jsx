import React, { useEffect, useState } from 'react';
import axios from 'axios';
function AllComments(props) {
    const[data,setData] = useState([])
    const [place,setPlace] = useState({});

    useEffect (() => {
        const place = JSON.parse(localStorage.getItem("Temporary_Place"))
        setPlace(place)
   },[])
    useEffect(()=>{
        if(!place?.id) return
        axios.get('https://tourismo-api.onrender.com/places/'+place.id+'/approvedcomments/')
  .then(response => {
    setData(response.data);
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
    },[place?.id])
    return (
        
        <section>
            <hr/>
            <h1 className='pl-5 mt-3 text-lg font-OPENSANS font-bold'>Notice</h1>
            <div className='w-full my-4'>
                {
                    data.map((notice,index) =>
                    <div key={index} className='w-full px-3 py-2'>
                        <h1 className='text-lg font-OPENSANS font-bold text-[#003554]'>{notice.name}</h1>
                        <h3 className='text-slate-500 text-md font-OPENSANS font-semibold'>Rating: {notice.rating}</h3>
                        <p className='text-md font-OPENSANS font-light mb-4'>{notice.content}</p>
                        <hr/>
                    </div> 
                )}
                
                </div>
        </section>
    );
}

export default AllComments;