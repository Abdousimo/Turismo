import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
function AllImages(props) {
    const[data,setData] = useState([{}])
    const[data1,setData1] = useState(['Plage.jpg','plage2.jpg'])
    const[place,setPlace] = useState({})
    const[index,setIndex] = useState(0)
    const url = 'https://tourismo-api.onrender.com'
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
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
        console.log(data);
        
},[place?.id])

const hndliClickleft = () => {
    setIndex((index - 1) % data1.length)
}

const hndliClickright = () => {
   
    setIndex((index + 1) % data1.length)
    console.log(index);
}
    return (
        <section className='w-full relative mb-8'>
            <div className='z-0 w-full flex items-center justify-center'>
        
            <img
                id='slide'
                 src={data1[index]}
                 alt=""
               className='w-10/12 h-auto ease-in object-cover rounded-xl' 
             /> 
             
          </div>
           <div className='w-full  flex  justify-center items-center z-10 absolute top-1/2 -translate-y-1/2 text-center'>
                  <div className='w-10/12 flex justify-between items-center px-2'>
                      <button className='w-[55px] h-[55px] flex items-center justify-center rounded-3xl py-2 bg-[#D9D9D9]'><Image width={20} height={20} src={'/left.png'} onClick={() => hndliClickleft()}/></button>
                      <button className='w-[55px] h-[55px] flex items-center justify-center rounded-3xl py-2 bg-[#D9D9D9]'><Image width={20} height={20} src={'/right.png'} onClick={() => hndliClickright()}/></button>
                  </div>
           </div>      
        </section>
    );
}

export default AllImages;