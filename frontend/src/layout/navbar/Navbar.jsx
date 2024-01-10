import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }
  const category = ["JavaScript", "css", "Java", "Autre", "php", "Python"];
  const lastMenuElement = category[category.length - 1];
  const menu = active === true ? styles.active : styles.categoryList;

  return (
    <nav>
      <Link to="/" className={styles.navbar}>
        <img className={styles.imgLogo} src="./src/assets/logop3.svg" alt="" />
      </Link>
      <Link to="/" className={styles.navbar}>
        <h2 className={styles.name}>Short Digital</h2>
      </Link>
      <ul>
        <li>
          {" "}
          <Link to="/" className={styles.navbar}>
            Accueil
          </Link>
        </li>
        <li>Recherche</li>
        <li id={styles.category}>
          <button
            type="button"
            onClick={handleClick}
            className={styles.buttonCategory}
          >
            Categories
          </button>

          <ul className={styles.categoryMenu}>
            {category.map((categorie) => (
              <li
                id={lastMenuElement === categorie && styles.lastMenuElement}
                key={categorie}
                className={menu}
              >
                <a href="https://laPageNExistePasEncore.com">{categorie}</a>
              </li>
            ))}
          </ul>
        </li>
        <li>Ajouter une video</li>
      </ul>
      <button type="button" className={styles.btnConnection}>
        Se Connecter
      </button>
      <img className={styles.imgProfil} src="./src/assets/profil.png" alt="" />
    </nav>
  );
}
