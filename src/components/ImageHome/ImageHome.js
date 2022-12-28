import IMG from "../../assets/IMG.png";
import IMG2 from "../../assets/IMG2.png"
import "./ImageHome.css";

function ImageHome() {
  const text = "Chez vous, partout et ailleurs";
  return (
    <div className="fleximage">
      <img
        src={IMG}
        alt="décord de bord de mer en hiver avec des falaises"
        className="ImgHome"
      />
      <img
        src={IMG2}
        alt="zoom sur les roches"
        className="ImgHome2"
      />
      <p className="image-text">{text}</p>{" "}
    </div>
  );
}

export default ImageHome;
