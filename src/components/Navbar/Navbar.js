import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css"
export default function Navbar(){
    return(
        <nav>
<Link to="/" className="Navbar"> Accueil</Link>
<Link to='/Apropos' className="Navbar">A propos</Link>
        </nav>
    )
}