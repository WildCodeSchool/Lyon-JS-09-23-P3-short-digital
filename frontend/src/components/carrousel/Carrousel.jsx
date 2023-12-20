import { useState, useEffect } from "react";
import styles from "./Carrousel.module.css";

export default function Carrousel() {
  const [videosMiniature, setVideosMiniature] = useState([]);
  useEffect(() => {
    (async () => {
      const videoCall = await fetch("http://localhost:3310/api/videos");
      const videoResult = await videoCall.json();
      setVideosMiniature(videoResult);
      console.log(videoResult)
    })();
  }, []);
  return (
    <div>
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
  );
}
