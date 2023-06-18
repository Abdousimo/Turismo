import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
function PlaceImage(props) {
    const [place,setPlace] = useState({});
    const[data,setData] = useState([])
    const[data1,setData1] = useState(['Plage.jpg','plage2.jpg'])
    const[src,setSrc] = useState('')
    useEffect (() => {
      const place = JSON.parse(localStorage.getItem("Temporary_Place"))
      setPlace(place)
 },[])

 useEffect(() =>{
  if(!place?.id) return
  axios.get('https://tourismo-api.onrender.com/places/'+place.id+'/photo/')
      .then(response => {
        setData(response.data);
        console.log(response.data);
        setSrc('https://tourismo-api.onrender.com'+response.data[0].image)
      })
      
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      
      
},[place?.id])

    return (
        <section>
            <img src={data1[0]} alt='' className='w-full object-contain'/>
            <h1 className='font-OPENSANS text-lg font-semibold'>{place.name}</h1>
       </section> 
    );
}

export default PlaceImage;