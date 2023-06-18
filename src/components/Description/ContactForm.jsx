import { useState } from 'react';
import postData from './PostData';

const ContactForm = () => {

  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');
  const[ville,setVille] = useState(false)
  const[jiha,setJiha] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    const data1 = {
        email: email,
        region: region,
      }
      const data2 = {
        email: email,
        ville: city,
      }
      if (jiha) {
        const JSONdata = JSON.stringify(data1)
        console.log(JSONdata);
        postData(JSONdata,'https://tourismo-api.onrender.com/newsletter/region/')
      }
      if (ville) {
         const JSONdata = JSON.stringify(data2)
         console.log(JSONdata);
        postData(JSONdata,'https://tourismo-api.onrender.com/newsletter/ville/')
      }
     
    // Perform your form submission logic here
  };
  

  return (
    <div className="max-w-md mx-auto min-h-96 bg-slate-200 px-3 py-2 absolute right-2 top-[-320px] z-50 rounded-lg">
        <span className='my-3 text-lg text-blue-600 font-OPENSANS font-bold w-full flex items-center justify-center'>Register</span>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
            placeholder='Email'
          />
        </div>
        { (ville || jiha) ?
      <div>
          { jiha ?  <div>
               <input
                type="text"
                id="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full px-4 py-2 my-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
                placeholder='Region'
                />
            </div>
                 :
            <div>
               <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-2 my-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
                placeholder='City'
               />
            </div>}
        </div> : 
        
          <div className='w-full flex flex-col gap-2'>
                <button className='w-full bg-indigo-300 text-lg font-OPENSANS font-bold py-4 hover:bg-white rounded-lg' onClick={()=>{setJiha(!jiha)}}>Chose Region</button>
                <button className='w-full bg-indigo-300 text-lg font-OPENSANS font-bold py-4 hover:bg-white rounded-lg' onClick={()=>{setVille(!ville)}}>Chose City</button>
          </div>
          
          }
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
