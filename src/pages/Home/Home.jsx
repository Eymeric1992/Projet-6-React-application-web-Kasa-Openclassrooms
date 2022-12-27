import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import ShoppingList from "../../components/ShoppingList/ShoppingList";
import ImageHome from "../../components/ImageHome/ImageHome";
import "./Home.css";

function App() {
  return (
    <div>
      <div className="Home">
        <Banner />
        <ImageHome />
        <ShoppingList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
