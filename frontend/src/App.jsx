import "./App.css";
import Navbar from "./layout/navbar/Navbar";
import HeroSlider from "./components/heroSlider/HeroSlider";
import NavMobile from "./layout/NavMobile/NavMobile";

function App() {
  return (
    <>
      <Navbar />

      <HeroSlider />
      <NavMobile />
    </>
  );
}

export default App;
