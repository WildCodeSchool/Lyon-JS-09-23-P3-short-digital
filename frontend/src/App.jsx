import "./App.css";
import { useState } from "react";
import Miniature from "./components/miniature/Miniature";

function App() {
  const [id, setId] = useState(1);
  return <Miniature id={id} setId={setId} />;
}

export default App;
