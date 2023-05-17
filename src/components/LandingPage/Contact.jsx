import React from 'react';
import { useState } from 'react';
function Contact(props) {



    


  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)

    // Reset form fields
    setFullName('');
    setMessage('');
  };
    return (
    <section className='w-full flex flex-col md:flex-row px-4 py-3'>
            <div className='form w-11/12 md:w-1/2 '>
            <form className="w-full max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="full-name" className="block mb-2 font-bold text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="full-name"
          className="w-full px-3 py-2 leading-tight border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 font-bold text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          className="w-full px-3 py-2 leading-tight border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
          rows="5"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className='w-full flex justify-end items-center'>
            <button
                   type="submit"
                  className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
                     Send
            </button>
        </div>
       </form>
            </div>
            <div className='image w-11/12 md:w-1/2 flex items-center justify-center px-6'>
                 <img src='/image_processing20220123-2187-1ksjorh 2.png' alt='' className='w-[510px] h-[400px]'/>
            </div>
    </section>
    );
}

export default Contact;