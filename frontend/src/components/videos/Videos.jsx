import PropTypes from "prop-types";
import styles from "./Videos.module.css";

function Videos({ videoInfo }) {
  return (
    <div id={styles.videoContainer}>
      <video id={styles.video} controls src={videoInfo.link}>
        <track default kind="captions" src="../../assets/quenouilles.fr.vtt" />
      </video>
      <div id={styles.informations}>
        <h2 id={styles.informations__title}>{videoInfo.title}</h2>
        <div id={styles.informations__owner}>
          <img src="./src/assets/profil.png" alt="" />
          <h3>{videoInfo.pseudo}</h3>
        </div>
        <div id={styles.informations__likes}>
          <p>vues : {videoInfo.nb_view}</p>
          <img alt="pouce en l'air" src="./src/assets/pouce.png" />
          <p>{videoInfo.nbr_like}</p>
        </div>
        <p id={styles.informations__description}>{videoInfo.description}</p>
      </div>
    </div>
  );
}

Videos.propTypes = {
  videoInfo: PropTypes.shape({
    link: PropTypes.string,
    title: PropTypes.string,
    pseudo: PropTypes.string,
    nb_view: PropTypes.number,
    nbr_like: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default Videos;
