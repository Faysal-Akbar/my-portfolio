import React from 'react';
import Projects from '../../Projects/Projects';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            {/* home components here */}
            <Header></Header>
            <Banner></Banner>
            <Projects></Projects>
        </div>
    );
};

export default Home;