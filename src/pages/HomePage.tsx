import React from 'react';

import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Events from '../sections/Events';
import Partners from '../sections/Partners';
import Team from '../sections/Team';
import Blog from '../sections/Blog';
import Sponsors from '../sections/Sponsors';
import Contact from '../sections/Contact';

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