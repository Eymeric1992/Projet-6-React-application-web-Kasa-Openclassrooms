import React from "react";
import Banner from "../../components/Banner";

function APropos() {
    const title = 'COUCOU voici la page à propos'

    return (
        <div>
        <Banner />
        <h1>{title}</h1>
        </div>
    );
}

export default APropos;