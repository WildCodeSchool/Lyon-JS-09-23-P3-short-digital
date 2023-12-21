// import { useEffect, useState } from "react";
import { useState, useEffect } from "react";
import "./boutonsLanguages.css";

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
    <div id="buttons">
      {categories.map((category) => (
        <button
          id={category}
          className="buttonCategory"
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
