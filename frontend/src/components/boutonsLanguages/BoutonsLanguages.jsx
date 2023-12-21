// import { useEffect, useState } from "react";
import { useState, useEffect } from "react";
import styles from "./boutonsLanguages.module.css";

function VideoPage() {
  const [actualCategory, setActualCategory] = useState("");

  function getCategory(categorySelected) {
    setActualCategory(categorySelected);
  }
  // appel de la route get avec query pour trier les resultats en fonction de la table category
  useEffect(() => {
    (async () => {
      const triedCategory = await fetch(
        `http://localhost:3310/api/miniatures?category=${actualCategory}`
      );
      await triedCategory.json();
    })();
  }, [getCategory]);

  const categories = ["Javascript", "php", "Python", "Java", "css"];

  return (
    <div className={styles.buttonsContainer}>
      {categories.map((category) => (
        <button
          id={styles[category]}
          className={styles.buttonsContainer__category}
          type="button"
          key={category}
          onClick={() => getCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default VideoPage;
