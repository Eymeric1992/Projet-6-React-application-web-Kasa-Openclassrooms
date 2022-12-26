import React from "react";
import Banner from "../../components/Banner";
import plantList from "../../datas/plantList";

import { useParams } from "react-router-dom";
import Tag from "../../components/Tag";
import "../../styles/FicheLogement.css";
import Footer from "../../components/Footer";
import Dropdown from "../../components/Dropdown";

import starfull from "../../assets/starfull.png";
import starempty from "../../assets/starempty.png";
import Carousel from "../../components/Carousel";

function FicheLogement() {
  const { id } = useParams();

  const ficheLogement = plantList.find((logement) => logement.id === id);

  // rediriger vers 404

  console.log("voici id de fichelogement", ficheLogement);
  console.log("mon Id ", id);

  const titleLogement = ficheLogement.title;
  const location = ficheLogement.location;
  const tagsLogement = ficheLogement?.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
  });
  const hostname = ficheLogement.host.name;
  const hostpic = ficheLogement.host.picture;
  const description = ficheLogement.description;
  const equipements = ficheLogement.equipments.map((equip) => {
    return <p>{equip}</p>;
  });
  // const ratings = ficheLogement.rating;

  /*
const imgLogement = ficheLogement?.pictures.map((pictures, i) => {
 return <PlantItem key={i} nom={pictures}/>   
})*/

  return (
    <div className="bodycenter">
      <Banner />{" "}
      <div className="totheleft">
        {" "}
        <div className="styleimage"
          style={{
            maxWidth: 1240,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 25,
          }}
        >
          <Carousel>
            {ficheLogement.pictures.map((img) => {
              return <img src={img} key={img} alt="pic du logement" />;
            })}
          </Carousel>
        </div>
        <div className="marginbox">
          <div className="titrelogement">{titleLogement}</div>
          <div className="location">{location}</div>
          <div className="tags">{tagsLogement}</div>
          <div className="boxname">
            <div className="hostname">{hostname}</div>
            <div>
              <img
                src={hostpic}
                key={ficheLogement.pictures}
                alt="voici votre hote"
                className="host"
              />
            </div>
            
          </div>
          <div className="star">
          {(function () {
            let noteLogement = [];
            let etoileComplete = true;
            for (let index = 0; index < 5; index++) {
              if (index === parseInt(ficheLogement?.rating)) {
                etoileComplete = false;
              }
              if (etoileComplete === true) {
                noteLogement.push(
                  <img
                    key={index}
                    className="etoile"
                    src={starfull}
                    alt={`${ficheLogement?.rating}/5`}
                  />
                );
              } else {
                noteLogement.push(
                  <img
                    key={index}
                    className="etoile"
                    src={starempty}
                    alt={`${ficheLogement?.rating}/5`}
                  />
                );
              }
            }
            return noteLogement;
          })()}
        </div>
        </div>
       
        <div className="info">
          <Dropdown
            className="boxinfo"
            titre="Description"
            description={description}
          />
          <Dropdown
            className="boxinfo"
            titre="Equipements"
            description={equipements}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default FicheLogement;

/* <div>{hostpic}</div><br></br>
            <img src={ficheLogement.pictures} alt="oh bah c'est tres tres tres jolie"/>
            <div> {pictureLogement}</div>
            <div>{imgLogement}</div>*/

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
