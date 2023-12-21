import PropTypes from "prop-types";
import styles from "./Videos.module.css";

function Videos({ src }) {
  return (
    <div id={styles.videoContainer}>
      <video id={styles.video} controls src={src.link}>
        <track default kind="captions" src=".../assets/quenouilles.fr.vtt" />
      </video>
      <div id={styles.informations}>
        <h2 id={styles.informations__title}>{src.title}</h2>
        <div id={styles.informations__owner}>
          <img src="./src/assets/profil.png" alt="" />
          <h3>{src.pseudo}</h3>
        </div>
        <div id={styles.informations__likes}>
          <p>{`vues : ${src.nb_view}`}</p>
          <img alt="pouce en l'air" src="./src/assets/pouce.png" />
          <p>{src.nbr_like}</p>
        </div>
        <p id={styles.informations__description}>{src.description}</p>
      </div>
    </div>
  );
}

Videos.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Videos;
