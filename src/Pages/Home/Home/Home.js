import React from 'react';
import Footer from '../../Footer/Footer';
import Projects from '../../Projects/Projects';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            {/* home components here */}
            <Header></Header>
            <Banner></Banner>
            <Projects></Projects>
            <Skills></Skills>
            <Footer></Footer>
        </div>
    );
};

export default Home;