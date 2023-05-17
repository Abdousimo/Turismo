import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
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
    }, 2000); // Set the timeout duration (e.g., 3 seconds)

    return () => clearTimeout(timeout);
  }, [currentImageIndex]);

  return (
  //   <Swiper
  //   spaceBetween={50}
  //   slidesPerView={3}
  //   loop
  //   autoplay={{
  //     pauseOnMouseEnter: false,
  //     disableOnInteraction: false,
  //     delay: 1000,
  //     waitForTransition: false
  //   }}
  //   onSlideChange={() => console.log('slide change')}
  //   onSwiper={(swiper) => console.log(swiper)}
  // >
  //   <SwiperSlide>
  //           <img
  //               id='slide'
  //               src={images[0]}
  //               alt="Slider Image"
  //               className='w-full h-auto transition-transform translate-x-0 ease-in' 
  //            />
  //         </SwiperSlide>
  //   <SwiperSlide><img
  //               id='slide'
  //               src={images[1]}
  //               alt="Slider Image"
  //               className='w-full h-auto transition-transform translate-x-0 ease-in' 
  //            /></SwiperSlide>
  //   <SwiperSlide><img
  //               id='slide'
  //               src={images[2]}
  //               alt="Slider Image"
  //               className='w-full h-auto transition-transform translate-x-0 ease-in' 
  //            /></SwiperSlide>
    
  //   ...
  // </Swiper>
   <div  className="slider w-full relative mb-8">
          <div className='z-0'>
            <img
                id='slide'
                 src={images[2]}
                 alt="Slider Image"
               className='w-full h-auto ease-in object-cover' 
             />
          </div>
          <div className='w-full flex flex-col justify-center items-center z-10 absolute top-1/2 -translate-y-1/2 text-center'>
            <h1 className='font-bold text-2xl text-white'>Hidden Gems of Algeria</h1>
            <h4 className='font-sans text-2xl text-white'>“Unveiling the Treasures Within”</h4>
            <button className='bg-[#157BF6] hover:bg-blue-500 focus:outline-none focus:bg-blue-600" w-[361px] h-[50px] text-white font-bold font-sans rounded-lg mt-10 px-4 py-2'>TRY TO VISIT ALGERIA NOW</button>
          </div>
    </div>
  );
};

export default ImageSlider;
