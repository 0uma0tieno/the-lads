import React from 'react';

import Hero from '../sections/Hero';
import Projects from './Projects';
import Events from './Events';
import Partners from '../sections/Partners';
import Team from '../sections/Team';
import Blog from './Blog';
import Sponsors from './Sponsors';
import Contact from './Contact';

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <Projects />
            <Events />
            <Partners />
            <Team />
            <Blog />
            <Sponsors />
            <Contact />
        </>
    );
};

export default HomePage;