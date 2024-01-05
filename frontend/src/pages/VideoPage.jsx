import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Videos.module.css";

function Videos() {
  const params = useParams();
  const [videoInfo, setVideoInfo] = useState([]);

  useEffect(() => {
    (async () => {
      const videoCall = await fetch(
        `http://localhost:3310/api/videos/${params.id}`
      );
      const videoResult = await videoCall.json();
      setVideoInfo(videoResult);
    })();
  }, []);

  return (
    <div id={styles.videoContainer}>
      <video id={styles.video} controls src={videoInfo.link}>
        <track default kind="captions" src="../../ets/quenouilles.fr.vtt" />
      </video>
      <div id={styles.informations}>
        <h2 id={styles.informations__title}>{videoInfo.title}</h2>
        <div id={styles.informations__owner}>
          <img src="./src/assets/profil.png" alt="" />
          <h3>Jeannette Doe</h3>
        </div>
        <div id={styles.informations__likes}>
          <p>vues : 2542</p>
          <img alt="pouce en l'air" src="./src/assets/pouce.png" />
          <p>256</p>
        </div>
        <p id={styles.informations__description}>{videoInfo.description}</p>
      </div>
    </div>
  );
}
export default Videos;
