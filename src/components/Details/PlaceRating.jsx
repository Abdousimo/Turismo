import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
function PlaceRating(props) {
    const[data,setData] = useState({})
    const[place,setPlace] = useState({})
    
    useEffect (() => {
        const place = JSON.parse(localStorage.getItem("Temporary_Place"))
        setPlace(place)
   },[])

   useEffect(() =>{
    if(!place?.id) return
    axios.get('https://tourismo-api.onrender.com/places/'+place.id+'/stats/')
        .then(response => {
          setData(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
        console.log(data);
        
},[place?.id])
    return (
        <section>
            <div className='flex'>
            <span className='text-md  font-OPENSANS font-semibold'>Rating: </span>
            <div className='text-md font-OPENSANS font-semibold'>
                {data.rating_average}
            </div>
            </div>
        </section>
    );
}

export default PlaceRating;