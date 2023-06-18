import React from 'react';
import { useState } from 'react';
import {AiOutlineDownCircle,AiOutlineUpCircle} from "react-icons/ai"
import Image from 'next/image';
import { useRouter } from 'next/router'
import axios from 'axios';

function Drop_down(props) {
    const router = useRouter()
    const[Open,setOpen] = useState(false);
    const[data,setData] = useState('')
    const[DefaultTheme,setDefaultTheme] = useState("History and Heritage")
    const[isHistoryOpen,setIsHistoryOpen]=useState(false)
    const [buttons,setButtons]=useState([
        {name:"Landmarks",isSelected:false},
        {name:"Museums",isSelected:false},
        {name:"Public squares",isSelected:false},
        {name:"Parks",isSelected:false},
        {name:"Archaeological sites",isSelected:false},
        {name:"Gardens",isSelected:false},
        {name:"Beaches",isSelected:false}
        ,{name:"Religious sites",isSelected:false},
        {name:"Markets",isSelected:false},
        {name:"Restaurant",isSelected:false},
        {name:"Event",isSelected:false}
        ])
        const [Themes,setThemes] = useState([
            {name:"History and Heritage",isSelected:true},
            {name:"arts and culture",isSelected:false},
            {name:"Nature and landscapes",isSelected:false},
            {name:"Spirituality and religion",isSelected:false},
            {name:"Entertainment and leisure",isSelected:false},
            {name:" Gardens and green spaces",isSelected:false},
            {name:"Markets and shopping",isSelected:false},
            {name:"Gastronomy and cooking",isSelected:false},
            {name:"Adventures and sports",isSelected:false},
            {name:"Education and learning",isSelected:false}      
        ])

        const handleClick = (id) => {
            // Create a copy of the object array
              const newArray = [...buttons];
            // Modify the desired value(s) in the object
        
              newArray[id].isSelected = !(newArray[id].isSelected);
              setData(newArray[id].name)
              console.log(data);
            // Update the state with the modified array
            setButtons(newArray);
          };

          const handleClickTheme = (id) =>{
                const newArray = [...Themes];
                newArray[id].isSelected = !(newArray[id].isSelected);
                if (id !== 0) {
                    newArray[0].isSelected = false;
                }
                    setDefaultTheme(newArray[id].name)
                    setData(newArray[id].name)
                    console.log(data); 
                    setThemes(newArray)
                    setIsHistoryOpen(false)
          }

          function countWords(str) {
            // Remove leading/trailing white spaces
            str = str.trim();
          
            // Split the string into an array of words using regular expression
            const words = str.split(/\s+/);
          
            // Return the length of the words array
            return words.length;
          }
          

          const handleValider = () => {
            router.push('/Search')
            let newdata =  data.toLowerCase();
             newdata = newdata.replace(/\s/g, "%20");
            console.log(newdata);
            let url = ''
            if (countWords(newdata) === 1) {
                 url = 'https://tourismo-api.onrender.com/places/filter/?category='+newdata
                
            }else url =  'https://tourismo-api.onrender.com/places/filter/?theme='+newdata
        axios.get(url)
        .then(response => {
          setData(response.data);
          console.log(response.data);
          const jsonData = JSON.stringify(response.data)
          localStorage.setItem("Places",jsonData)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });

 
          }
    
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
            <div className='w-full flex flex-col justify-center items-center gap-4 px-2 py-3 font-OPENSANS mt-4'>
                <button className='w-11/12 h-14 flex items-center justify-start gap-2 font-OPENSANS font-bold text-xl rounded-xl text-[#157BF6] border-2 border-[#157BF6] bg-white px-3 py-2'>
                    <Image width={25} height={7} src="/Vector (1).png" alt=''/>
                    <span>Chose the region</span> 
                </button>
                <button className='w-11/12 h-14 flex items-center justify-start gap-2 font-OPENSANS font-bold text-xl rounded-xl text-[#157BF6] border-2 border-[#157BF6] bg-white px-3 py-2'>
                <Image width={25} height={7} src="/Vector (1).png" alt=''/>
                <span>Choose the city</span>
                </button>
            </div>
            <div className='w-full flex flex-col gap-4 px-2 pt-3'>
                  <h1 className='font-OPENSANS text-indigo-700 font-bold'>Category</h1>
                  <div className='w-full flex flex-wrap gap-3 px-2'>
                  {buttons.map((button,index)=>(
                    <button key={index} className={`font-OPENSANS font-semibold py-1 px-2 rounded-lg ${button.isSelected ? 'bg-blue-700 text-white' : 'bg-[#DEDEDE94] text-[#003554]'}`} onClick={()=> handleClick(index)}>{button.name}</button>
                  ))}
                 </div>
                 
            </div>
            <div className='w-full flex flex-col gap-3 px-2'>
                <h1 className='font-OPENSANS text-indigo-700 font-bold'>Theme</h1>
                <div className='flex flex-col'>
                    <div className='w-11/12 h-10 bg-indigo-600 flex justify-between pl-3 pr-[3px] py-2 rounded-lg'>
                     <h3 className='text-white font-OPENSANS font-bold'>{DefaultTheme}</h3>
                     <button onClick={()=>{setIsHistoryOpen(!isHistoryOpen)}} className='text-white'>{isHistoryOpen ? <AiOutlineUpCircle size={25}/> : <AiOutlineDownCircle size={25}/>}</button>
                    </div> 
                    <div className='bg-slate-100 w-11/12'>{isHistoryOpen ?
                    <div>{Themes.map((theme,index)=>(
                    <button key={index} className='h-10 w-full bg-white hover:bg-slate-200 block items-start justify-center font-OPENSANS font-bold text-lg' onClick={()=> handleClickTheme(index)}>{theme.name}</button>
                  ))} </div> : <></>  } 
                    </div>
                            
                     
                    
                </div>
            </div>
            <div className='flex justify-end my-10 pr-4'>
                <button className='w-20 h-10 bg-indigo-900 text-white font-OPENSANS font-bold p-2 rounded-md' onClick={()=> handleValider()}>Valider</button>
            </div>
        </div> : <></>}

        </section>
    );
}

export default Drop_down;