import Nav from '@/components/Description/Nav';
import Footer from '@/components/LandingPage/Footer';
import LocationNav from '@/components/UserPage/LocationNav';
import React from 'react';
import Comment from '@/components/Description/Comment';
import AllComments from '@/components/Description/AllComments';
import PlaceHeader from '@/components/Description/PlaceHeader';
import AllImages from '@/components/Description/AllImages';
import FullDescription from '@/components/Description/FullDescription';


function Description(props) {

    return (
        <section>
            <Nav/>
            <LocationNav/>
            <PlaceHeader/>
            <AllImages/>
            <FullDescription/>
            <AllComments/>
            <Comment/>
            <Footer/>
        </section>
    );
}

export default Description;