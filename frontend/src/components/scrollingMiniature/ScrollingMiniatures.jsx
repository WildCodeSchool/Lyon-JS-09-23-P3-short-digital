import { useState } from "react";
import { Link } from "react-router-dom";
import Miniature from "../miniature/Miniature";
import styles from "./ScrollingMiniatures.module.css";

function ScrollingMiniatures() {
  const [toDisplay] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <div id={styles.scrollingMiniatures}>
      {toDisplay.map((number) => {
        return (
          <div id={styles.scrollingMiniatures__miniature}>
            <Link
              to={{
                pathname: "/video/:id",
                state: { number },
              }}
            >
              <Miniature
                idMiniature={number}
                key={number}
                klass="videoSlider"
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ScrollingMiniatures;
