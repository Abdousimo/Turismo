import Footer from '@/components/LandingPage/Footer';
import LocationNav from '@/components/UserPage/LocationNav';
import Navbar from '@/components/UserPage/Navbar';
import React from 'react';

function Description(props) {
    return (
        <section>
            <Navbar/>
            <LocationNav/>
            <Footer/>
        </section>
    );
}

export default Description;