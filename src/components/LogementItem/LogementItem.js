import "./LogementItem.css";
import { Link } from "react-router-dom";

function handleClick(e) {
  e.preventDefault();
}

function LogementItem({ id, title, cover, name }) {
  return (
    <li className="logement-item" onClick={handleClick} key={handleClick.id}>
      <Link
        key={LogementItem.id}
        to={`/FicheLogement/${id}`}
        className="logementlien"
      >
        <img
          className="logement-item-cover"
          src={cover}
          alt={`${name} cover`}
          id={id}
          key={cover.name}
        />
        <div className="logement-title" key={title}>
          {" "}
          {title}
        </div>
      </Link>
    </li>
  );
}

export default LogementItem;
