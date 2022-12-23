import React from "react";
import Banner from "../../components/Banner";
import plantList from "../../datas/plantList";
import PlantItem from "../../components/PlantItem";
import { useParams } from "react-router-dom";
import Tag from "../../components/Tag"; 
 

function FicheLogement() {
    const title = 'JE CROIS COMPRENDRE QUE TU CHERCHES UN LOGEMENT'

    const { id } = useParams();

    const ficheLogement = plantList.find(logement => logement.id === id)

    console.log("voici id de fichelogement", ficheLogement)
    console.log("mon Id ", id)


const titleLogement = ficheLogement.title
const location = ficheLogement.location
const tagsLogement = ficheLogement?.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />
});
const hostname = ficheLogement.host.name
const hostpic = ficheLogement.host.picture
const description = ficheLogement.description
const equipements = ficheLogement.equipments
const ratings = ficheLogement.rating

const imgLogement = ficheLogement?.pictures.map((pictures, i) => {
 return <PlantItem key={i} nom={pictures}/>   
})

const pictureLogement = ficheLogement.pictures




  
    return (
        <div>
            <Banner />
            <div>{titleLogement}</div>
            <div>{location}</div>
            <div>{tagsLogement}</div>
            <div>{hostname}</div><br></br>
            <div>{hostpic}</div><br></br>
            <div>{description}</div><br></br>
            <div>{equipements}</div>
            <div>{ratings}</div>
      
          
          
          
            <div> {pictureLogement}</div>
            <div>{imgLogement}</div>

            </div>
            );
}
            export default FicheLogement;
/*
function GetId() {
   
    const [item, setItem] = useState();

  
useEffect(() => {
    const foundItem = PlantItem.find((c) => c.id === id);

    setItem(foundItem);
  }, []);
console.logog(GetId)}*/

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
    /*     <ul>
            { this.state.FicheLogement.map((element) => 
            <li>{element}</li>
            )}
        </ul>*/
