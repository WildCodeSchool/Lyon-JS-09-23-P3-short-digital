/* eslint-disable no-useless-escape */
import { useState } from "react";
import styles from "./inscription.module.css";

function Inscription() {
  const [pseudo, setPseudo] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [limitRange, setLimitRange] = useState("");
  const MAX_LENGTH_NAME = 45;
  const MIN_LENGTH_PASSWORD = 8;
  const MAX_LENGTH_PASSWORD = 200;
  const regexEmail =
    /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,3})/;
  const regexPassword =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,20})$/g;

  const handleChangePseudo = (p) => {
    if (p.target.value.length <= MAX_LENGTH_NAME) {
      setPseudo(p.target.value);
      setLimitRange("");
    }
  };

  const handleChangeFirstname = (f) => {
    if (f.target.value.length <= MAX_LENGTH_NAME) {
      setFirstname(f.target.value);
    }
  };

  const handleChangeLastname = (l) => {
    if (l.target.value.length <= MAX_LENGTH_NAME) {
      setLastname(l.target.value);
    }
  };

  const handleChangeEmail = (e) => {
    if (e.target.value.match(regexEmail)) {
      setEmail(e.target.value);
    }
  };

  const handleChangePassword = (pw) => {
    if (
      pw.target.value.length > MIN_LENGTH_PASSWORD ||
      (pw.target.value.length <= MAX_LENGTH_PASSWORD &&
        pw.target.value.match(regexPassword))
    ) {
      setPassword(pw.target.value);
    }
  };

  const handleChangeConfirmPassword = (cpw) => {
    if (cpw.target.value !== password) {
      setLimitRange(<small>Le mot de passe ne correspond pas</small>);
      //
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Appel à l'API pour créer un nouvel utilisateur
      const response = await fetch("http://localhost:3310/api/inscription", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pseudo,
          firstname,
          lastname,
          email,
          password,
        }),
      });
      if (response.status === 200) {
        const auth = await response.json();
        console.info(auth);
        // recuperation des informations pour renvoyer à la page connexion, ou dans l'affichage du site, ou dans un contexte. Le traitement des informations sera finalisé dans une us qui reliera le front au back
      } else {
        // Log des détails de la réponse en cas d'échec
        console.info(response);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
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
        <div className={styles.inscription__mainElement__formConteneur}>
          <h1 className={styles.inscription__mainElement__formConteneur__title}>
            Inscrivez vous
          </h1>
          <form
            action=""
            method="post"
            className={
              styles.inscription__mainElement__formConteneur__formulaire
            }
          >
            <div
              className={
                styles.inscription__mainElement__formConteneur__formulaire__range
              }
            >
              <label htmlFor="pseudo">Pseudo</label>
              <input
                type="text"
                name="pseudo"
                id="pseudo"
                required
                value={pseudo}
                onChange={handleChangePseudo}
              />
            </div>
            <div
              className={
                styles.inscription__mainElement__formConteneur__formulaire__range
              }
            >
              <label htmlFor="firstname">Prénom</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                required
                value={firstname}
                onChange={handleChangeFirstname}
              />
            </div>
            <div
              className={
                styles.inscription__mainElement__formConteneur__formulaire__range
              }
            >
              <label htmlFor="lastname">Nom de famille</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                required
                value={lastname}
                onChange={handleChangeLastname}
              />
            </div>
            <div
              className={
                styles.inscription__mainElement__formConteneur__formulaire__range
              }
            >
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                required
                value={email}
                onChange={handleChangeEmail}
              />
            </div>
            <div
              className={
                styles.inscription__mainElement__formConteneur__formulaire__range
              }
            >
              <label htmlFor="password">Mot de passe</label>
              <input
                type="text"
                name="password"
                id="password"
                required
                onChange={handleChangePassword}
              />
            </div>

            <div
              className={
                styles.inscription__mainElement__formConteneur__formulaire__range
              }
            >
              <label htmlFor="confirmPassword">
                Confirmez votre mot de passe
              </label>
              <input
                type="text"
                name="confirmPassword"
                id="confirmPassword"
                required
                onChange={handleChangeConfirmPassword}
              />
              {limitRange}
            </div>
            <div
              className={
                styles.inscription__mainElement__formConteneur__formulaire__range
              }
            >
              <button
                className={
                  styles.inscription__mainElement__formConteneur__formulaire__button
                }
                type="submit"
                onClick={handleSubmit}
              >
                Inscription
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Inscription;
