import React from "react";
import Banner from "../../components/Banner/Banner";
import "./PageErreur.css"
import { Link } from "react-router-dom";
 
 

function Erreur() {
    const title = '404'
    const texte = "Oups! La page que vous demandez n'existe pas."

    return (
        <div>
        <Banner />
        <h1 className="erreurbig">{title}</h1>
        <p className="texte">{texte}</p>
        <Link to="/" className="comeback">Retourner sur la page d'accueil</Link>
       

        </div>
    );
}

export default Erreur;