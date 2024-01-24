import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const navigate = useNavigate();

  const handleClickConnexion = () => {
    navigate("/connexion");
  };

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
        <li>
          <Link to="/upload" className={styles.navbar}>
            Ajouter une video
          </Link>
        </li>
        <li />
      </ul>
      <button
        type="button"
        className={styles.btnConnection}
        onClick={handleClickConnexion}
      >
        Se Connecter
      </button>
      <img className={styles.imgProfil} src="./src/assets/profil.png" alt="" />
    </nav>
  );
}
