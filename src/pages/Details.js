import Nav from "@/components/Description/Nav";
import Dynamic from "@/components/Details/Dynamic";
import PlaceDetails from "@/components/Details/PlaceDetails";
import Contact from "@/components/LandingPage/Contact";
import Footer from "@/components/LandingPage/Footer";
import LocationNav from "@/components/UserPage/LocationNav";
import React from "react";

function Details(props) {
  return (
    <section>
      <Nav/>
      <LocationNav/>
      <PlaceDetails/>
      <Contact/>
      <Footer/>
    </section>
  );
}

export default Details;
