import Nav from '@/components/Description/Nav';
import Contact from '@/components/LandingPage/Contact';
import Footer from '@/components/LandingPage/Footer';
import DynamicMapSearch from '@/components/Search/DynamicMapSearch';
import NavSearch from '@/components/Search/NavSearch';
import React from 'react';

function Search(props) {
    return (
        <section>
            <Nav/>
            <NavSearch/>
            <DynamicMapSearch/>
            <Contact/>
            <Footer/>
        </section>
    );
}

export default Search;