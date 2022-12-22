import React from "react";
import "../styles/Footer.css";
import logoFooter from "../../src/assets/imagefooter.png";

function Footer() {
    return(
        <footer>
            <div id="footer-container">
                <img src={logoFooter} alt="Logo" />
                <p>&copy; 2022 Kasa. Tous droits réservés</p>
            </div>
        </footer>
    );
}

export default Footer;