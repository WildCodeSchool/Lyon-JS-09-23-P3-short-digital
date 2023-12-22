import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Miniature.module.css";

export default function Miniature({ idMiniature }) {
  const [miniature, setMiniature] = useState("");
  useEffect(() => {
    (async () => {
      const mini = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&api_key=d8bedc0b2557b9f57527c89f46531039&language=fr-FR&page=1&sort_by=revenue.desc&with_original_language=en|fr`
      );
      const miniParsed = await mini.json();
      setMiniature(miniParsed.results[idMiniature]);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <img
        className={styles.container__imgMini}
        src={`https://image.tmdb.org/t/p/w500/${miniature.backdrop_path}`}
        alt=""
      />
      <p className={styles.container__videoTitle}>
        Les Variables en JavaScript: Appprendre la bases des variables
      </p>
    </div>
  );
}
Miniature.propTypes = {
  idMiniature: PropTypes.number.isRequired,
};
