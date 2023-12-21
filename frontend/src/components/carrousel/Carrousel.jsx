import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Carrousel.module.css";

export default function Carrousel({ title }) {
  const [videosMiniature, setVideosMiniature] = useState([]);
  useEffect(() => {
    (async () => {
      const videoCall = await fetch("http://localhost:3310/api/videos");
      const videoResult = await videoCall.json();
      setVideosMiniature(videoResult);
    })();
  }, []);
  return (
    <div className={styles.mainContainer}>
      <p className={styles.title}>{title}</p>
      <div className={styles.slider1}>
        <div className={styles.slider}>
          {videosMiniature.map((element) => (
            <img
              src={element.image}
              alt=""
              key={element.id}
              id={element.id}
              className={styles.imgCarrousel}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

Carrousel.propTypes = {
  title: PropTypes.string.isRequired,
};
