import React from 'react';

const Navigation = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <p>Mehdi BHA</p>
            </div>
            <div className="navlinks">
                <ul>
                    <li><i className="fas fa-home"></i><span>Accueil</span></li>
                    <li><i className="fas fa-mountain"></i><span>Compétences</span></li>
                    <li><i className="fas fa-home"></i><span>Expérience</span></li>
                    <li><i className="fas fa-images"></i><span>Projets</span></li>
                    <li><i className="fas fa-address-book"></i><span>Contact</span></li>
                </ul>
            </div>

        </div>
    );
};

export default Navigation;