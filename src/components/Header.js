import React from 'react';
import Navigation from './Navigation';
import Photo from '../media/photo.jpg';
import Typical from 'react-typical';

const Header = () => {

    return (
        <div className="header">
            <div className="header-image"></div>
            <Navigation></Navigation>
            <div className="bio">
                <img src={Photo} alt="Logo" />
                <div>
                    <p>Hey, je suis Mehdi Ben Hadj Ali</p>
                    <p><Typical loop={Infinity} wrapper='b' steps={[2000,'je suis développeur Front-End',1000,'je suis développeur Back-End',1000,'je suis développeur Full Stack JS',1000]}></Typical></p>
                </div>
            </div>
        </div>
    );
};

export default Header;