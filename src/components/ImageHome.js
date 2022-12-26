import IMG from "../assets/IMG.png";
import "../styles/ImageHome.css";

function ImageHome() {
  const text = "Chez vous, partout et ailleurs";
  return (
    <div className="fleximage">
      <img
        src={IMG}
        alt="décord de bord de mer en hiver avec des falaises"
        className="ImgHome"
      />
      <h1 className="image-text">{text}</h1>{" "}
    </div>
  );
}

export default ImageHome;
