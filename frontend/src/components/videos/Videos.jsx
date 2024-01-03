import { useState } from "react";
import styles from "./Videos.module.css";

function Videos() {
  const [like, setLike] = useState(254);

  const handleLike = () => {
    setLike(like + 1);
  };

  return (
    <div id={styles.videoContainer}>
      <video
        id={styles.video}
        controls
        src="https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/quenouille.mp4?alt=media&token=98ef1dac-1a49-4eee-9b24-40466622f095%27,%20%27n%27,%20%27Ceci%20est%20une%20vid%C3%A9o%20tr%C3%A8s%20instructive%20sur%20les%20quenouilles"
      >
        <track default kind="captions" src="../../assets/quenouilles.fr.vtt" />
      </video>
      <div id={styles.informations}>
        <h2 id={styles.informations__title}>Les belles quenouilles</h2>
        <div id={styles.informations__owner}>
          <img src="./src/assets/profil.png" alt="" />
          <h3>Jeannette Doe</h3>
        </div>
        <div id={styles.informations__likes}>
          <p>vues : 2569</p>
          <button
            type="button"
            id={styles.informations__likes__button}
            onClick={handleLike}
          >
            <img alt="pouce en l'air" src="./src/assets/pouce.png" />
          </button>
          <p>{like}</p>
        </div>
        <p id={styles.informations__description}>
          As-tu vu les belles quenouilles ? <br />
          Ces belles quenouilles du Japon qui font face à l'afrique du sud ???
        </p>
      </div>
    </div>
  );
}
export default Videos;
