import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Miniature.module.css";

export default function Miniature({ idMiniature, carouselClass }) {
  const [miniature, setMiniature] = useState("");
  // const params = useParams();
  // useEffect(() => {
  //   (async () => {
  //     const mini = await fetch(
  //       `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&api_key=d8bedc0b2557b9f57527c89f46531039&language=fr-FR&page=1&sort_by=revenue.desc&with_original_language=en|fr`
  //     );
  //     const miniParsed = await mini.json();
  //     setMiniature(miniParsed.results[idMiniature]);
  //   })();
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3310/api/videos/miniatures/${idMiniature}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const data = await response.json();
        setMiniature(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        // Handle the error here, e.g., set a default value or display an error message
      }
    };
    fetchData();
  }, []);
  const imgClass = `${carouselClass}__img`;
  const titleClass = `${carouselClass}p`;

  return (
    <div className={styles[carouselClass]}>
      <img className={imgClass} src={miniature.image} alt="" />
      <p className={styles[titleClass]}>{miniature.title}</p>
    </div>
  );
}
Miniature.propTypes = {
  idMiniature: PropTypes.number.isRequired,
  carouselClass: PropTypes.string.isRequired,
};
