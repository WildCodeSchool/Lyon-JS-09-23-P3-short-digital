import "./App.css";
import Navbar from "./layout/navbar/Navbar";
import NavMobile from "./layout/NavMobile/NavMobile";
import Carrousel from "./components/carrousel/Carrousel";

function App() {
  const title = [
    "Dernieres sorties",
    "Les plus populaires",
    "Les plus Plébicités",
  ];
  return (
    <>
      <Navbar />
      <Carrousel title={title[0]} />
      <Carrousel title={title[1]} />
      <Carrousel title={title[2]} />
      <NavMobile />
    </>
  );
}

export default App;
