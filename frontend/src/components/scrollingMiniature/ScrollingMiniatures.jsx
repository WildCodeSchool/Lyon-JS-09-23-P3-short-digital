import { useState } from "react";
import Miniature from "../miniature/Miniature";
import styles from "./ScrollingMiniatures.module.css";

function ScrollingMiniatures() {
  const [toDisplay] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <div id={styles.scrollingMiniatures}>
      {toDisplay.map((number) => {
        return (
          <div id={styles.scrollingMiniatures__miniature}>
            <Miniature idMiniature={number} key={number} klass="videoSlider" />
          </div>
        );
      })}
    </div>
  );
}

export default ScrollingMiniatures;
