import React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
function APropos() {
    const title = 'COUCOU voici la page à propos'

    return (
        <div>
        <Banner />
        <h1>{title}</h1>
        <Footer />
        </div>
    );
}

export default APropos;