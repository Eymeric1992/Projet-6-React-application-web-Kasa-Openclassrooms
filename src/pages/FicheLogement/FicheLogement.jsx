import React from "react";
import Banner from "../../components/Banner";
import plantList from "../../datas/plantList";
import PlantItem from "../../components/PlantItem";
import { useParams } from "react-router-dom";
import Tag from "../../components/Tag"; 
 

function FicheLogement() {
    const title = 'JE CROIS COMPRENDRE QUE TU CHERCHES UN LOGEMENT, DUDE ...'

    const { id } = useParams();

    const ficheLogement = plantList.find(logement => logement.id === id)

    console.log("voici id de fichelogement", ficheLogement)
    console.log("mon Id ", id)

    const tagsLogement = ficheLogement?.tags.map((tags, i) => {
        return <Tag key={i} nom={tags} />
    });
const imgLogement = ficheLogement?.pictures.map((pictures, i) => {
 return <PlantItem key={i} nom={pictures}/>   
})

const pictureLogement = ficheLogement.pictures

  
    return (
        <div>
            <Banner />
            <h1>{title}</h1>
           
            <div>{tagsLogement}</div>
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
