import "./App.css";
import ScrollingMiniatures from "./components/scrollingMiniature/ScrollingMiniatures";
import Navbar from "./layout/navbar/Navbar";
import NavMobile from "./layout/NavMobile/NavMobile";

function App() {
  return (
    <>
      <Navbar />
      <ScrollingMiniatures />
      <NavMobile />
    </>
  );
}

export default App;
