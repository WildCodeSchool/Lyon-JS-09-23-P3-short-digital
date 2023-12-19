import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [active, setActive] = useState(false);

  function burger() {
    setActive(!active);
  }

  const menu = active === true ? styles.active : null;
  return (
    <nav className={menu}>
      <button
        type="button"
        id={styles.burger}
        aria-label="Save"
        onClick={() => burger()}
      />
      <img className={styles.imgLogo} src="./src/assets/logop3.svg" alt="" />
      <h2 className={styles.name}>Short Digital</h2>
      <ul>
        <li>
          {" "}
          <a href="htts://lien-pour-eslint">Acceuil</a>{" "}
        </li>
        <li>
          {" "}
          <a href="htts://lien-pour-eslint">Recherche</a>{" "}
        </li>
        <li>
          {" "}
          <a href="htts://lien-pour-eslint">Categories</a>{" "}
        </li>
        <li>
          {" "}
          <a href="htts://lien-pour-eslint">Ajouter une video</a>{" "}
        </li>
      </ul>
      <button type="button" className={styles.btnConnection}>
        Se Connecter
      </button>
      <img className={styles.imgProfil} src="./src/assets/profil.png" alt="" />
    </nav>
  );
}
