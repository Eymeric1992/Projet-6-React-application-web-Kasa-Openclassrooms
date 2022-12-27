import logementList from "../../datas/logementList.json";
import LogementItem from "../LogementItem/LogementItem";
import "./ShoppingList.css";

function ShoppingList() {
  return (
    <ul className="logement-list">
      {logementList.map(({ id, cover, title, description }) => (
        <LogementItem
          to={"/logement/" + logementList.id + "/#"}
          id={id}
          title={title}
          cover={cover}
          description={description}
          key={id}
        />
      ))}
    </ul>
  );
}

export default ShoppingList;

