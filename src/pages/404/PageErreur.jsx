import React from "react";
import Banner from "../../components/Banner";

function Erreur() {
    const title = 'YOU ARE ON A WRONG PAGE DUDE'

    return (
        <div>
        <Banner />
        <h1>{title}</h1>
        </div>
    );
}

export default Erreur;