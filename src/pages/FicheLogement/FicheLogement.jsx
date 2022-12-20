import React from "react";
import Banner from "../../components/Banner";
import { useParams} from 'react-router-dom';
import  plantList  from "../../datas/plantList";
import OUI1 from '../../assets/oui1.jfif';
import OUI2 from '../../assets/oui2.jfif';
import OUI3 from '../../assets/oui3.jfif';
import OUI4 from '../../assets/oui4.jfif';
import OUI5 from '../../assets/oui5.jfif';


  

function FicheLogement() {
    const title = 'JE CROIS COMPRENDRE QUE TU CHERCHES UN LOGEMENT, DUDE ...' 
//const id = plantList.getElementById({id})

    //const params = useParams(id);

    //console.log(id)  

    return (
        <div>
        <Banner />
        <h1>{title}</h1>
        <img src={OUI1}/>
        <img src={OUI2}/>
        <img src={OUI3}/>
        <img src={OUI4}/>
        <img src={OUI5}/>



        </div>
    );
}/*
function FicheLogement() {
    Récupère la bonne fiche 
    const id = useParams();
    const ficheLogement = plantList.find(plantList => plantList.id === id.id);}
*/

   

export default FicheLogement;