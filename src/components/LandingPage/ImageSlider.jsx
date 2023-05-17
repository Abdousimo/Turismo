import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
  '/Back1.png',
  '/Asset 2 1.png',
  '/harbor-oran-hero 1.png'
  
  // Add more image paths as needed
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Increment the image index
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Set the timeout duration (e.g., 3 seconds)

    return () => clearTimeout(timeout);
  }, [currentImageIndex]);

  return (
    <div className="slider flex overflow-auto mb-8">
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt="Slider Image"
        className='w-full h-auto transition-opacity duration-500' 
          
        
      />
    ))}
  </div>
  );
};

export default ImageSlider;
