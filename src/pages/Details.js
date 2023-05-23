import Contact from "@/components/LandingPage/Contact";
import Footer from "@/components/LandingPage/Footer";
import LocationNav from "@/components/UserPage/LocationNav";
import Navbar from "@/components/UserPage/Navbar";
import React from "react";

function Details(props) {
  return (
    <section>
      <Navbar/>
      <LocationNav/>
      <Contact/>
      <Footer/>
    </section>
  );
}

export default Details;
