import React from "react";
import Banner from "../../components/Banner";
import  plantList  from "../../datas/plantList";
import OUI1 from '../../assets/oui1.jfif';
import OUI2 from '../../assets/oui2.jfif';
import OUI3 from '../../assets/oui3.jfif';
import OUI4 from '../../assets/oui4.jfif';
import OUI5 from '../../assets/oui5.jfif';
import PlantItem from "../../components/PlantItem";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


/*
function GetId() {
   
    const [item, setItem] = useState();

  
useEffect(() => {
    const foundItem = PlantItem.find((c) => c.id === id);

    setItem(foundItem);
  }, []);
console.logog(GetId)}*/

function FicheLogement() {
    const title = 'JE CROIS COMPRENDRE QUE TU CHERCHES UN LOGEMENT, DUDE ...' 
    const [item, setItem] = useState();
    const {id} = useParams();
  
    const ficheLogement = plantList.find(logement => logement.id === id)
 
    console.log("voici id de fichelogement",ficheLogement)
    console.log("mon Id ", id)


    

  
/*
plantList.map( item => {
    return (<div key={item.id}>
        { item.title }
    </div>)
})
console.log(title)*/
    /*useEffect(() => {
      const foundItem = PlantItem.find((c) => c.id === id);
  
      setItem(foundItem);
    }, []);*/
   
    
//const id = plantList.getElementById({id})

    //const params = useParams(id);

    //console.log(id)  

    return (
        <div>
        <Banner />
        <h1>{title}</h1>   
     
        <PlantItem />
        <img src={OUI1} alt='ouiouiouiouiouioui'/>
        <img src={OUI2}alt='ouiouiouiouiouioui'/>
        <img src={OUI3}alt='ouiouiouiouiouioui'/>
        <img src={OUI4}alt='ouiouiouiouiouioui'/>
        <img src={OUI5}alt='ouiouiouiouiouioui'/>
  
					



        </div>
    );
}/*
function FicheLogement() {
    Récupère la bonne fiche 
    const id = useParams();
    const ficheLogement = plantList.find(plantList => plantList.id === id.id);}
*/




export default FicheLogement;