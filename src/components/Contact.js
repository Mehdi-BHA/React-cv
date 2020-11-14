import React from 'react';

const Contact = () => {
    return (
        <div className='contact' data-aos="zoom-in">
            <h1>Contact</h1>
            <div className="seperator50"></div>
            <div className="form-container">
                <div className="contact-info">
                    <h2>Infos contact</h2>
                    <p><i className="far fa-envelope"></i><span>mehdibenhadjali@gmail.com</span></p>
                    <p><i className="fas fa-phone-alt"></i><span>+216 56 434 555</span></p>
                    <div className="social">
                        <i className="fab fa-github"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
                <div className="form">
                    <h2>Envoyer un message</h2>
                    <div className="formbox">
                        <div className="inputbox">
                            <input type="text" name="" required></input>
                            <span>Prénom</span>
                        </div>
                        <div className="inputbox">
                            <input type="text" name="" required></input>
                            <span>Nom</span>
                        </div>
                        <div className="inputbox">
                            <input type="text" name="" required></input>
                            <span>Adresse E-mail</span>
                        </div>
                        <div className="inputbox">
                            <input type="text" name="" required></input>
                            <span>Mobile</span>
                        </div>
                        <div className="inputbox">
                            <textarea type="text" name="" required></textarea>
                            <span>Ecrire votre message ici...</span>
                        </div>
                        <div className="inputbox">
                            <input type="submit" value="Envoyer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;