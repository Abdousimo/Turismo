import React from "react";
import { StrictMode } from 'react'
import Navbar from "@/components/UserPage/Navbar";
import DynamicMap from "@/components/UserPage/DynamicMap";
import LocationNav from "@/components/UserPage/LocationNav";
import Footer from "@/components/LandingPage/Footer";
import Contact from "@/components/LandingPage/Contact";
import { useEffect,useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";
function User(props) {
 


  return (
    <StrictMode>
    <section>
      <Navbar/>
      <LocationNav />
      <div className="relative z-0">
        <DynamicMap />
      </div>
      <Contact />
      <Footer />
    </section>
    </StrictMode>
  );
}
export const Places = data;
export default User;
