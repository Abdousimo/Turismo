import React from "react";
import Navbar from "@/components/UserPage/Navbar";
import DynamicMap from "@/components/UserPage/DynamicMap";
import LocationNav from "@/components/UserPage/LocationNav";
import Footer from "@/components/LandingPage/Footer";
import Contact from "@/components/LandingPage/Contact";

function User(props) {
  return (
    <section>
      <Navbar />
      <LocationNav />
      <div className="relative z-0">
        <DynamicMap />
      </div>
      <Contact />
      <Footer />
    </section>
  );
}

export default User;
