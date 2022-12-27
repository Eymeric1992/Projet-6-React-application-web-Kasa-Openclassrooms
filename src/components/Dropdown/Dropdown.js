import React, { useState } from "react";
import "./Dropdown.css";
import fleche from "../../assets/Vector.png";

function Dropdown({ titre, description }) {
  /* Crée un Hook d'état */
  const [ouvert, setOuvert] = useState(false);

  return (
    <div className="dropdown" id={`dropdown-${titre}`}>
      <div className="header-dropdown" key={titre}>
        <div className="titre-dropdown">{titre}</div>
        <span
          className={`fleche-dropdown ${ouvert}`}
          onClick={() => setOuvert(!ouvert)}
        >
          <img src={fleche} alt="Ouvrir cette liste" />
        </span>
      </div>
      {
        /* Si le dropdown est à TRUE alors il affichera la description */
        ouvert && (
          <div className="description-dropdown" key={description}>
            {description}{" "}
          </div>
        )
      }
    </div>
  );
}

export default Dropdown;
