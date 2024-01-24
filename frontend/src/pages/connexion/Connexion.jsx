import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Donnees from "./DonneesFormulaire";
import styles from "./connexion.module.css";

function Connexion() {
  const donnees = Donnees();
  const navigate = useNavigate();
  const [connexion, setConnexion] = useState(
    styles.inscription__mainElement__isOk
  );
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Appel à l'API pour créer un nouvel utilisateur
      const response = await fetch("http://localhost:3310/api/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mail: donnees.email,
          password: donnees.password,
        }),
      });

      if (response.status === 200) {
        navigate("/");

        const auth = await response.json();
        console.info(auth);
        // recuperation des informations pour renvoyer à la page connexion, ou dans l'affichage du site, ou dans un contexte.
      } else {
        // Log des détails de la réponse en cas d'échec
        console.info(response);
        setConnexion(styles.inscription__mainElement__isNotOk);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };
  const ranges = [
    {
      value: "email",
      state: donnees.email,
      text: "Email",
      function: donnees.handleChangeEmail,
      small: donnees.falseEmail,
    },
    {
      value: "password",
      state: donnees.password,
      text: "Mot de passe",
      function: donnees.handleChangePassword,
      small: donnees.falsePassword,
    },
  ];

  const handleClick = () => {
    navigate("/inscription");
  };

  return (
    <div className={styles.inscription}>
      <div className={styles.inscription__mainElement}>
        <img
          className={styles.inscription__mainElement__desktopImg}
          src="./src/assets/image-login.jpg"
          alt=""
        />
        <img
          className={styles.inscription__mainElement__mobileImg}
          src="./src/assets/logop3.svg"
          alt=""
        />
        <p className={connexion}>L'email ou le mot de passe est incorrect</p>
        <div className={styles.inscription__mainElement__formConteneur}>
          <h1 className={styles.inscription__mainElement__formConteneur__title}>
            Connectez-vous
          </h1>
          <form
            action=""
            method="post"
            className={
              styles.inscription__mainElement__formConteneur__formulaire
            }
          >
            {ranges.map((e) => (
              <div
                className={
                  styles.inscription__mainElement__formConteneur__formulaire__range
                }
              >
                <label htmlFor={e.value}>{e.text}</label>
                <input
                  type={
                    e.value === "password" || e.value === "confirmePassword"
                      ? "password"
                      : "text"
                  }
                  name={e.value}
                  id={e.value}
                  value={e.state}
                  onChange={e.function}
                  required
                />
                {e.small}
              </div>
            ))}
            <button
              type="submit"
              onClick={handleSubmit}
              className={
                styles.inscription__mainElement__formConteneur__formulaire__button
              }
            >
              Connexion
            </button>
            <p
              className={
                styles.inscription__mainElement__formConteneur__formulaire__paragraphe
              }
            >
              Ou
            </p>
            <button
              type="button"
              onClick={handleClick}
              className={
                styles.inscription__mainElement__formConteneur__formulaire__button
              }
            >
              Inscription
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Connexion;
