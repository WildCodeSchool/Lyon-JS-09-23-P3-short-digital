import "./App.css";
import Navbar from "./layout/navbar/Navbar";
import NavMobile from "./layout/NavMobile/NavMobile";
import Carrousel from "./components/carrousel/Carrousel";
import Boutons from "./components/boutonsLanguages/BoutonsLanguages";

function App() {
  const title = [
    "Dernieres sorties",
    "Les plus populaires",
    "Les plus Plébicités",
  ];
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Boutons />
      <Carrousel title={title1} />
      <Carrousel title={title2} />
      <Carrousel title={title3} />
      <NavMobile />
    </>
  );
}

export default App;
