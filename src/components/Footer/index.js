import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./footer.css";

function Footer() {
    return (
        <footer>
            <div className="f-content">
                <p>&copy; 2025 Kaos</p>
                <div className="social-media">
                    <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href=""><FontAwesomeIcon icon={faWhatsapp} /></a>
                    <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
