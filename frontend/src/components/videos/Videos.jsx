import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Videos.module.css";

function Videos({ videoInfo }) {
  const [likes, setLikes] = useState(0);

  const handleLike = async () => {
    await fetch("http://localhost:3310/api/videos/4/like", { method: "PUT" });
    const videoCall = await fetch("http://localhost:3310/api/videos/4");
    const videoResult = await videoCall.json();
    setLikes(videoResult.nbr_like);
  };

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
          <button
            type="button"
            id={styles.informations__likes__button}
            onClick={handleLike}
          >
            <img alt="pouce en l'air" src="./src/assets/pouce.png" />
          </button>
          <p>{likes !== 0 ? likes : videoInfo.nbr_like}</p>
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
