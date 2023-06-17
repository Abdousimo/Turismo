import { useState } from 'react';
import postData from './PostData';



const AddComment = (props) => {
 
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const[name,setName] = useState("");
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

 

   const  handleSubmit  = (e) => {
    e.preventDefault();
    const place  = JSON.parse(localStorage.getItem("Temporary_Place"))
    const data = {
        name: name,
        content: comment,
        rating: rating,
        touristicPlace:place.id
      }
   
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data);
      postData(JSONdata,'https://tourismo-api.onrender.com/comments/');
    // Reset form fields
    setName('');
    setComment('');
    setRating(0);
    props.setIsopen(false)
  };

  return (
    
        <form onSubmit={handleSubmit} className='max-w-md mx-auto p-4 bg-white rounded-lg shadow-md'>
      <div className='mb-4'>
        <textarea
          id="name"
          value={name}
          onChange={handleNameChange}
          required
          placeholder='Name'
          className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
        />
      </div>
      <div className='mb-4'>
        <textarea
          id="comment"
          value={comment}
          onChange={handleCommentChange}
          required
          placeholder='Comment'
          className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
        />
      </div>
      <div className='mb-4'>
        <input
          type="number"
          id="rating"
          min={1}
          max={5}
          value={rating}
          onChange={handleRatingChange}
          required
          placeholder='Rating'
          className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
        />
      </div>
      <button type="submit" className='w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors'>Add Comment</button>
    </form> 
  );
};

export default AddComment;
