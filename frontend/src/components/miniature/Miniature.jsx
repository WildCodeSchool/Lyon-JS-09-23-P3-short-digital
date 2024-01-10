import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Miniature.module.css";

export default function Miniature({ idMiniature, klass }) {
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
  const class0 = `${klass}img`;
  const class1 = `${klass}p`;

  return (
    <div className={styles[klass]}>
      <img
        className={styles[class0]}
        src={`https://image.tmdb.org/t/p/w500/${miniature.backdrop_path}`}
        alt=""
      />
      <p className={styles[class1]}>
        Les Variables en JavaScript: Appprendre la bases des variables
      </p>
    </div>
  );
}
Miniature.propTypes = {
  idMiniature: PropTypes.number.isRequired,
  klass: PropTypes.string.isRequired,
};
