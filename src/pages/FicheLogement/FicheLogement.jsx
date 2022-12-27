import React from "react";
import Banner from "../../components/Banner/Banner";
import logementList from "../../datas/logementList";
import { useParams } from "react-router-dom";
import Tag from "../../components/Tag/Tag";
import "./FicheLogement.css";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Dropdown/Dropdown";
import starfull from "../../assets/starfull.png";
import starempty from "../../assets/starempty.png";
import Carousel from "../../components/Carousel/Carousel";

function FicheLogement() {
  const { id } = useParams();

  const ficheLogement = logementList.find((logement) => logement.id === id);

  if (ficheLogement === undefined) {
    window.location.href = "/*";
  }

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
    return <p key={equip}>{equip}</p>;
  });

  return (
    <div>
      <div className="Home">
        <Banner />{" "}
        <div className="totheleft">
          {" "}
          <div
            className="styleimage"
            style={{
              maxWidth: 1240,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 25,
              position: "relative",
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
      </div>
      <Footer />
    </div>
  );
}
export default FicheLogement;
