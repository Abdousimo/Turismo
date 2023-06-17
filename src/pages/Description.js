import Nav from '@/components/Description/Nav';
import Footer from '@/components/LandingPage/Footer';
import LocationNav from '@/components/UserPage/LocationNav';
import React from 'react';
import Comment from '@/components/Description/Comment';

function Description(props) {
    return (
        <section>
            <Nav/>
            <LocationNav/>
            <Comment/>
            <Footer/>
        </section>
    );
}

export default Description;