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
       <div id={styles.burger} onClick={() => burger()}/>
      <img className={styles.imgLogo} src="./src/assets/logop3.svg" alt="" />
      <ul>
            <li> <a href="#">Acceuil</a> </li>
            <li> <a href="#">Recherche</a> </li>
            <li> <a href="#">Categories</a> </li>
            <li> <a href="#">Ajouter une video</a> </li>
        </ul>
        
        
       <button className={styles.btnConnection} >Se Connecter</button>
       <img className={styles.imgProfil} src="./src/assets/profil.png" alt="" />
    </nav>
  );
}
