import React, { useState,useEffect } from 'react';
import { Fade } from 'react-reveal';
import {AiOutlineUpCircle} from "react-icons/ai"


const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);
  
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 200; // Change this value as needed
  
      setVisible(scrollY > threshold);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <Fade duration={500} when={visible} className='text-transparent'>
        <button
          className="fixed bottom-4 right-4 p-3 text-slate-400 rounded-full"
          onClick={handleScrollToTop}
        >
          <AiOutlineUpCircle size={40}/>
        </button>
      </Fade>
    );
  };
  export default ScrollToTopButton
  