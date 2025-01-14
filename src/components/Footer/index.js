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
                    <a href="https://www.facebook.com/alex.alfai.5/" target="blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://wa.me/258861635734" target="blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <a href="https://www.instagram.com/aleatoriokaos/" target="blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;