import React, {useEffect} from 'react';
import AboutWrapper from '../components/about';

const About = () => {
    useEffect(() => {
        document.title = 'Lower Flower - о нас'
    }, [])
    return (
        <>
            <AboutWrapper />
        </>
    );
};

export default About;