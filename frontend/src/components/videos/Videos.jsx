import PropTypes from "prop-types";
import styles from "./Videos.module.css";

function Videos({ src }) {
  return (
    <div id={styles.videoContainer}>
      <video id={styles.video} controls src={src}>
        <track default kind="captions" src=".../assets/quenouilles.fr.vtt" />
      </video>
      <div id={styles.informations}>
        <h2 id={styles.informations__title}>Les belles quenouilles</h2>
        <div id={styles.informations__owner}>
          <img src="" alt="" />
          <h3>Jeannette Doe</h3>
        </div>
        <div id={styles.informations__likes}>
          <p>vues : 2542</p>
          <img alt="pouce en l'air" src="./src/assets/pouce.png" />
          <p>256</p>
        </div>
        <p id={styles.informations__description}>
          As-tu vu les belles quenouilles ? <br />
          Ces belles quenouilles du Japon qui font face à l'afrique du sud ???
        </p>
      </div>
    </div>
  );
}

Videos.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Videos;
